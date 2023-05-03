import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(4),
  admin: z.boolean().optional().default(false),
  active: z.boolean().default(true),
});
const payloadUserSchema = userSchema.omit({ id: true });
const resultUserSchema = userSchema.omit({ password: true });

const getUsersSchema = z.array(resultUserSchema);
const updateUserSchema = payloadUserSchema.partial();

export {
  userSchema,
  payloadUserSchema,
  getUsersSchema,
  resultUserSchema,
  updateUserSchema,
};
