# SETIF IFPR

Portal institucional da SETIF IFPR, desenvolvido para centralizar informações da edição do evento, incluindo programação, mostra de projetos, orientações de submissão e dados gerais para participantes.

## Visão Geral

Este projeto foi estruturado como um site estático em HTML, CSS e JavaScript, com foco em:

- apresentação clara da identidade do evento;
- navegação simples entre as áreas principais;
- manutenção anual facilitada por um arquivo central de dados;
- experiência responsiva para desktop e dispositivos móveis.

## Funcionalidades

- Página inicial com resumo da edição, destaques e contagem regressiva.
- Seção de programação com palestras e minicursos organizados por tipo.
- Página de projetos com cards interativos e modal de detalhes.
- Página de submissão com orientações iniciais para envio de trabalhos.
- Modal institucional com informações gerais sobre a SETIF.
- Estrutura preparada para atualização anual sem refatoração da interface.

## Tecnologias

- HTML5
- CSS3
- JavaScript Vanilla

## Estrutura do Projeto

```text
src/
  Index.html
  Styles/
    Styles.css
  js/
    index.js
    programacao.js
    projetos.js
    site-data.js
  img/
  pages/
    Programacao.html
    Projetos.html
    submeter.html
    style/
      cronograma.css
      styles.css
```

## Execução Local

1. Clone o repositório:

```bash
git clone https://github.com/felipesoaresdeoliveira/Setif-IFPR-2024
```

2. Acesse a pasta do projeto.
3. Abra [src/Index.html](c:/Users/felip/Documents/Site%20Setif%20IFPR%202024/src/Index.html) no navegador.

Se preferir, rode o projeto com uma extensão de servidor local no VS Code, como Live Server.

## Manutenção Anual

Os dados principais do evento estão centralizados em [src/js/site-data.js](c:/Users/felip/Documents/Site%20Setif%20IFPR%202024/src/js/site-data.js).

Ao preparar uma nova edição, atualize:

- nome e dados gerais do evento;
- data base da próxima edição;
- lista de palestras e minicursos;
- informações da mostra de projetos;
- textos institucionais exibidos nos modais e páginas internas.

Essa abordagem evita alterações estruturais em HTML e mantém a atualização concentrada em um único arquivo.

## Objetivo do Projeto

O site foi pensado para servir como portal informativo da SETIF IFPR e, ao mesmo tempo, demonstrar organização visual, clareza de conteúdo e manutenção simples para eventos recorrentes.

## Contato

Felipe Soares de Oliveira  
[felipesoaresdeoliveira13@gmail.com](mailto:felipesoaresdeoliveira13@gmail.com)
