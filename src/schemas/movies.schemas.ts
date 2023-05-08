import * as z from "zod";

const movieSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().nullable().optional(),
  duration: z
    .number()
    .min(1, { message: "Number must be greater than 0" })
    .nullish(),
  price: z.number().int(),
});

const movieResSchema = movieSchema.extend({
  id: z.number(),
});

const moviesArraySchema = movieResSchema.array();
const movieUpdateSchema = movieResSchema.partial();

const moviePaginationSchema = z.object({
  prevPage: z.string().nullable(),
  nextPage: z.string().nullable(),
  count: z.number().min(0),
  data: moviesArraySchema,
});

interface FieldErrors {
  [key: string]: string[];
}

function formatErrors(errors: any) {
  const fieldErrors: FieldErrors = {};
  for (const error of errors) {
    const field = error.path[0];
    const message = error.message;
    if (!fieldErrors[field]) {
      fieldErrors[field] = [];
    }
    fieldErrors[field].push(message);
  }
  return { message: fieldErrors };
}

export {
  movieSchema,
  moviesArraySchema,
  movieUpdateSchema,
  moviePaginationSchema,
  formatErrors,
  movieResSchema,
};
