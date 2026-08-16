import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const codeFrame = {
  name: "code-frame",
  root(node) {
    const raw = this.options.meta?.__raw ?? "";
    const title = /title="([^"]+)"/.exec(raw)?.[1];
    if (!title) return;

    const pre = node.children.find((child) => child.tagName === "pre");
    if (!pre) return;

    const label = (text) => ({
      type: "element",
      tagName: "span",
      properties: {},
      children: [{ type: "text", value: text }],
    });

    node.children = [
      {
        type: "element",
        tagName: "figure",
        properties: { class: "code-frame" },
        children: [
          {
            type: "element",
            tagName: "figcaption",
            properties: { class: "code-frame-head" },
            children: [label(title), label(this.options.lang ?? "")],
          },
          pre,
        ],
      },
    ];
  },
};

export default defineConfig({
  site: "https://giovalgas.dev.br",
  output: "static",
  trailingSlash: "ignore",
  integrations: [react(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
      wrap: false,
      transformers: [codeFrame],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
