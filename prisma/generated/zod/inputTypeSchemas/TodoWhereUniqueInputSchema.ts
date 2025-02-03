import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TodoWhereInputSchema } from './TodoWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TodoWhereUniqueInputSchema: z.ZodType<Prisma.TodoWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TodoWhereInputSchema),z.lazy(() => TodoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TodoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TodoWhereInputSchema),z.lazy(() => TodoWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string().min(1, { message: "タイトルは1文字以上入力してください" }) ]).optional(),
  is_done: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict()) as z.ZodType<Prisma.TodoWhereUniqueInput>;

export default TodoWhereUniqueInputSchema;
