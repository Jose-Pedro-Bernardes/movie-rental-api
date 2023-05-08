import { Request, Response, NextFunction } from "express";
import { formatErrors, movieSchema } from "../schemas/movies.schemas";

const payloadValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    movieSchema.parse(req.body);
  } catch (error: any) {
    return res.status(400).json(formatErrors(error.errors));
  }

  return next();
};

export { payloadValidation };
