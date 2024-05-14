import { Router } from "express";
import {
  deleteLecture,
  getLecture,
  postLecture,
  putLecture,
} from "./controller.lectures";
import { parseBody } from "../middlewares/parseBody";

const lectureRouter = Router({ mergeParams: true });

lectureRouter.post("/", parseBody(), postLecture);
lectureRouter.get("/", getLecture);
lectureRouter.put("/:lecture_id", parseBody(), putLecture);
lectureRouter.delete("/:lecture_id", deleteLecture);

export default lectureRouter;
