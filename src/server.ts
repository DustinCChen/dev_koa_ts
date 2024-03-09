import Koa, { Context } from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import healthcheckRoutes from "./routes/healthcheck";
import { config } from "./config";

const app = new Koa();
const PORT = config.port;

app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger());

app.use(healthcheckRoutes.routes());

app.use(async (ctx: Context, next: () => Promise<void>) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx: Context, next: () => Promise<void>) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `{ms}ms`);
});
const server = app
  .listen(PORT, () => {
    console.log(`server  listen on port:${PORT}`);
  })
  .on("error", (err: any) => {
    console.error(err);
  });

export default server;
