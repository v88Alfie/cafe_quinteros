"use client";

import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/** API */
import { deleteTodo, fetchTodos, updateTodo } from "../../api/todos";

/** UI Components */
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

const TodoList = () => {
  const queryClient = useQueryClient();
  const todoss = [
    {
      id: 1,
      task: "Add todo",
      is_done: false,
    },
    {
      id: 2,
      task: "Update todo",
      is_done: false,
    },
    {
      id: 3,
      task: "Delete todo",
      is_done: false,
    },
  ];

  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDelete = (id: number) => {
    deleteTodoMutation.mutate(id);
  };

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleEdit = (updateTodo: {
    id: number;
    task: string;
    is_done: boolean | string;
  }) => {
    console.log(updateTodo, "updateTodo");
    updateTodoMutation.mutate({ ...updateTodo });
  };

  return (
    <ul className="pt-[3rem] flex flex-col gap-2">
      {todos?.map((todo: { id: number; task: string; is_done: boolean }) => (
        <li
          key={todo.id}
          className="flex gap-[2rem] justify-between items-center w-full p-[2rem] rounded-lg border border-gray"
        >
          <div className="flex gap-[2rem] items-center">
            <Checkbox
              id={todo.id?.toString()}
              onCheckedChange={(checked) => {
                handleEdit({
                  id: todo.id,
                  is_done: checked,
                  task: todo.task,
                });
              }}
            />
            <label
              htmlFor={todo.id?.toString()}
              className={`${
                todo.is_done ? "line-through text-text/[0.6]" : ""
              } text-montserrat_regular_16 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
            >
              {todo.task}
            </label>
          </div>
          <div className="flex gap-[1.5rem]">
            <Button variant="outline">
              <Pencil />
            </Button>
            <Button
              type="button"
              onClick={() => handleDelete(todo.id)}
              variant="outline"
            >
              <Trash2 />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
