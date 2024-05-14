import { Router } from "express";
import {
  deleteCourse,
  getCourse,
  getCourses,
  postCourse,
  putCourse,
} from "./controller.courses";
import lectureRouter from "../lectures/routes.lectures";
import { parseBody } from "../middlewares/parseBody";

const courseRouter = Router();

courseRouter.post("/", parseBody(), postCourse);
courseRouter.get("/", getCourses);
courseRouter.get("/:course_id", getCourse);
courseRouter.delete("/:course_id", deleteCourse);
courseRouter.put("/:course_id", parseBody(), putCourse);

courseRouter.use("/:course_id/lectures", lectureRouter);
export default courseRouter;
