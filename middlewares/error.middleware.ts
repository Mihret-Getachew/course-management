import { NextFunction, Response, Request } from "express";
import ErrorWithStatus from "../types/error";

export const errorMiddleware = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {};
