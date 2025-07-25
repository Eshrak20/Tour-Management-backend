import { z } from "zod";
import { Types } from "mongoose";

export const tourCreateZodSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  location: z.string().optional(),
  costFrom: z.number().optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  included: z.array(z.string()).optional(),
  excluded: z.array(z.string()).optional(),
  amenities: z.array(z.string()).optional(),
  tourPlan: z.array(z.string()).optional(),
  maxGuest: z.number().optional(),
  minAge: z.number().optional(),
  division: z.string().refine(val => Types.ObjectId.isValid(val), {
    message: "Invalid Division ID"
  }),
  tourType: z.string().refine(val => Types.ObjectId.isValid(val), {
    message: "Invalid TourType ID"
  })
});
export const tourUpdateZodSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).optional(),
  slug: z.string().min(1, { message: "Slug is required" }).optional(),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  location: z.string().optional(),
  costFrom: z.number().optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  included: z.array(z.string()).optional(),
  excluded: z.array(z.string()).optional(),
  amenities: z.array(z.string()).optional(),
  tourPlan: z.array(z.string()).optional(),
  maxGuest: z.number().optional(),
  minAge: z.number().optional(),
  division: z.string().refine(val => Types.ObjectId.isValid(val), {
    message: "Invalid Division ID"
  }).optional(),
  tourType: z.string().refine(val => Types.ObjectId.isValid(val), {
    message: "Invalid TourType ID"
  }).optional(),
});
