import { Request, Response } from "express";
import db from "../utils/connection";

export default class ContactController {
  async create(request: Request, response: Response) {
    const { name, email, phone, subject, message } = request.body;

    const trx = await db.transaction();

    try {
      await trx("contact").insert({
        name,
        email,
        phone,
        subject,
        message,
      });

      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while creating a contact",
      });
    }
  }

  async indexAll(request: Request, response: Response) {
    const contacts = await db("contact").select("*");

    return response.json(contacts);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const trx = await db.transaction();

    try {
      await trx("contact").del().where("contact.id", "=", id);

      await trx.commit();
      return response.status(200).json({ res: `Contact deleted ${id}` });
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: `Unexpected error deleting contact ${id}`,
      });
    }
  }
}

//name, email, phone, subject, message
