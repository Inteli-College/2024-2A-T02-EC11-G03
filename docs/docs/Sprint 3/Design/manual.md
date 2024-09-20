---
title: Condições de Implementação
sidebar_position: 1
--- 

# Condições de Implementação

## Introdução

Atualmente, o monitoramento da quantidade de árvores plantadas pela empresa Abundance, fundamental para a emissão de tokens de carbono, é realizado de forma manual e periódica. Esse método, além de demorado, apresenta baixa confiabilidade nos resultados, o que gera incerteza e compromete a eficiência do processo. Para solucionar essas questões, foi desenvolvida uma solução baseada em inteligência artificial, que utiliza imagens aéreas dos plantios da Abundance para prever de maneira automatizada e precisa a quantidade de árvores existentes. Essa abordagem garante resultados mais rápidos e confiáveis, aumentando a confiança no processo de contagem.

A solução foi desenhada para atender às necessidades dos funcionários da Abundance, liberando-os da tarefa manual e repetitiva de contagem de árvores, permitindo que concentrem seus esforços em atividades mais estratégicas e produtivas para a empresa.

## Principais Funcionalidades

A seguir estão descritas as principais funcionalidades da solução e como elas operam:

**Upload de Imagem pelo Usuário:** O sistema permite que o usuário faça o upload de imagens aéreas dos plantios. Durante o upload, o usuário pode adicionar informações contextuais, como condições climáticas, espécies de árvores, localização geográfica e outros dados relevantes. Embora esses detalhes não sejam utilizados diretamente pelo modelo de análise de árvores, eles são armazenados no histórico para fins de documentação e referência futura, permitindo consultas detalhadas sobre o contexto de cada análise.

**Pós-Análise:** Após o processamento da imagem pelo modelo de inteligência artificial, o sistema exibe um modal com os resultados da análise. Nesse modal, o usuário visualiza a imagem original, a segmentação das árvores identificadas e o número total de árvores estimadas. Além disso, são apresentadas as informações contextuais fornecidas durante o upload. O modal fica acessível a qualquer momento, permitindo que o usuário revisite os resultados de análises anteriores por meio de um registro na página de dashboard. Isso garante uma navegação fluida e intuitiva, facilitando o acompanhamento de históricos.

**Registro de Imagem por Hardware:** O sistema também integra hardware específico para capturar automaticamente imagens de quadrantes da área monitorada. Essas imagens são registradas no sistema, juntamente com a contagem de árvores correspondente ao quadrante analisado, garantindo uma coleta de dados precisa, contínua e automatizada, sem a necessidade de intervenção humana.

**Integração Backend e Modelo:** A comunicação entre o backend e o modelo de machine learning é responsável por processar as imagens enviadas pelo sistema. O backend envia as imagens para o modelo de contagem de árvores, que retorna a estimativa do número de árvores presente em cada imagem. Esses dados são então incorporados ao sistema, permitindo a visualização dos resultados em tempo real ou consulta posterior no dashboard.

## Padrões de Design de Interação

Para proporcionar uma experiência de usuário intuitiva e familiar, o design de interação foi elaborado com foco nos seguintes aspectos:

**Consistência com a Identidade Visual da Empresa:** Todo o design da solução segue os padrões de identidade visual da Abundance, incluindo paleta de cores, tipografia e elementos visuais característicos da marca. Essa consistência garante que a experiência do usuário seja fluida e coesa, reforçando a familiaridade com a plataforma e facilitando a navegação.

## Jornada de Usuário
Com o objetivo de alinhar as metas e necessidades do usuário a cada etapa da solução, foi desenvolvida uma jornada do usuário detalhada. Esse processo mapeia as interações com as diferentes telas da plataforma, destacando os pontos-chave de cada funcionalidade e garantindo que o sistema atenda de forma eficaz às expectativas e objetivos dos funcionários da Abundance, facilitando o gerenciamento da plantação de árvores e a emissão de tokens de carbono com maior precisão.

Essa abordagem centrada no usuário visa otimizar a experiência e aumentar a eficiência da operação, ao mesmo tempo que promove uma gestão mais eficaz e sustentável.

![userjourney drawio](https://github.com/user-attachments/assets/dfa62e0d-efc8-452c-ab20-16302a667860)
