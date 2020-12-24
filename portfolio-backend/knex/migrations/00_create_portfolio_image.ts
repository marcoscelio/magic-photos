import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema
    .createTable("portfolio", (table) => {
      table.increments("id").primary();
      table.string("source").notNullable();
      table.string("description").notNullable();
      table.string("category").notNullable();
    })
    .then(() => {
      return knex("portfolio").insert([
        {
          source: "https://picsum.photos/id/237/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/238/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/239/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/240/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/241/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/242/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/243/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/244/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/280/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/290/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/247/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/248/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/249/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/250/1200/800",
          description: "exemplo",
          category: "externo",
        },
        {
          source: "https://picsum.photos/id/251/1200/800",
          description: "exemplo",
          category: "externo",
        },

        {
          source: "https://picsum.photos/id/237/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/238/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/239/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/240/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/241/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/242/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/243/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/244/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/280/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/290/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/247/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/248/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/249/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/250/1200/800",
          description: "exemplo",
          category: "pascoa",
        },
        {
          source: "https://picsum.photos/id/251/1200/800",
          description: "exemplo",
          category: "pascoa",
        },

        {
          source: "https://picsum.photos/id/237/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/238/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/239/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/240/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/241/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/242/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/243/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/244/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/280/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/290/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/247/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/248/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/249/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/250/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },
        {
          source: "https://picsum.photos/id/251/1200/800",
          description: "exemplo",
          category: "lifestyle",
        },

        {
          source: "https://picsum.photos/id/237/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/238/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/239/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/240/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/241/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/242/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/243/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/244/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/280/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/290/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/247/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/248/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/249/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/250/1200/800",
          description: "exemplo",
          category: "junina",
        },
        {
          source: "https://picsum.photos/id/251/1200/800",
          description: "exemplo",
          category: "junina",
        },

        {
          source: "https://picsum.photos/id/237/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/238/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/239/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/240/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/241/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/242/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/243/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/244/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/280/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/290/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/247/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/248/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/249/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/250/1200/800",
          description: "exemplo",
          category: "batizado",
        },
        {
          source: "https://picsum.photos/id/251/1200/800",
          description: "exemplo",
          category: "batizado",
        },

        {
          source: "https://picsum.photos/id/237/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/238/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/239/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/240/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/241/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/242/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/243/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/244/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/280/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/290/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/247/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/248/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/249/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/250/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },
        {
          source: "https://picsum.photos/id/251/1200/800",
          description: "exemplo",
          category: "gestante-estudio",
        },

        {
          source: "https://picsum.photos/id/237/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/238/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/239/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/240/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/241/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/242/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/243/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/244/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/280/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/290/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/247/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/248/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/249/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/250/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },
        {
          source: "https://picsum.photos/id/251/1200/800",
          description: "exemplo",
          category: "ano-novo",
        },

        {
          source: "https://picsum.photos/id/237/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/238/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/239/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/240/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/241/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/242/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/243/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/244/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/280/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/290/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/247/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/248/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/249/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/250/1200/800",
          description: "exemplo",
          category: "",
        },
        {
          source: "https://picsum.photos/id/251/1200/800",
          description: "exemplo",
          category: "",
        },
      ]);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("portfolio");
}
