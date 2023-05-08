import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities/index";
import { TMovieRepo } from "../interfaces/movies.interfaces";

const movieNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);
  const id = Number(req.params.id);
  const movie = await movieRepo.findOneBy({ id });

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  next();
};

export { movieNotFound };
