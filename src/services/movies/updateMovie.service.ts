import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TMovieRepo } from "../../interfaces/movies.interfaces";

const updateMovieService = async (id: number, payload: any) => {
  const movieRepository: TMovieRepo = AppDataSource.getRepository(Movie);
  const update = await movieRepository.update(id, { ...payload });
  const updateUser = await movieRepository.findOneBy({ id });
  return updateUser;
};

export { updateMovieService };
