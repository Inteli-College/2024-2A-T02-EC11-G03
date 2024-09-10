---
title: Desenvolvimento da Interface
sidebar_position: 1
--- 

# Documentação do Frontend
## Descrição
Este projeto é um frontend desenvolvido com Next.js e Tailwind CSS, que inclui funcionalidades como uma tela de login, dashboard com gráficos e upload de imagens além de uma linha do tempo para acompanhamento do crescimento da floresta. A aplicação foi projetada para monitoramento ambiental e análise de dados florestais.

## Tecnologias Utilizadas
### Next.js: 
Framework de React utilizado para criação de aplicações web com renderização do lado do servidor (SSR) e navegação eficiente entre páginas.

### Tailwind CSS: 
Framework CSS utilitário que facilita o desenvolvimento de interfaces personalizadas e responsivas.

### Chart.js: 
Biblioteca para a criação de gráficos interativos e visualização de dados.

## Principais Telas
1. Tela de Login
A tela de login foi desenvolvida com Next.js e estilizada com Tailwind CSS. Contém um formulário simples com campos para "Username" e "Password". O usuário pode entrar na aplicação ou se registrar.

2. Tela de Dashboard
A tela de dashboard exibe gráficos que ajudam no monitoramento ambiental.

Na parte inferior da tela, temos uma tabela que lista as atividades registradas com colunas para ID do Registro, Data, Nº de Árvores e Imagem. Na coluna de imagens, um botão com ícone permite abrir a imagem correspondente em uma nova aba.

3. Tela de Upload de Imagem
Esta tela permite que os usuários façam upload de imagens para análise. Na esquerda, temos uma área para arrastar e soltar as imagens, e na direita, o formulário para informações adicionais sobre o upload. As informações adicionais incluem condições climáticas, espécies de árvores e tipo de terreno.

4. Linha do Tempo
Selecionando a floresta desejada e o ano que deseja visualizar aparece na tela uma foto das respectivas escolhas.

## Como Rodar a Aplicação

1. Clonar o repositório

2. Acesse a pasta do projeto e instale as dependências com "npm install"

3. Para rodar a aplicação localmente, execute o comando "npm run dev"

A aplicação estará disponível em http://localhost:3000.

Agora, você pode acessar a aplicação rodando no servidor local.