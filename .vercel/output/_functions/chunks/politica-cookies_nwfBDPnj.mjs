import { n as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_CD0sI7kC.mjs';
import 'clsx';

const frontmatter = {
  "title": "Política de Cookies",
  "description": "Entenda como usamos cookies para melhorar sua experiência na Central da Série D.",
  "blocks": [{
    "name": "COOKIES",
    "title": "Política de Cookies"
  }],
  "minutesRead": "2 min read",
  "lastModified": "2026-01-03T14:50:44-03:00"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "política-de-cookies",
    "text": "Política de Cookies"
  }, {
    "depth": 2,
    "slug": "o-que-são-cookies",
    "text": "O que são cookies?"
  }, {
    "depth": 2,
    "slug": "como-usamos-os-cookies",
    "text": "Como usamos os cookies?"
  }, {
    "depth": 2,
    "slug": "cookies-de-terceiros",
    "text": "Cookies de Terceiros"
  }];
}
function _createMdxContent(props) {
  const _components = {
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
      id: "política-de-cookies",
      children: "Política de Cookies"
    }), "\n", createVNode(_components.p, {
      children: "Esta é a Política de Cookies da Central da Série D, acessível em centraldaseried.com.br."
    }), "\n", createVNode(_components.h2, {
      id: "o-que-são-cookies",
      children: "O que são cookies?"
    }), "\n", createVNode(_components.p, {
      children: "Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência."
    }), "\n", createVNode(_components.h2, {
      id: "como-usamos-os-cookies",
      children: "Como usamos os cookies?"
    }), "\n", createVNode(_components.p, {
      children: "Utilizamos cookies por vários motivos, detalhados abaixo:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cookies relacionados a formulários:"
        }), " Quando você envia dados por meio de um formulário como os encontrados nas páginas de contato, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cookies de preferências do site:"
        }), " Para proporcionar uma ótima experiência, fornecemos a funcionalidade para definir suas preferências de como este site é executado quando você o usa."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "cookies-de-terceiros",
      children: "Cookies de Terceiros"
    }), "\n", createVNode(_components.p, {
      children: "Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Este site usa o ", createVNode(_components.strong, {
          children: "Google Analytics"
        }), ", que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência."]
      }), "\n", createVNode(_components.li, {
        children: ["O serviço ", createVNode(_components.strong, {
          children: "Google AdSense"
        }), " que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Esperamos que esteja esclarecido. Se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados."
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

const url = "src/content/views/politica-cookies.mdx";
const file = "D:/projetos/astro-news/src/content/views/politica-cookies.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/projetos/astro-news/src/content/views/politica-cookies.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
