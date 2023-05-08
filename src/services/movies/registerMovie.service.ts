import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TMovie, TMovieRepo } from "../../interfaces/movies.interfaces";

const registerMovieService = async (payload: any) => {
  const movieRepository: TMovieRepo = AppDataSource.getRepository(Movie);

  const newMovie = await movieRepository.create(payload);
  const newMovieRes = await movieRepository.save(newMovie);
  return newMovieRes;
};

export { registerMovieService };
