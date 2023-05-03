import { Router } from "express";

const moviesRouter = Router();

moviesRouter.post("/movies");
moviesRouter.get("/movies");
moviesRouter.patch("/movies/:id");
moviesRouter.delete("/movies/:id");

export default moviesRouter;
