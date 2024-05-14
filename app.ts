// Import Dependencies
import express, { NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import "dotenv/config";
import userRouter from './users/routes.users';
import courseRouter from './courses/routes.courses';
import ErrorWithStatus from './types/error';
import { errorMiddleware } from "./middlewares/error.middleware";

// Instantiate Express
const app = express();

// Configurations
app.set("port", 3000);

// Add Middlewares
app.use(helmet());
app.use(cors());

if(process.env['NODE_ENV'] === 'development'){
  app.use(morgan("dev"))
}
else{
  // create a write stream (in append mode)
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    { flags: "a" }
  );

  // setup the logger
  app.use(morgan("combined", { stream: accessLogStream }));
}

// Add Router
app.use("/users",userRouter)
app.use("/courses",courseRouter)

// Add Other Middlewares
app.use(errorMiddleware)

// Boot up express
app.listen(app.get("port"),()=> console.log("Server is live"))
