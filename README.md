Nesse desafio o objetivo era criar um layout totalmente responsivo, dar funcionalidade para os filtros de produtos e listar os produtos em páginas enumeradas.

Obs1: O site não é estátco e os dados das áreas de menu foram geradas consumindo a API. Do mesmo modo as cores e gêneros na área de filtros.

Obs2: Eu estava decidido em criar o projeto usando Styled Components, mas devido ao tempo acabei deixando o CSS puro. Mesmo assim trabalhei com uma organização sistemática.

Eu trabalhei com o React, CSS3, HTML5 e JavaScript ES6, também criei tudo em inglês para manter as boas práticas.

https://webjump.vercel.app/

![Layout](public/assets/preview.jpg)

# Ferramentas de Desenvolvimento

- VS Studio Code
- Assets extraídos através do Figma.
- Ferramenta de build: Webpack
- Gerenciador de pacotes: NPM/Yarn
- Lib/Framework JS: React.js v17.0.2
- Linguagem de marcação: JSX/HTML5
- Servidor: Node.js v16.4.0

# Tecnologias e conceitos

**API**

- Mock importado como JSON

**REACT**

- React Router Dom
- React Navigation
- SVG: Fiz uso de imagens vetoriais e fiz manipulação dentro do react.

**CSS**

- Animações utilizando keyframes
- CSS Grid para estruturas externas
- CSS Flexbox para estruturas internas
- Não foi utilizado nenhum Framework CSS
- Mixins para breakpoints de media queries
- Variáveis para cores
- Uso de object-fit para evitar quebras de layout em imagens com tamanhos diferentes retornadas da API

**HTML**

- SEO através de metatags e semântica
- Acessibilidade através de semântica e atributos que auxiliam tags

**JAVASCRIPT**

- Filters e Map em arrays para geração da lista de produtos com base na API

# Instruções para rodar o projeto

- `npm install` para instalar as dependências necessárias
- `npm start` para rodar o projeto em servidor local
