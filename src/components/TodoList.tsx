"use client";

import { toggleTodo, deleteTodo } from "@/app/actions";

export function TodoList({ todos, isDone }: { todos: any; title: string, isDone: boolean }) {
  const title = isDone ? "もう終わったよ" : "これからやるよ";
  return (
    <>
      <div className="p-6 my-6 bg-white shadow-lg rounded-lg">
        <p className="font-bold text-lg mb-3">{title}</p>
        <ul className="space-y-3">
          {todos.map((todo: any) => (
            <li key={todo.id} className="flex justify-between items-center p-3 border-b border-gray-200">
              <p className="flex-1 text-gray-700">{todo.title}</p>
              <div className="space-x-3">
                {isDone ? (
                  <button onClick={() => toggleTodo(todo.id, false)} className="bg-yellow-600 text-white px-3 py-2 rounded-lg hover:bg-yellow-700 transition duration-300">
                    戻す
                  </button>
                ) : (
                  <button onClick={() => toggleTodo(todo.id, true)} className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                    完了
                  </button>
                )}
                <button onClick={() => deleteTodo(todo.id)} className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
