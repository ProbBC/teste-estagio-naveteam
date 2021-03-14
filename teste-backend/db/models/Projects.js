const { Model } = require("../config");

class Project extends Model {
  static get tableName() {
    return "projects";
  }

  static get relationMappings() {
    const Navers = require('./Navers');

    return {
      navers: {
        relation: Model.ManyToManyRelation,
        modelClass: Navers,
        join: {
          from: "projects.id",
          through: {
            from: "projects_navers.projectId",
            to: "projects_navers.naverId"
          },
          to: "navers.id"
        }
      }
    };
  };
}

module.exports = Project;
