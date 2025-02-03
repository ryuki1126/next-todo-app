"use server";

import { addTodo } from "@/app/actions";

export async function AddTodo() {
  return (
    <>
      <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
        <p className="text-lg font-bold mb-3">TODOを追加</p>
        <form action={addTodo}>
          <input
            placeholder="TODOを入力してね"
            type="text"
            name="title"
            className="border border-gray-300 rounded-lg p-3 w-1/2 mb-3 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            追加
          </button>
        </form>
      </div>
    </>
  )
}
