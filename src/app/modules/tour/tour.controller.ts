import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { TourServices } from "./tour.service";

const createTour = catchAsync(async (req: Request, res: Response) => {
  const Tour = await TourServices.createTour(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Tour Created Successfully",
    data: Tour,
  });
});
const getTour = catchAsync(async (req: Request, res: Response) => {
  const Tour = await TourServices.getTour();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "All Tour retrieved Successfully",
    data: Tour,
  });
});
const updateTour = catchAsync(async (req: Request, res: Response) => {
  const TourId = req.params.id;
  const payload = req.body;
  const Tour = await TourServices.updateTour(TourId, payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Tour updated Successfully",
    data: Tour,
  });
});
const deleteTour = catchAsync(async (req: Request, res: Response) => {
  const TourId = req.params.id;
  const Tour = await TourServices.deleteTour(TourId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Tour Deleted Successfully",
    data: Tour,
  });
});

export const TourControllers = {
  createTour,
  getTour,
  updateTour,
  deleteTour
};
