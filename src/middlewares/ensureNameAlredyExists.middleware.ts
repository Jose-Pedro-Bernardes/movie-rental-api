import { Request, Response, NextFunction } from "express";
import { TMovieRepo } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities/index";

const nameAlredyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movieName = req.body.name;
  if (movieName) {
    const findName = await movieRepo.exist({
      where: { name: movieName },
    });

    if (findName) {
      return res.status(409).json({ message: "Movie already exists." });
    }
  }
  return next();
};

export { nameAlredyExists };
