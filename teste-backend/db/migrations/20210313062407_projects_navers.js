
exports.up = function(knex) {
  return knex.schema.createTable("projects_navers", t => {
    t.increments("id").primary().unsigned();
    t.integer("project_id").unsigned().notNullable();
    t.integer("naver_id").unsigned().notNullable();

    t.foreign("project_id").references("id").inTable("projects");
    t.foreign("naver_id").references("id").inTable("navers");
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable("projects");
};
