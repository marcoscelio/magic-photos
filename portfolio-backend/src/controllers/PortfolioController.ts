import { Request, Response } from "express";
import db from "../utils/connection";

export default class PortfolioController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const category = filters.category as string;

    if (!filters.category) {
      return response.status(400).json({
        error: "Missing category filter to search images",
      });
    }

    const portfolio = await db("portfolio").where(
      "portfolio.category",
      "=",
      category
    );

    return response.json(portfolio);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const trx = await db.transaction();

    try {
      await trx("portfolio").del().where("portfolio.id", "=", id);

      await trx.commit();
      return response.status(200).json({ res: `Image deleted ${id}` });
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: `Unexpected error deleting a image ${id}`,
      });
    }
  }

  async indexAll(request: Request, response: Response) {
    const portfolio = await db("portfolio").select("*");

    return response.json(portfolio);
  }

  async create(request: Request, response: Response) {
    const { url, description, category } = request.body;

    const trx = await db.transaction();

    try {
      await trx("portfolio").insert({
        source: url,
        description,
        category,
      });

      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while creating a new image" + err,
      });
    }
  }
}
