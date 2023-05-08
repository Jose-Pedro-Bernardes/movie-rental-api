import { Request, Response } from "express";
import {
  TMovie,
  TMovieUpdate,
  TMoviesArray,
} from "../interfaces/movies.interfaces";
import { registerMovieService } from "../services/movies/registerMovie.service";
import { listMoviesService } from "../services/movies/listMovies.service";
import { removeMovieService } from "../services/movies/removeMovie.service";
import { updateMovieService } from "../services/movies/updateMovie.service";

const registerMovieController = async (req: Request, res: Response) => {
  const payload: TMovie = req.body;
  const newMovie = await registerMovieService(payload);

  res.status(201).json(newMovie);
};

const listMoviesController = async (req: Request, res: Response) => {
  const moviesList = await listMoviesService(req.query);
  return res.status(200).json(moviesList);
};

const removeMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id = parseInt(request.params.id);
  await removeMovieService(id);

  return response.status(204).json();
};

const updateMovieController = async (req: Request, res: Response) => {
  const userUpdated = await updateMovieService(
    parseInt(req.params.id),
    req.body
  );
  return res.status(200).json(userUpdated);
};

export {
  registerMovieController,
  listMoviesController,
  removeMovieController,
  updateMovieController,
};
