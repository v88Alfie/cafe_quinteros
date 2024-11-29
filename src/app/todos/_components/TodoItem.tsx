"use client";

import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { v4 as uuidv4 } from "uuid";

import { createTodo } from "@/app/api/todos";

const TodoFormSchema = z.object({
  task: z.string().min(2, {
    message: "Please Enter ToDo",
  }),
});

type TodoFormData = z.infer<typeof TodoFormSchema>;

const TodoItem = () => {
  const queryClient = useQueryClient();

  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(TodoFormSchema),
  });

  const onSubmit = handleSubmit((data) => {
    createTodoMutation.mutate({
      id: uuidv4(),
      ...data,
      is_done: false,
    });
    console.log("submitting data:", data);
    reset();
  });

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="flex gap-[3.2rem]">
        <input
          className="w-full h-[3rem] p-[2rem] rounded-lg border border-gray"
          type="text"
          placeholder="What is your task"
          {...register("task")}
        ></input>
        <Button className="h-[3rem] p-[2rem] rounded-lg" type="submit">
          <span className="text-white">Add Task</span>
        </Button>
      </form>
    </div>
  );
};

export default TodoItem;
