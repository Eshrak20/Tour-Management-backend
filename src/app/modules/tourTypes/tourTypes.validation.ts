import { z } from "zod";

export const createTourTypeZodSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
