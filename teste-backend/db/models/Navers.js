const { Model } = require("../config");

class Naver extends Model {
  static get tableName() {
    return "navers";
  }

  static get relationMappings() {
    const Projects = require('./Projects');

    return {
      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: Projects,
        join: {
          from: "navers.id",
          through: {
            from: "projects_navers.naverId",
            to: "projects_navers.projectId"
          },
          to: "projects.id"
        }
      }
    };
  };
}

module.exports = Naver;
