---
title: Protótipo de Interface
sidebar_position: 2
---
:::note

O protótipo, nesta sprint, foi pensado sob a perspectiva do usuário Abundance. A ideia é evoluir para que também seja possível a visualização do usuário cliente da Abundance.

:::

# Tela de Login
![Protótipo - Tela de Login](/img/sprint-2/prototype/login.png)

A primeira tela apresentada ao usuário no sistema é a Tela de Login, que desempenha um papel essencial tanto na segurança quanto na personalização da experiência. Como o sistema lida com informações específicas do usuário, como quantidade de ativos, valor dos ativos, dados da floresta (incluindo número de árvores e capacidade de captura de carbono), a implementação de um mecanismo de autenticação robusto é indispensável. A Tela de Login possibilita a gestão de permissões e autorizações, garantindo que cada usuário tenha acesso apenas às informações e funcionalidades apropriadas.

Além de seu papel na segurança, a Tela de Login abre espaço para uma experiência personalizada, permitindo que o sistema adapte o dashboard de acordo com as necessidades e preferências individuais. Isso possibilita a criação de recomendações customizadas e a exibição de dados mais relevantes, tornando o sistema mais intuitivo e eficiente para cada usuário.

Ao focar na personalização, o sistema pode, por exemplo:

- Oferecer recomendações dinâmicas com base nas interações anteriores do usuário.
- Adaptar o layout do dashboard conforme o perfil de uso, destacando informações críticas como os dados sobre ativos e métricas ambientais.
- Apresentar notificações e alertas personalizados, facilitando a gestão de recursos e permitindo que o usuário tome decisões mais informadas.

A Tela de Login, portanto, não apenas garante a segurança dos dados sensíveis, mas também serve como o ponto de partida para uma experiência rica e ajustada às necessidades do usuário, aumentando o engajamento e a eficiência do uso do sistema.

# Dashboard
![Protótipo - Dashboard](/img/sprint-2/prototype/dash.png)

Ao entrar no sistema, o usuário é imediatamente direcionado ao Dashboard, a interface principal para monitoramento e controle. No Dashboard, ele encontra uma visão geral dos dados e indicadores mais importantes relacionados ao projeto, como a contagem de árvores, metas de plantio e variações temporais, conforme representado na imagem acima.

Os principais componentes visíveis no Dashboard são:  
**Contagem de Árvores:** Apresenta de forma gráfica o número total de árvores registradas no sistema, fornecendo uma visão clara do progresso de preservação e aumento da vegetação.  
**Metas de Plantio:** Um painel específico que exibe as metas e o status do plantio de árvores, ajudando o usuário a acompanhar o cumprimento dos objetivos estabelecidos.  
**Contagem Temporal:** Um gráfico que ilustra a evolução do número de árvores ao longo do tempo, permitindo uma análise das tendências.  
**Registro de Atividades:** Uma tabela detalhada que lista os principais registros referentes a um processamento de imagem e inserção de metadados. Isso facilita a navegação pelos dados específicos e o acompanhamento de eventos importantes.  
**Imagens Recentes:** Exibe imagens atualizadas da floresta ou área monitorada, permitindo uma visão visual do progresso e do impacto das ações ambientais.  

Com esses elementos, o usuário tem acesso a todas as informações importantes de forma rápida e organizada. O Dashboard centraliza dados essenciais, permitindo a tomada de decisões ágeis, com base em métricas claras. Ele também oferece personalização, ajustando-se ao perfil do usuário, e proporciona uma experiência visual intuitiva, com gráficos e tabelas fáceis de interpretar. Dessa forma, o Dashboard transforma dados complexos em insights práticos, melhorando a eficiência e o controle sobre o projeto.

# Upload de Imagens
![Protótipo - Upload de Imagens](/img/sprint-2/prototype/upload.png)

Além do Dashboard, o usuário também pode acessar a tela de Upload de Imagens, onde é possível carregar uma imagem para análise e obter resultados em alguns segundos. A interface foi projetada para facilitar o envio de arquivos, oferecendo duas opções práticas: arrastar e soltar a imagem diretamente na área de upload ou selecioná-la manualmente no dispositivo.

O diferencial dessa tela está na possibilidade de o usuário fornecer metadados que enriquecem o processo de análise. Esses dados adicionais permitem uma customização mais apurada dos resultados, aumentando a precisão das informações apresentadas. As principais categorias de metadados incluem:  
**Condições Climáticas:** Informar se o clima no momento da captura da imagem estava ensolarado ou chuvoso.  
**Espécie(s) de Árvores:** Detalhar as espécies presentes na imagem, o que melhora a acurácia da análise.  
**Tipo de Terreno:** Indicar as características do terreno, auxiliando na contextualização dos dados.  
**Comentários Adicionais:** Um campo aberto para observações extras que possam refinar ainda mais os resultados.  

Essa abordagem não apenas facilita o upload, mas também valoriza a experiência do usuário ao permitir uma interação ativa e personalizada com o sistema. O preenchimento de metadados torna o processo mais envolvente, ao mesmo tempo que melhora a qualidade da análise gerada, especialmente em métricas como a redução de carbono e o impacto ambiental. Isso reforça a sensação de controle e participação do usuário, elevando a experiência para um nível mais sofisticado e informativo.