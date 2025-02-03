import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereUniqueInputSchema } from '../inputTypeSchemas/TodoWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TodoSelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  is_done: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()

export const TodoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TodoFindUniqueOrThrowArgs> = z.object({
  select: TodoSelectSchema.optional(),
  where: TodoWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TodoFindUniqueOrThrowArgs>;

export default TodoFindUniqueOrThrowArgsSchema;
