const JoiRouter = require("koa-joi-router");
const Joi = JoiRouter.Joi;
const router = new JoiRouter();
const Naver = require("../db/models/Navers");
const Project = require("../db/models/Projects");

router.prefix("/navers");

router.post("/store", {
    validate: {
      type: "json",
      body: {
        name: Joi.string().max(255).required(),
        birthdate: Joi.date().raw().required(),
        admission_date: Joi.date().raw().required(),
        job_role: Joi.string().required(),
        projects: Joi.array().items(Joi.number().integer())
      }
    }
  }, async ctx => {
    const projects = ctx.request.body.projects;
    const naver = {...ctx.request.body};
    delete naver['projects'];

    const trx = await Naver.startTransaction();
    let insertedNaver;
    try {
      insertedNaver = await Naver.query(trx).insert(naver);
      for (projectId of projects) {
        // Insere uma nova relação naver-project para cada projeto no array
        const project = await Project.query(trx).findById(projectId);
        await Naver.relatedQuery('projects', trx).for(insertedNaver.id).relate(project);
      }
      await trx.commit();
    } catch (err) {
      await trx.rollback();
      ctx.throw(404, {
        message: "Erro ao cadastrar o naver. Verifique se os projetos informados existem."
      });
    }

    ctx.response.body = insertedNaver;
});

router.get("/show/:id", async ctx => {
  const naver = await Naver.query()
    .findById(ctx.params.id)
    .withGraphFetched("projects");

  ctx.response.body = naver;
})

router.get("/index", async ctx => {
  const navers = await Naver.query();

  ctx.response.body = navers;
});

module.exports = router;
