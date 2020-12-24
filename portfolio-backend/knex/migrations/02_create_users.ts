/* eslint-disable space-before-function-paren */
/* eslint-disable space-before-function-paren */
import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table: Knex.TableBuilder) => {
    table.increments();
    table.string("username").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}

// export async function up(knex: Knex) {
//   return knex.schema.createTable("user", (table) => {
//     table.increments("id").primary(); //name, email, phone, subject, message
//     table.string("username").notNullable();
//     table.string("password").notNullable();
//   });
// }

// export async function down(knex: Knex) {
//   return knex.schema.dropTable("user");
// }
