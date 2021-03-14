const { Model, knexSnakeCaseMappers } = require("objection");
const Knex = require("knex");

const environment = process.env.NODE_ENV || "development";

const config = require("../knexfile.js")[environment];

const knex = Knex({
  client: config.client,
  useNullAsDefault: true,
  connection: config.connection,
  ...knexSnakeCaseMappers()
});

Model.knex(knex);

module.exports = {
  knex,
  Model
};
