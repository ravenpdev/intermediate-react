import { createElement as h } from "react";

export default function App() {
  return h(
    "div",
    {},
    h("h1", {}, "Welcome to Frontend Masters"),
    h("p", {}, "SSG"),
  );
}
