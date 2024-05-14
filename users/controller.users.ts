import { RequestHandler, NextFunction } from "express";
import { StandardResponse } from "../types/response";

export const signupUser: RequestHandler<
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

export const signinUser: RequestHandler<
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

export const postPicture: RequestHandler<
  { user_id: string },
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export const deletePicture: RequestHandler<
  { user_id: string },
  StandardResponse<number>,
  unknown,
  unknown
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};

export const patchUser: RequestHandler<
  { user_id: string },
  StandardResponse<number>,
  unknown,
  { action: string }
> = async (req, res, next: NextFunction) => {
  try {
  } catch (e) {
    next(e);
  }
};
