import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status-codes";
import { ITourType } from "./tourTypes.interface";
import { TourType } from "./tourTypes.model";

const createTourType = async (payload: Partial<ITourType>) => {
  const { name, ...rest } = payload;

  const isTourTypeExist = await TourType.findOne({ name });

  if (isTourTypeExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "TourType Already Exist");
  }

  const TourT = await TourType.create({
    name,
    ...rest,
  });

  return TourT;
};

const getTourType = async () => {
  const TourT= await TourType.find({});
  return TourT;
};

const updateTourType = async (TourTypeId: string, payload: Partial<ITourType>) => {
  const isTourTypeExist = await TourType.findById(TourTypeId);

  if (!isTourTypeExist) {
    throw new AppError(httpStatus.NOT_FOUND, "TourType Not Found");
  }

  const TourT = await TourType.findByIdAndUpdate(TourTypeId, payload, {
    new: true,
    runValidators: true,
  });

  return TourT;
};
const deleteTourType = async (TourTypeId: string) => {
  const isTourTypeExist = await TourType.findById(TourTypeId);

  if (!isTourTypeExist) {
    throw new AppError(httpStatus.NOT_FOUND, "TourType Not Found");
  }

  const TourT = await TourType.findByIdAndDelete(TourTypeId);

  return TourT;
};

export const TourTypeServices = {
  createTourType,
  getTourType,
  updateTourType,
  deleteTourType,
};
