import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const TodoUpdateManyMutationInputSchema: z.ZodType<Prisma.TodoUpdateManyMutationInput> = z.object({
  title: z.union([ z.string().min(1, { message: "タイトルは1文字以上入力してください" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  is_done: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.TodoUpdateManyMutationInput>;

export default TodoUpdateManyMutationInputSchema;
