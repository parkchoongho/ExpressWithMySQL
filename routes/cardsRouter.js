import express from "express";
import { findAll, create } from "../controller/cardsController";

const cardsRouter = express.Router();

cardsRouter.get("/", findAll);
cardsRouter.post("/", create);

export default cardsRouter;
