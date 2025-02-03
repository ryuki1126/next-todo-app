import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TodoSelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  is_done: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()

export default TodoSelectSchema;
