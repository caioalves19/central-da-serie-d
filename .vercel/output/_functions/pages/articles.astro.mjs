import { c as createComponent, a as renderTemplate } from '../chunks/astro/server_CD0sI7kC.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta http-equiv="refresh" content="0;url=/articles/p/1">`;
}, "D:/projetos/astro-news/src/pages/articles/index.astro", void 0);

const $$file = "D:/projetos/astro-news/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
