import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/index";
import { TMovieRepo } from "../../interfaces/movies.interfaces";
import { moviesArraySchema } from "../../schemas/movies.schemas";

const listMoviesService = async (payload: any) => {
  const { page, perPage, sort, order } = payload;
  const movieRepository: TMovieRepo = AppDataSource.getRepository(Movie);

  let pageResult: number = page && parseInt(page) > 0 ? parseInt(page) : 1;

  let perPageResult: number =
    perPage && parseInt(perPage) > 0 ? parseInt(perPage) : 5;

  if (perPageResult > 5) {
    perPageResult = 5;
  }

  let sortResult: string =
    sort === "price" || sort === "duration" ? sort : "id";

  let orderResult: string = order === "asc" || order === "desc" ? order : "ASC";

  if (sortResult === "id" || sort === null) {
    orderResult = "ASC";
  }

  const [movies, count] = await movieRepository.findAndCount({
    take: perPageResult,
    skip: perPageResult * (pageResult - 1),
    order: {
      [sortResult]: orderResult,
    },
  });

  const totalPages = Math.ceil(count / perPageResult);

  const result = {
    nextPage:
      pageResult < totalPages
        ? `http://localhost:3000/movies?page=${
            pageResult + 1
          }&perPage=${perPageResult}`
        : null,
    prevPage:
      pageResult > 1
        ? `http://localhost:3000/movies?page=${
            pageResult - 1
          }&perPage=${perPageResult}`
        : null,
    count,
    data: moviesArraySchema.parse(movies),
  };

  return result;
};

export { listMoviesService };
