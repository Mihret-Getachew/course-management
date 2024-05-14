import { RequestHandler, NextFunction } from "express";
import { StandardResponse } from "../types/response";

export const postCourse: RequestHandler<
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

export const getCourses: RequestHandler<
  unknown,
  StandardResponse<number>,
  unknown,
  { action: string; page: number }
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export const getCourse: RequestHandler<
  { courseId: string },
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export const deleteCourse: RequestHandler<
  { courseId: string },
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export const putCourse: RequestHandler<
  { courseId: string },
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};
