import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereInputSchema } from '../inputTypeSchemas/TodoWhereInputSchema'
import { TodoOrderByWithRelationInputSchema } from '../inputTypeSchemas/TodoOrderByWithRelationInputSchema'
import { TodoWhereUniqueInputSchema } from '../inputTypeSchemas/TodoWhereUniqueInputSchema'
import { TodoScalarFieldEnumSchema } from '../inputTypeSchemas/TodoScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TodoSelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  is_done: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
}).strict()

export const TodoFindFirstArgsSchema: z.ZodType<Prisma.TodoFindFirstArgs> = z.object({
  select: TodoSelectSchema.optional(),
  where: TodoWhereInputSchema.optional(),
  orderBy: z.union([ TodoOrderByWithRelationInputSchema.array(),TodoOrderByWithRelationInputSchema ]).optional(),
  cursor: TodoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TodoScalarFieldEnumSchema,TodoScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.TodoFindFirstArgs>;

export default TodoFindFirstArgsSchema;
