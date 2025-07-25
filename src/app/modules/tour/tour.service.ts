import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status-codes";
import { ITour } from "./tour.interface";
import { Tour } from "./tour.model";

const createTour = async (payload: Partial<ITour>) => {
  const { title, ...rest } = payload;

  const isTourExist = await Tour.findOne({ title });

  if (isTourExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Tour Already Exist");
  }

  const TourData = await Tour.create({
    title,
    ...rest,
  });

  return TourData;
};

const getTour = async () => {
  const TourData = await Tour.find({});
  return TourData;
};

const updateTour = async (TourDataId: string, payload: Partial<ITour>) => {
  const isTourExist = await Tour.findById(TourDataId);

  if (!isTourExist) {
    throw new AppError(httpStatus.NOT_FOUND, "TourData Not Found");
  }

  const TourData = await Tour.findByIdAndUpdate(TourDataId, payload, {
    new: true,
    runValidators: true,
  });

  return TourData;
};
const deleteTour = async (TourDataId: string) => {
  const isTourExist = await Tour.findById(TourDataId);

  if (!isTourExist) {
    throw new AppError(httpStatus.NOT_FOUND, "TourData Not Found");
  }

  await Tour.findByIdAndDelete(TourDataId);
};

export const TourServices = {
  createTour,
  getTour,
  updateTour,
  deleteTour,
};
