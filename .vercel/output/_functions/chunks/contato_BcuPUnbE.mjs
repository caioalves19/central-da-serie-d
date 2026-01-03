import { n as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_CD0sI7kC.mjs';
import 'clsx';

const frontmatter = {
  "title": "Contato",
  "description": "Entre em contato com a equipe da Central da Série D para sugestões, parcerias ou denúncias.",
  "blocks": [{
    "name": "CONTATO",
    "title": "Fale Conosco"
  }],
  "minutesRead": "1 min read",
  "lastModified": "2026-01-03T14:50:44-03:00"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "contato",
    "text": "Contato 📬"
  }, {
    "depth": 2,
    "slug": "-e-mail",
    "text": "📧 E-mail"
  }, {
    "depth": 2,
    "slug": "-redes-sociais",
    "text": "📱 Redes Sociais"
  }, {
    "depth": 2,
    "slug": "-horário-de-atendimento",
    "text": "🕒 Horário de Atendimento"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "contato",
      children: "Contato 📬"
    }), "\n", createVNode(_components.p, {
      children: "Tem alguma informação sobre o seu time? Quer anunciar na Central da Série D ou sugerir uma pauta? Utilize um dos nossos canais abaixo para falar com a nossa equipe técnica ou editorial."
    }), "\n", createVNode(_components.h2, {
      id: "-e-mail",
      children: "📧 E-mail"
    }), "\n", createVNode(_components.p, {
      children: ["Para assuntos gerais, parcerias comerciais ou sugestões de conteúdo, escreva para:\r\n", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "mailto:centraldaseried@gmail.com",
          children: "centraldaseried@gmail.com"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "-redes-sociais",
      children: "📱 Redes Sociais"
    }), "\n", createVNode(_components.p, {
      children: "Você também pode nos enviar uma mensagem direta (DM) através das nossas redes oficiais:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode("a", {
          href: "https://www.instagram.com/centralseried/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: createVNode(_components.strong, {
            children: "Instagram"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode("a", {
          href: "https://www.tiktok.com/@centralseried",
          target: "_blank",
          rel: "noopener noreferrer",
          children: createVNode(_components.strong, {
            children: "TikTok"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-horário-de-atendimento",
      children: "🕒 Horário de Atendimento"
    }), "\n", createVNode(_components.p, {
      children: "Nossa equipe de plantão da Série D costuma responder em até 24 horas, especialmente durante os dias de jogos no final de semana."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Central da Série D – A voz do futebol raiz."
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

const url = "src/content/views/contato.mdx";
const file = "D:/projetos/astro-news/src/content/views/contato.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/projetos/astro-news/src/content/views/contato.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
