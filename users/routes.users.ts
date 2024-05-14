import { Router } from "express";
import {
  deletePicture,
  postPicture,
  signinUser,
  signupUser,
  patchUser,
} from "./controller.users";
import { parseBody } from "../middlewares/parseBody";

const userRouter = Router();

userRouter.post("/signup", parseBody(), signupUser);
userRouter.post("/signin", parseBody(), signinUser);

// will configure multer
userRouter.post("/:user_id/picture", postPicture);
userRouter.delete("/:user_id/picture", deletePicture);
userRouter.patch("/:user_id", parseBody(), patchUser);

export default userRouter;
