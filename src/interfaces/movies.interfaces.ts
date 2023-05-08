import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";
import {
  moviesArraySchema,
  moviePaginationSchema,
} from "../schemas/movies.schemas";

type TMovieUpdate = DeepPartial<Movie> | null;
type TMovieRepo = Repository<Movie>;
type TMoviesArray = z.infer<typeof moviesArraySchema>;
type TMoviePagination = z.infer<typeof moviePaginationSchema>;

export { TMovieUpdate, TMovieRepo, TMoviesArray, TMoviePagination };
