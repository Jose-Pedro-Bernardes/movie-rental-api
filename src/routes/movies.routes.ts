import { Router } from "express";
import { payloadValidation } from "../middlewares/ensurePayloadValidation.middleware";
import { nameAlredyExists } from "../middlewares/ensureNameAlredyExists.middleware";
import {
  listMoviesController,
  registerMovieController,
  removeMovieController,
  updateMovieController,
} from "../controllers/movies.controllers";
import { movieNotFound } from "../middlewares/ensureMovieNotFound.middleware";
import { updateMoviePayloadValidation } from "../middlewares/ensureUpdateMoviePayloadValidation.middleware";

const moviesRouter = Router();

moviesRouter.post(
  "",
  payloadValidation,
  nameAlredyExists,
  registerMovieController
);
moviesRouter.get("", listMoviesController);
moviesRouter.patch(
  "/:id",
  movieNotFound,
  updateMoviePayloadValidation,
  nameAlredyExists,
  updateMovieController
);
moviesRouter.delete("/:id", movieNotFound, removeMovieController);

export default moviesRouter;
