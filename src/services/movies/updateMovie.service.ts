import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TMovieRepo, TMovieUpdate } from "../../interfaces/movies.interfaces";

const updateMovieService = async (id: number, payload: any) => {
  const movieRepository: TMovieRepo = AppDataSource.getRepository(Movie);
  const update = await movieRepository.update(id, { ...payload });
  const updateUser: TMovieUpdate = await movieRepository.findOneBy({ id });
  return updateUser;
};

export { updateMovieService };
