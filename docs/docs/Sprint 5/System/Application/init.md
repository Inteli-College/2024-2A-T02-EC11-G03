---
title: Demo Final - Aplicação
sidebar_position: 1
---

# Aplicação Final - Demonstração

No final deste projeto, desenvolvemos um sistema completo que oferece funcionalidades avançadas para o monitoramento e análise de florestas. A seguir, apresentamos uma demonstração detalhada do fluxo do usuário no sistema real desenvolvido.

## Funcionalidades Principais

A aplicação web foi construída utilizando **Next.js** para o front-end e estilizada com **TailwindCSS**, proporcionando uma interface moderna, responsiva e amigável. As principais funcionalidades do sistema incluem:

### 1. Tela de Login e Cadastro

- **Cadastro de Usuários**: Permite que novos usuários criem uma conta fornecendo informações básicas.
- **Autenticação Segura**: Os usuários podem fazer login usando suas credenciais, garantindo acesso seguro às funcionalidades do sistema.
  
---

### 2. Dashboard de Visualização de Dados

Após o login, os usuários são direcionados ao dashboard principal, que oferece:

- **Visão Geral das Florestas**: Exibição de estatísticas chave como o número de árvores vivas e mortas.
- **Gráficos Interativos**: Visualizações gráficas que mostram tendências e mudanças ao longo do tempo.
- **Registro de Atividades**: Tabela detalhada com histórico de uploads, contagem de árvores, carbono sequestrado e links para transações na blockchain.
 
---

### 3. Página de Upload de Imagens

Nesta página, os usuários podem:

- **Enviar Imagens**: Upload de imagens das florestas para análise.
- **Formulário Detalhado**: Fornecer informações adicionais como espécie de árvore, tipo de terreno, condições climáticas e localização geográfica.
- **Processamento em Tempo Real**: O sistema processa a imagem, detecta e conta automaticamente o número de árvores presentes.
- **Visualização dos Resultados**: Exibição da imagem processada com as árvores identificadas e contagem total.
  

---

### 4. Página de Visualização Temporal das Florestas

Esta funcionalidade permite:

- **Análise Histórica**: Visualizar a evolução de uma floresta específica ao longo de diferentes anos.
- **Comparação de Dados**: Comparar imagens e estatísticas de períodos distintos para identificar tendências.
- **Informações Detalhadas**: Acesso a dados específicos de cada ano, incluindo número de árvores e carbono sequestrado.

---

### 5. Calculadora de Créditos de Carbono

- **Estimativa de Carbono Sequestrado**: Com base no número de árvores, o sistema calcula a quantidade de CO₂ sequestrado anualmente e até o ano de 2050.
- **Informações Financeiras**: Auxilia na estimativa de créditos de carbono gerados, que podem ser comercializados ou utilizados em relatórios de sustentabilidade.

---

## Demonstração do Fluxo do Usuário

Para uma compreensão completa de como o sistema funciona na prática, confira a demonstração a seguir, que ilustra cada funcionalidade detalhadamente:

<iframe width="560" height="315" src="https://www.youtube.com/embed/n88JwQdgSSg?si=K5hkQOzm2V8uD1Tb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Benefícios e Impacto

Com estas funcionalidades, a aplicação oferece:

- **Monitoramento Ambiental Eficiente**: Facilita o acompanhamento do estado das florestas em tempo real.
- **Análise de Dados Avançada**: Proporciona insights valiosos através de visualizações gráficas e estatísticas detalhadas.
- **Contribuição para Sustentabilidade**: Auxilia na quantificação de carbono sequestrado, incentivando práticas sustentáveis.
- **Segurança de Dados**: A integração com blockchain garante a integridade e transparência das informações registradas.

---

## Tecnologias Utilizadas

- **Front-end**: Next.js, React, TailwindCSS
- **Back-end**: FastAPI e Prisma.js (ORM) para conexão com banco em Postgres.
- **Integração**: APIs de terceiros para mapas, serviços de blockchain, etc.
- **Processamento de Imagens**: Algoritmos de visão computacional para detecção e contagem de árvores.

---

## Próximos Passos

- **Expansão de Funcionalidades**: Integração com sensores IoT para monitoramento em tempo real.
- **Machine Learning**: Implementação de modelos preditivos para estimar o crescimento florestal.
- **Escalabilidade**: Otimização da aplicação para suportar um número maior de usuários e florestas monitoradas.

---

Com este sistema, buscamos fornecer uma ferramenta poderosa para organizações e indivíduos comprometidos com a conservação ambiental, permitindo decisões mais informadas e ações efetivas em prol do meio ambiente.
