import { NextFunction, RequestHandler } from "express";
import { StandardResponse } from "../types/response";

export const postLecture: RequestHandler<
  unknown,
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export const getLecture: RequestHandler<
  unknown,
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export const putLecture: RequestHandler<
  { course_id: string; lecture_id: string },
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export const deleteLecture: RequestHandler<
  { course_id: string; lecture_id: string },
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};
