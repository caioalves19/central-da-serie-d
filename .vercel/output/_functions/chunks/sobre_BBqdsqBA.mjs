import { n as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_CD0sI7kC.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bem-vindo à Central da Série D",
  "description": "O seu portal definitivo para acompanhar os 96 clubes e o coração do futebol brasileiro em 2026.",
  "blocks": [{
    "name": "WELCOME",
    "title": "Início"
  }],
  "minutesRead": "2 min read",
  "lastModified": "2026-01-03T14:50:44-03:00"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "bem-vindo-à-central-da-série-d",
    "text": "Bem-vindo à Central da Série D ⚽"
  }, {
    "depth": 2,
    "slug": "-nossa-missão",
    "text": "🎯 Nossa Missão"
  }, {
    "depth": 2,
    "slug": "-quem-somos",
    "text": "👥 Quem Somos?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "bem-vindo-à-central-da-série-d",
      children: "Bem-vindo à Central da Série D ⚽"
    }), "\n", createVNode(_components.p, {
      children: "O seu portal definitivo para acompanhar o coração do futebol brasileiro."
    }), "\n", createVNode(_components.p, {
      children: ["Em um cenário onde a grande mídia muitas vezes foca apenas nos clubes de elite, a ", createVNode(_components.strong, {
        children: "Central da Série D"
      }), " nasce com a missão de dar voz e visibilidade aos ", createVNode(_components.strong, {
        children: "96 clubes"
      }), " que compõem a quarta divisão nacional em 2026. Nossa cobertura é dedicada aos torcedores apaixonados pelo ", createVNode(_components.strong, {
        children: "“futebol de raiz”"
      }), ", aquele que movimenta o interior do país e as comunidades locais."]
    }), "\n", createVNode(_components.h2, {
      id: "-nossa-missão",
      children: "🎯 Nossa Missão"
    }), "\n", createVNode(_components.p, {
      children: "Oferecer informações rápidas, precisas e exclusivas sobre o dia a dia dos clubes, mercado da bola, resultados e os bastidores da Série D. Acreditamos que todo clube, independente da divisão, merece uma cobertura profissional e apaixonada."
    }), "\n", createVNode(_components.h2, {
      id: "-quem-somos",
      children: "👥 Quem Somos?"
    }), "\n", createVNode(_components.p, {
      children: ["A ", createVNode(_components.strong, {
        children: "Central da Série D"
      }), " é gerida por profissionais com background em jornalismo esportivo e tecnologia, unindo o rigor da apuração com a agilidade digital. Nossa equipe acompanha de perto as federações e os times para garantir que você não perca nenhum detalhe da jornada rumo ao acesso à Série C."]
    }), "\n", createVNode(_components.p, {
      children: "Se você respira o futebol do seu estado e não abre mão de acompanhar o seu time onde quer que ele esteja, este é o seu lugar."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Central da Série D: A casa do futebol que o Brasil ama."
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

const url = "src/content/views/sobre.mdx";
const file = "D:/projetos/astro-news/src/content/views/sobre.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/projetos/astro-news/src/content/views/sobre.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
