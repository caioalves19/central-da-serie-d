import { articlesKs, authorsKs, categoriesKs } from "@/lib/keystatic";
import { config } from "@keystatic/core";

export default config({
  // 1. MUDANÇA ESSENCIAL: Altere de "local" para "github"
  storage: {
    kind: "github",
    repo: "caioalves19/central-da-serie-d", // Seu repositório exato
  },
  ui: {
    brand: {
      name: "Central da Série D", // Atualizado para o seu projeto
    },
    navigation: ["---", "articles", "---", "authors", "categories"],
  },
  collections: {
    articles: articlesKs,
    authors: authorsKs,
    categories: categoriesKs,
  },
});
