import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CD0sI7kC.mjs';
import 'piccolore';
import { g as getEntry } from '../chunks/_astro_content_DciGkB0J.mjs';
import { $ as $$Base } from '../chunks/base_CGXyoa4G.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("views", "error404");
  if (!entry) {
    throw new Error("404 page not found");
  }
  const [HERO] = entry.data.blocks;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "entry": entry }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex flex-col items-center justify-center py-20"> <h1 class="text-4xl">${HERO.title}</h1> <p class="mt-2">${HERO.description}</p> <a${addAttribute(HERO.link_url, "href")} class="btn mt-6" aria-label="Return to Homepage">${HERO.link_text}</a> </div> ` })}`;
}, "D:/projetos/astro-news/src/pages/404.astro", void 0);

const $$file = "D:/projetos/astro-news/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
