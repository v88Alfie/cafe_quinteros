"use client";

import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/** API */
import { deleteTodo, fetchTodos, updateTodo } from "../../api/todos";

/** UI Components */
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import TodoUpdateItem from "./TodoUpdateItem";

interface Todo {
  id: number;
  completed: boolean;
  task: string;
}

const TodoList = () => {
  const queryClient = useQueryClient();
  const [onEdit, setOnEdit] = useState(0);

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
    completed: boolean | string;
  }) => {
    updateTodoMutation.mutate({ ...updateTodo });
  };

  const updateTodoTask = (data: Todo) => {
    updateTodoMutation.mutate({ ...data });
  };

  return (
    <ul className="pt-[3rem] flex flex-col gap-2">
      {todos?.map((todo: { id: number; task: string; completed: boolean }) => (
        <li
          key={todo.id}
          className="flex justify-between items-center w-full p-[2rem] rounded-lg border border-gray"
        >
          {onEdit === todo.id && (
            <TodoUpdateItem
              todo={todo}
              updateTodoTask={updateTodoTask}
              setOnEdit={setOnEdit}
            />
          )}
          {onEdit !== todo.id && (
            <div className="flex gap-[2rem] items-center">
              <Checkbox
                id={todo.id?.toString()}
                onCheckedChange={(checked) => {
                  handleEdit({
                    id: todo.id,
                    completed: checked,
                    task: todo.task,
                  });
                }}
              />
              <label
                htmlFor={todo.id?.toString()}
                className={`${
                  todo.completed ? "line-through text-text/[0.6]" : ""
                } text-montserrat_regular_16 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
              >
                {todo.task}
              </label>
            </div>
          )}
          <div className="flex gap-[1.5rem]">
            {onEdit !== todo.id && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setOnEdit(todo.id)}
              >
                <Pencil />
              </Button>
            )}
            {onEdit !== todo.id && (
              <Button
                type="button"
                onClick={() => handleDelete(todo.id)}
                variant="outline"
              >
                <Trash2 />
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
