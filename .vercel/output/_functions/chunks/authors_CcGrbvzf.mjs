import { n as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_CD0sI7kC.mjs';
import 'clsx';

const frontmatter = {
  "title": "Authors",
  "description": "Learn about the authors behind the Astro News.",
  "blocks": [{
    "name": "HEADER",
    "title": "List of Authors",
    "description": "List of authors of the Astro News."
  }, {
    "name": "ATTENTION",
    "description": "These names and images are not real. The images are from Unsplash, used in this project to show how to add authors to articles."
  }],
  "minutesRead": "0 min read",
  "lastModified": "2024-12-09T19:59:52+01:00"
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

const url = "src/content/views/authors.mdx";
const file = "D:/projetos/astro-news/src/content/views/authors.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/projetos/astro-news/src/content/views/authors.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
