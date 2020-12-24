import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("opinion", (table: Knex.TableBuilder) => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("quote").notNullable();
      table.string("channel").notNullable();
    })
    .then(() => {
      return knex("opinion").insert([
        {
          name: "Cecília Meireles",
          quote:
            "Tão pouco somos e tanto causamos com tão longos ecos, nossas viagens tem cargas ocultas de desconhecidos vínculos",
          channel: "Facebook",
        },
        {
          name: "Fernando Pessoa",
          quote: "Nada é, tudo se outra",
          channel: "Facebook",
        },
        {
          name: "Fulano da Silva",
          quote:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          channel: "Facebook",
        },
      ]);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("opinion");
}
