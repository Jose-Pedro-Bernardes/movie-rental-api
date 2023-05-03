import express, { Application, json } from "express";
import { errorHandler } from "./error";
import moviesRouter from "./routes/movies.routes";

const app: Application = express();

app.use(json());
app.use("/movies", moviesRouter);
app.use(errorHandler);

export default app;
