import { z } from "zod";

export const createDivisionZodSchema = z.object({
//   id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().optional(), // optional since it's not required in Mongoose
  thumbnail: z.string().url("Thumbnail must be a valid URL").optional(),
  description: z.string().optional(),
});
