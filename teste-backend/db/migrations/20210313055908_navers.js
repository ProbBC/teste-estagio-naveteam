
exports.up = function(knex) {
  return knex.schema.createTable("navers", t => {
    t.increments("id").primary().unsigned();
    t.string("name").notNullable();
    t.date("birthdate");
    t.date("admission_date");
    t.string("job_role").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("navers");
};
