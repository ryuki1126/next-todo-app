import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TodoCreateManyInputSchema: z.ZodType<Prisma.TodoCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string().min(1, { message: "タイトルは1文字以上入力してください" }),
  is_done: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.TodoCreateManyInput>;

export default TodoCreateManyInputSchema;
