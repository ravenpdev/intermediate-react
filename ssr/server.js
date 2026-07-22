import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { readFileSync } from "node:fs";
import path from "node:path";
import { renderToString, renderToPipeableStream } from "react-dom/server";
import { createElement as h } from "react";
import App from "./App.js";

const __dirname = import.meta.dirname;
const shell = readFileSync(path.join(__dirname, "dist", "index.html"), "utf8");
const parts = shell.split("<!--ROOT-->");

const app = fastify();

app.register(fastifyStatic, {
  root: path.join(__dirname, "dist"),
  prefix: "/",
});

app.get("/", (req, reply) => {
  // order matters here
  // reply.raw.write(parts[0]);
  // const reactApp = renderToString(h(App));
  // reply.raw.write(reactApp);
  // reply.raw.write(parts[1]);
  // reply.raw.end();

  reply.raw.setHeader("Content-Type", "text/html");
  const { pipe, abort } = renderToPipeableStream(h(App), {
    onShellReady() {
      // shell is ready - write the head/opening HTML, then start piping React's output
      reply.raw.write(parts[0]);
      pipe(reply.raw);
    },
    onShellError(_error) {
      reply.raw.writeHead(500, { "Content-Type": "text/html" });
      reply.raw.end("<h1>Something went wrong</h1>");
    },
    onAllReady() {
      // all done -- good spot to close out the trailing HTML
      reply.raw.write(parts[1]);
      reply.raw.end();
    },
    onError(error) {
      console.error(error);
    },
  });

  setTimeout(() => abort(), 10_000);
});

app.listen({
  port: 3000,
});
