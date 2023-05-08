import { AppDataSource } from "../../data-source";
import { TMovieRepo } from "../../interfaces/movies.interfaces";
import { Movie } from "../../entities";

const removeMovieService = async (id: number) => {
  const movieRepository: TMovieRepo = AppDataSource.getRepository(Movie);
  await movieRepository.delete({ id });
};

export { removeMovieService };
