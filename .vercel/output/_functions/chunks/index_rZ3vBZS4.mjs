import { n as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_CD0sI7kC.mjs';
import 'clsx';

const frontmatter = {
  "name": "Central da Série D",
  "job": "Owner",
  "avatar": "@assets/images/authors/central-da-serie-d/avatar.png",
  "bio": "Tudo sobre a disputa dos 96 times por 6 vagas de acesso",
  "social": [],
  "minutesRead": "0 min read",
  "lastModified": "2026-01-03T14:50:44-03:00"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/authors/central-da-serie-d/index.mdx";
const file = "D:/projetos/astro-news/src/content/authors/central-da-serie-d/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/projetos/astro-news/src/content/authors/central-da-serie-d/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
