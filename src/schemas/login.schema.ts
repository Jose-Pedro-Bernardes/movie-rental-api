import { z } from "zod";

const payloadLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { payloadLoginSchema };
