import { n as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_CD0sI7kC.mjs';
import 'clsx';

const frontmatter = {
  "title": "Termos de Uso",
  "description": "Leia os termos e condições de uso do portal Central da Série D.",
  "blocks": [{
    "name": "TERMOS",
    "title": "Termos de Uso"
  }],
  "minutesRead": "2 min read",
  "lastModified": "2026-01-03T14:50:44-03:00"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "termos-de-uso",
    "text": "Termos de Uso"
  }, {
    "depth": 2,
    "slug": "1-licença-de-uso",
    "text": "1. Licença de Uso"
  }, {
    "depth": 2,
    "slug": "2-isenção-de-responsabilidade",
    "text": "2. Isenção de Responsabilidade"
  }, {
    "depth": 2,
    "slug": "3-precisão-dos-materiais",
    "text": "3. Precisão dos Materiais"
  }, {
    "depth": 2,
    "slug": "4-links",
    "text": "4. Links"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "termos-de-uso",
      children: "Termos de Uso"
    }), "\n", createVNode(_components.p, {
      children: ["Ao acessar o site ", createVNode(_components.a, {
        href: "https://www.centraldaseried.com.br",
        children: "Central da Série D"
      }), ", você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis."]
    }), "\n", createVNode(_components.h2, {
      id: "1-licença-de-uso",
      children: "1. Licença de Uso"
    }), "\n", createVNode(_components.p, {
      children: "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Central da Série D, apenas para visualização pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título."
    }), "\n", createVNode(_components.h2, {
      id: "2-isenção-de-responsabilidade",
      children: "2. Isenção de Responsabilidade"
    }), "\n", createVNode(_components.p, {
      children: "Os materiais no site da Central da Série D são fornecidos ‘como estão’. Não oferecemos garantias, expressas ou implícitas, e por este meio, isentamos e negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização ou adequação a um fim específico."
    }), "\n", createVNode(_components.h2, {
      id: "3-precisão-dos-materiais",
      children: "3. Precisão dos Materiais"
    }), "\n", createVNode(_components.p, {
      children: "Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Central da Série D não garante que qualquer material em seu site seja preciso, completo ou atual. Podemos fazer alterações nos materiais a qualquer momento, sem aviso prévio."
    }), "\n", createVNode(_components.h2, {
      id: "4-links",
      children: "4. Links"
    }), "\n", createVNode(_components.p, {
      children: "A Central da Série D não analisou todos os locais vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por nossa parte. O uso de qualquer site vinculado é por conta e risco do usuário."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Estes termos são regidos e interpretados de acordo com as leis do Brasil."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/views/termos-de-uso.mdx";
const file = "D:/projetos/astro-news/src/content/views/termos-de-uso.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/projetos/astro-news/src/content/views/termos-de-uso.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
