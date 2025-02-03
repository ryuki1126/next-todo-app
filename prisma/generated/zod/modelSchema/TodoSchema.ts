import { z } from 'zod';

/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////

export const TodoSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1, { message: "タイトルは1文字以上入力してください" }),
  is_done: z.boolean(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Todo = z.infer<typeof TodoSchema>

export default TodoSchema;
