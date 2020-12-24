import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("contact", (table) => {
    table.increments("id").primary(); //name, email, phone, subject, message
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("subject").notNullable();
    table.string("message").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("contact");
}
