// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { modifiedTime, readingTime } from "./src/lib/utils/remarks.mjs";
import { SITE } from "./src/lib/config";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";
import vercel from "@astrojs/vercel";

const integrations = [mdx(), sitemap(), pagefind(), react(), keystatic()];

export default defineConfig({
  site: SITE.url,
  base: SITE.basePath,

  // Mantemos como "server" para o Keystatic funcionar na Vercel
  output: "server",

  markdown: {
    remarkPlugins: [readingTime, modifiedTime],
  },

  image: {
    responsiveStyles: true,
    breakpoints: [640, 1024],
  },

  integrations,

  vite: {
    // O comentário abaixo ignora o erro de conflito de tipos do Vite
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
