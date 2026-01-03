import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dju9YCHm.mjs';
import { manifest } from './manifest_zTKvixlO.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/articles/p/_page_.astro.mjs');
const _page4 = () => import('./pages/articles/_id_.astro.mjs');
const _page5 = () => import('./pages/articles.astro.mjs');
const _page6 = () => import('./pages/authors/_id_/_page_.astro.mjs');
const _page7 = () => import('./pages/authors/_id_.astro.mjs');
const _page8 = () => import('./pages/authors.astro.mjs');
const _page9 = () => import('./pages/categories/_category_/_page_.astro.mjs');
const _page10 = () => import('./pages/categories/_category_.astro.mjs');
const _page11 = () => import('./pages/categories.astro.mjs');
const _page12 = () => import('./pages/contato.astro.mjs');
const _page13 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page14 = () => import('./pages/politica-cookies.astro.mjs');
const _page15 = () => import('./pages/privacidade.astro.mjs');
const _page16 = () => import('./pages/rss.xml.astro.mjs');
const _page17 = () => import('./pages/search.astro.mjs');
const _page18 = () => import('./pages/sobre.astro.mjs');
const _page19 = () => import('./pages/termos-de-uso.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page2],
    ["src/pages/articles/p/[page].astro", _page3],
    ["src/pages/articles/[id].astro", _page4],
    ["src/pages/articles/index.astro", _page5],
    ["src/pages/authors/[id]/[page].astro", _page6],
    ["src/pages/authors/[id]/index.astro", _page7],
    ["src/pages/authors/index.astro", _page8],
    ["src/pages/categories/[category]/[page].astro", _page9],
    ["src/pages/categories/[category]/index.astro", _page10],
    ["src/pages/categories/index.astro", _page11],
    ["src/pages/contato.astro", _page12],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page13],
    ["src/pages/politica-cookies.astro", _page14],
    ["src/pages/privacidade.astro", _page15],
    ["src/pages/rss.xml.js", _page16],
    ["src/pages/search/index.astro", _page17],
    ["src/pages/sobre.astro", _page18],
    ["src/pages/termos-de-uso.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "aaf43274-aac8-4205-83a2-3f4346d6e4b1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
