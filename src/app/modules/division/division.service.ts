import AppError from "../../errorHelpers/AppError";
import { IDivision } from "./division.interface";
import httpStatus from "http-status-codes";
import { Division } from "./division.model";

const createDiv = async (payload: Partial<IDivision>) => {
  const { name, ...rest } = payload;

  const isDivExist = await Division.findOne({ name });

  if (isDivExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Division Already Exist");
  }

  const division = await Division.create({
    name,
    ...rest,
  });

  return division;
};

const getDiv = async () => {
  const division = await Division.find({});
  return division;
};

const updateDiv = async (divisionId: string, payload: Partial<IDivision>) => {
  const isDivExist = await Division.findById(divisionId);

  if (!isDivExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Division Not Found");
  }

  const division = await Division.findByIdAndUpdate(divisionId, payload, {
    new: true,
    runValidators: true,
  });

  return division;
};
const deleteDiv = async (divisionId: string) => {
  const isDivExist = await Division.findById(divisionId);

  if (!isDivExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Division Not Found");
  }

  const division = await Division.findByIdAndDelete(divisionId);

  return division;
};

export const DivServices = {
  createDiv,
  getDiv,
  updateDiv,
  deleteDiv,
};
