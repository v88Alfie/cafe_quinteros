"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface Todo {
  id: number;
  completed: boolean;
  task: string;
}

const TodoFormSchema = z.object({
  task: z.string().min(2, {
    message: "Please Enter ToDo Task",
  }),
});

interface TodoProps {
  todo: Todo;
  updateTodoTask: (data: Todo) => void;
  setOnEdit: (data: number) => void;
}

type TodoFormData = z.infer<typeof TodoFormSchema>;

const TodoUpdateItem: React.FC<TodoProps> = ({
  todo,
  updateTodoTask,
  setOnEdit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(TodoFormSchema),
  });

  const onSubmit = handleSubmit((updateTodo) => {
    updateTodoTask({
      id: todo.id,
      completed: todo.completed,
      ...updateTodo,
    });
    setOnEdit(0);
  });

  return (
    <form
      className="flex gap-[2rem] justify-between items-center w-full"
      onSubmit={onSubmit}
    >
      <input
        className="w-full text-montserrat_regular_16 outline-none"
        type="text"
        defaultValue={todo?.task}
        placeholder="What is your task"
        {...register("task")}
      ></input>
      <div className="flex gap-[1.5rem]">
        <Button variant="outline" type="submit">
          <Check />
        </Button>
        <Button type="button" onClick={() => setOnEdit(0)} variant="outline">
          <X />
        </Button>
      </div>
    </form>
  );
};

export default TodoUpdateItem;
