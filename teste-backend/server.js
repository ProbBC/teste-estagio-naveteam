const Koa = require('koa');
const bodyParser = require("koa-bodyparser");

const naversRoutes = require("./routes/navers");
const projectsRoutes = require("./routes/projects");

const app = new Koa();

app.use(bodyParser());
app.use(naversRoutes.middleware());
app.use(projectsRoutes.middleware());

app.listen(3000);
