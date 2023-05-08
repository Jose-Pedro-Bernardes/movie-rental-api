import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities/index";
import {
  TMoviePagination,
  TMovieRepo,
} from "../../interfaces/movies.interfaces";
import { moviesArraySchema } from "../../schemas/movies.schemas";

const listMoviesService = async (payload: any) => {
  const { page, perPage, sort, order } = payload;
  const movieRepository: TMovieRepo = AppDataSource.getRepository(Movie);

  let pageNumber: number = page && parseInt(page) > 0 ? parseInt(page) : 1;

  let itemsPerPage: number =
    perPage && parseInt(perPage) > 0 ? parseInt(perPage) : 5;

  if (itemsPerPage > 5) {
    itemsPerPage = 5;
  }

  let sortField: string = sort === "price" || sort === "duration" ? sort : "id";

  let sortOrder: string = order === "asc" || order === "desc" ? order : "ASC";

  if (sortField === "id" || sort === null) {
    sortOrder = "ASC";
  }

  const [movies, count] = await movieRepository.findAndCount({
    take: itemsPerPage,
    skip: itemsPerPage * (pageNumber - 1),
    order: {
      [sortField]: sortOrder,
    },
  });

  const totalPages = Math.ceil(count / itemsPerPage);

  const moviePagination: TMoviePagination = {
    nextPage: null,
    prevPage: null,
    count,
    data: moviesArraySchema.parse(movies),
  };

  if (pageNumber < totalPages) {
    moviePagination.nextPage = `http://localhost:3000/movies?page=${
      pageNumber + 1
    }&perPage=${itemsPerPage}`;
  }

  if (pageNumber > 1) {
    moviePagination.prevPage = `http://localhost:3000/movies?page=${
      pageNumber - 1
    }&perPage=${itemsPerPage}`;
  }

  return moviePagination;
};

export { listMoviesService };
