import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { TourTypeServices } from "./tourTypes.service";

const createTourType = catchAsync(async (req: Request, res: Response) => {
  const TourType = await TourTypeServices.createTourType(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "TourType Created Successfully",
    data: TourType,
  });
});
const getTourType = catchAsync(async (req: Request, res: Response) => {
  const TourType = await TourTypeServices.getTourType();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "All TourType retrieved Successfully",
    data: TourType,
  });
});
const updateTourType = catchAsync(async (req: Request, res: Response) => {
  const TourTypeId = req.params.id;
  const payload = req.body;
  const TourType = await TourTypeServices.updateTourType(TourTypeId, payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "TourType updated Successfully",
    data: TourType,
  });
});
const deleteTourType = catchAsync(async (req: Request, res: Response) => {
  const TourTypeId = req.params.id;
  const TourType = await TourTypeServices.deleteTourType(TourTypeId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "TourType Deleted Successfully",
    data: TourType,
  });
});

export const TourTypeControllers = {
  createTourType,
  getTourType,
  updateTourType,
  deleteTourType
};
