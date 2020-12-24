import express from "express";
import PortfolioController from "../controllers/PortfolioController";
import ContactController from "../controllers/ContactController";
import OpinionController from "../controllers/OpinionController";

const routes = express.Router();
const portfolioController = new PortfolioController();
const contactController = new ContactController();
const opinionController = new OpinionController();

routes.post("/registerimage", portfolioController.create);

routes.get("/portfolio", portfolioController.index);
routes.get("/portfolio-list", portfolioController.indexAll);

routes.delete("/portfolio/:id", portfolioController.delete);

routes.post("/contact", contactController.create);
routes.get("/contact", contactController.indexAll);
routes.delete("/contact/:id", contactController.delete);

routes.post("/opinion", opinionController.create);
routes.get("/opinion", opinionController.indexAll);
routes.delete("/opinion/:id", opinionController.delete);

export default routes;
