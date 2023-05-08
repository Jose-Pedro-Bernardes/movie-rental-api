import { NextFunction, Request, Response } from "express";
import { formatErrors, movieUpdateSchema } from "../schemas/movies.schemas";

const updateMoviePayloadValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await movieUpdateSchema.parse(req.body);
  } catch (error: any) {
    return res.status(400).json(formatErrors(error.errors));
  }

  return next();
};

export { updateMoviePayloadValidation };
