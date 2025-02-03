import { PrismaClient } from "@prisma/client";
import { TodoList } from "@/components/TodoList";
import { AddTodo } from "@/components/AddTodo";

const prisma = new PrismaClient();

const getTodos = async (isDone: boolean) => {
  return await prisma.todo.findMany({
    where: {
      is_done: isDone,
    },
  orderBy: {
    created_at: "desc",
    },
  });
};

export default async function Home() {
  const imcompleteTodos = await getTodos(false);
  const completeTodos = await getTodos(true);
  return (
    <>
      <AddTodo />
      <TodoList todos={imcompleteTodos} isDone={false} />
      <TodoList todos={completeTodos} isDone={true} />
    </>
  );
}
