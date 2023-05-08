import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { Movie } from "../entities";
import {
  movieSchema,
  moviesArraySchema,
  movieUpdateSchema,
  sortSchema,
  moviePaginationSchema,
  movieResSchema,
} from "../schemas/movies.schemas";

type TMoviePayload = z.infer<typeof movieSchema>;
type TMovieUpdate = DeepPartial<Movie>;
type TMovieRepo = Repository<Movie>;

type TMovie = z.infer<typeof movieResSchema>;
type TMoviesArray = z.infer<typeof moviesArraySchema>;
type TMovieUpdateRequest = z.infer<typeof movieUpdateSchema>;
type TSort = z.infer<typeof sortSchema>;
type TMoviePagination = z.infer<typeof moviePaginationSchema>;

export {
  TMoviePayload,
  TMovieUpdate,
  TMovieRepo,
  TMovie,
  TMoviesArray,
  TMovieUpdateRequest,
  TMoviePagination,
  TSort,
};
