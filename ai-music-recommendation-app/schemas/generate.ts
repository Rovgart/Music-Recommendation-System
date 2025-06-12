import { z } from "zod";

export const generateFormSchema = z.object({
  generateField: z.string().min(1, { message: "Write something" }),
});
