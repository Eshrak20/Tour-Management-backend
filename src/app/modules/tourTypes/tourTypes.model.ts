import { model, Schema } from "mongoose";
import { ITourType } from "./tourTypes.interface";

const TourTypeSchema = new Schema<ITourType>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TourType = model<ITourType>("TourType", TourTypeSchema);
