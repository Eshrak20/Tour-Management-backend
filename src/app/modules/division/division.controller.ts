import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { DivServices } from "./division.service";
import httpStatus from "http-status-codes";

const createDiv = catchAsync(async (req: Request, res: Response) => {
  const division = await DivServices.createDiv(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Division Created Successfully",
    data: division,
  });
});
const getDiv = catchAsync(async (req: Request, res: Response) => {
  const division = await DivServices.getDiv();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "All Division retrieved Successfully",
    data: division,
  });
});
const updateDiv = catchAsync(async (req: Request, res: Response) => {
  const divisionId = req.params.id;
  const payload = req.body;
  const division = await DivServices.updateDiv(divisionId, payload);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Division updated Successfully",
    data: division,
  });
});
const deleteDiv = catchAsync(async (req: Request, res: Response) => {
  const divisionId = req.params.id;
  const division = await DivServices.deleteDiv(divisionId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Division Deleted Successfully",
    data: division,
  });
});

export const DivControllers = {
  createDiv,
  getDiv,
  updateDiv,
  deleteDiv
};
