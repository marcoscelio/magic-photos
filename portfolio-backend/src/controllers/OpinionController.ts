import { Request, Response } from "express";
import db from "../utils/connection";

export default class OpinionController {
  async create(request: Request, response: Response) {
    const { name, quote, channel } = request.body;

    const trx = await db.transaction();

    try {
      await trx("opinion").insert({
        name,
        quote,
        channel,
      });

      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while creating a opinion",
      });
    }
  }

  async indexAll(request: Request, response: Response) {
    const opinions = await db("opinion").select("*");

    return response.json(opinions);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const trx = await db.transaction();

    try {
      await trx("opinion").del().where("opinion.id", "=", id);

      await trx.commit();
      return response.status(200).json({ res: `Opinion deleted ${id}` });
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: `Unexpected error deleting contact ${id}`,
      });
    }
  }
}

//name, email, phone, subject, message
