# Introdução ao React com React-Bootstrap

## Descrição

Este projeto é uma introdução ao React utilizando a biblioteca React-Bootstrap para estilização e layout. O foco é criar uma página simples para "Sr. Batata" com informações diversas apresentadas em uma interface amigável e responsiva.

## Funcionalidades

- Exibição de um banner com o nome "Sr. Batata" e uma imagem.
- Seções com subtítulos e textos, como "Sobre mim", "Sobre este website", "Anotações", "Blog" e "Notícias".

## Estrutura

O projeto é composto por:

- **App Component**: É o componente principal da aplicação. Ele importa estilos gerais, React-Bootstrap e um componente personalizado `ContainerText` para exibir as informações.
  
- **ContainerText Component**: Componente responsável por exibir um título e texto. Ele aceita `subtitle` e `text` como props.

## Estilos

Os estilos são aplicados globalmente a partir do arquivo `App.css`, e há estilos específicos para o componente `ContainerText` no arquivo `container_text.css`.

## Iniciando com Vite

Este projeto foi criado utilizando [Vite](https://vitejs.dev/). O Vite fornece um ambiente de desenvolvimento mais rápido e uma build otimizada para produção.

## Como rodar o projeto

1. Garanta que você tem o Node.js e o npm instalados.
2. Clone este repositório.
3. Navegue até a pasta do projeto via terminal e execute o comando `npm install` para instalar todas as dependências.
4. Depois de instalar as dependências, execute `npm run dev` para iniciar o servidor de desenvolvimento com Vite.
5. Acesse `http://localhost:3000` em seu navegador.

## Dependências

- React
- React-DOM
- React-Bootstrap
- Bootstrap

## Considerações finais

Este projeto é ideal para quem está começando no mundo React e deseja ver a integração com a biblioteca React-Bootstrap. Além disso, a estruturação com Vite oferece um desenvolvimento mais fluido e uma performance otimizada.
