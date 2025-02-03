"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { type TodoSchema } from "prisma/generated/zod/modelSchema/TodoSchema";
import { z } from "zod";

type Todo = z.infer<typeof TodoSchema>;

const prisma = new PrismaClient();

export async function addTodo(formData: Omit<Todo, "title">) {
  const todo: Todo = {
    title: formData.get("title"),
  };
  await prisma.todo.create({ data: todo });
  revalidatePath("/");
}

export async function toggleTodo(id: number, isDone: boolean) {
  await prisma.todo.update({
    where: { id },
    data: { is_done: isDone },
  });
  revalidatePath("/");
}

export async function deleteTodo(id: number) {
  await prisma.todo.delete({
    where: { id },
  });
  revalidatePath("/");
}
