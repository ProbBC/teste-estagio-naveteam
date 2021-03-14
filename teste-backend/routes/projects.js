const JoiRouter = require("koa-joi-router");
const Joi = JoiRouter.Joi;
const router = new JoiRouter();
const Project = require("../db/models/Projects");
const Naver = require("../db/models/Navers");

router.prefix("/projects");

router.post("/store", {
    validate: {
      type: "json",
      body: {
        name: Joi.string().max(255).required(),
        navers: Joi.array().items(Joi.number().integer())
      }
    }
  }, async ctx => {
    const navers = ctx.request.body.navers;
    const project = {...ctx.request.body};
    delete project['navers'];

    const trx = await Project.startTransaction();
    let insertedProject;
    try {
      insertedProject = await Project.query(trx).insert(project);
      for (naverId of navers) {
        // Insere uma nova relação project-naver para cada naver no array
        const naver = await Naver.query(trx).findById(naverId);
        await Project.relatedQuery("navers", trx).for(insertedProject.id).relate(naver);
      }
      await trx.commit();
    } catch (err) {
      await trx.rollback();
      ctx.throw(404, {
        message: "Erro ao cadastrar o projeto. Verifique se os navers informados existem."
      });
    }

    ctx.response.body = insertedProject;
});

router.get("/show/:id", async ctx => {
  const project = await Project.query()
    .findById(ctx.params.id)
    .withGraphFetched("navers");

    ctx.response.body = project;
})

router.get("/index", async ctx => {
  const projects = await Project.query();
  ctx.response.body = projects;
});

module.exports = router;
