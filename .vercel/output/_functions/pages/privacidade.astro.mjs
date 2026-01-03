import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CD0sI7kC.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/base_CGXyoa4G.mjs';
import { g as getEntry, r as renderEntry } from '../chunks/_astro_content_DciGkB0J.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.centraldaseried.com.br");
const $$Privacidade = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacidade;
  const entry = await getEntry("views", "privacidade");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "entry": entry }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-6 py-12 prose max-w-3xl"> ${renderComponent($$result2, "Content", Content, {})} </div> ` })}`;
}, "D:/projetos/astro-news/src/pages/privacidade.astro", void 0);

const $$file = "D:/projetos/astro-news/src/pages/privacidade.astro";
const $$url = "/privacidade";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacidade,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
