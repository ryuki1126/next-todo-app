import { z } from 'zod';

export const TodoScalarFieldEnumSchema = z.enum(['id','title','is_done','created_at','updated_at']);

export default TodoScalarFieldEnumSchema;
