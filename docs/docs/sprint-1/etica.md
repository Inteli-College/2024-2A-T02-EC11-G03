---
title: Análise de Impacto Ético
sidebar_position: 1
---

A análise de impacto ético é um processo que visa identificar, avaliar e mitigar possíveis impactos éticos adversos que um projeto, produto ou serviço de tecnologia possa ter sobre as pessoas, comunidades ou sociedade em geral. Essa análise é importante porque a tecnologia pode influenciar significativamente a vida das pessoas e o funcionamento da sociedade, e é crucial garantir que os projetos de tecnologia sejam desenvolvidos e implementados de maneira responsável, ética e sustentável, beneficiando a sociedade como um todo.

## Privacidade e proteção de dados

Em relação aos dados utilizados no projeto, as imagens captadas das florestas e utilizadas no modelo de contagem de árvores não contêm informações pessoais, garantindo que não há risco relacionado à privacidade de indivíduos. O uso dessas imagens é restrito à execução local no drone, minimizando o risco de exposição. A principal preocupação recai sobre o acesso ao drone e ao dispositivo de processamento, que deve ser limitado a pessoal autorizado.

Após a utilização das imagens pelo modelo de processamento de imagem no drone, os resultados (ou seja, a contagem de árvores) serão enviados para armazenamento. É crucial que essa transmissão de dados seja realizada de forma segura, utilizando protocolos de criptografia adequados para proteger os dados contra interceptações ou acessos não autorizados durante o envio.

Além disso, é importante que os dados armazenados sejam protegidos contra acessos não autorizados. Isso pode ser assegurado através da implementação de controles de acesso rigorosos, autenticação multifator para usuários, e auditorias regulares para garantir que somente indivíduos autorizados tenham acesso aos dados. O uso dos dados deve ser estritamente para os propósitos do projeto, conforme definido, e qualquer acesso ou utilização fora desse escopo deve ser proibido e monitorado.

Embora os dados coletados não sejam classificados como dados pessoais, as melhores práticas de segurança e privacidade ainda devem ser seguidas para proteger a integridade e a confidencialidade dos dados.

## Equidade e justiça

Para garantir equidade e justiça entre os clientes da Abundance, foi estabelecido que todos os tokens de crédito de carbono emitidos serão equivalentes em termos de quantidade de carbono sequestrado, independentemente da árvore que cada token representa. Embora árvores em diferentes fases de crescimento possam sequestrar diferentes quantidades de carbono, a padronização dos tokens evita que compradores de árvores mais jovens ou em fase de crescimento acelerado obtenham vantagens desproporcionais em relação a compradores de árvores mais antigas, que podem sequestrar menos carbono. Dessa forma, assegura-se que todos os clientes tenham acesso igualitário aos benefícios dos créditos de carbono, minimizando disparidades.

Além disso, árvores que já existiam na área antes da implementação do projeto não serão contabilizadas na geração de novos tokens. Isso evita que lucros sejam obtidos com base em iniciativas e esforços de conservação pré-existentes, respeitando o trabalho e os investimentos já realizados na preservação da floresta. Com essa abordagem, a Abundance busca promover uma distribuição justa dos benefícios econômicos e ambientais gerados pelo projeto, assegurando que novas ações de reflorestamento e conservação sejam justamente recompensadas, sem penalizar ou excluir grupos específicos.

## Transparência e consentimento informado

É fundamental garantir a transparência com todos os envolvidos no plantio e cuidado das árvores, bem como no local onde elas estão sendo plantadas. Com a introdução de uma nova forma de monitoramento por drones e processamento de imagem, é possível que as pessoas presentes no local possam ser capturadas nas imagens. Por isso, é essencial que todos sejam informados claramente sobre os objetivos dessa tecnologia, o tipo de dados coletados e como eles serão utilizados. O consentimento informado deve ser obtido de maneira adequada, garantindo que todos compreendam o propósito do monitoramento e concordem com a coleta de informações.

Além disso, a emissão de tokens de crédito de carbono, certificados pela Verra, exige uma contagem precisa das árvores presentes. Com o uso de processamento de imagem, conseguimos aumentar significativamente a precisão desta contagem, minimizando erros humanos e aumentando a confiabilidade dos dados. Essa abordagem não apenas melhora a integridade do processo, mas também fortalece a confiança de todas as partes envolvidas, ao garantir que o número de árvores é aferido de forma transparente e precisa, alinhado com os critérios estabelecidos pela certificadora.

## Responsabilidade social

A Abundance visa plantar a maior quantidade possível de árvores, promovendo um impacto positivo e sustentável no meio ambiente e nas comunidades locais. Ao auxiliar no reflorestamento, o projeto contribui significativamente para o reaparecimento de espécies nativas, promovendo a biodiversidade e fortalecendo os ecossistemas locais. Esses esforços estão alinhados com os Objetivos de Desenvolvimento Sustentável (ODS), especialmente aqueles relacionados à vida terrestre e às ações climáticas.

Além disso, o projeto tem como objetivo futuro identificar oportunidades bioeconômicas que possam beneficiar diretamente as comunidades locais. Por exemplo, ao identificar a presença de pimenta rosa na região, o projeto pode incentivar a coleta e a comercialização desse recurso natural, proporcionando uma fonte de renda sustentável para os moradores. Da mesma forma, a venda de eucalipto, quando pronto para corte, poderá ser incentivada como uma prática econômica que respeita o ciclo de cultivo e corte sustentável.

Ao criar essas oportunidades, o projeto não apenas reforça a economia local, mas também promove práticas de uso sustentável dos recursos naturais, garantindo que o desenvolvimento econômico esteja em harmonia com a preservação ambiental. Em suma, o projeto não só contribui para a mitigação das mudanças climáticas através da emissão de créditos de carbono, mas também fortalece a resiliência e a prosperidade das comunidades locais, minimizando disparidades e promovendo a equidade social.

## Viés e discriminação

É essencial examinar e mitigar os riscos de viés algorítmico, discriminação e exclusão involuntária no projeto. Um possível viés algorítmico pode ocorrer na contagem das árvores, especialmente se o modelo de contagem for treinado com um conjunto de dados que não representa adequadamente todas as espécies de árvores e tipos de vegetação da região. Se o modelo não for exposto a uma ampla variedade de espécies e densidades florestais, pode desconsiderar árvores não representadas no dataset, resultando em uma subcontagem e, consequentemente, na emissão de menos créditos de carbono do que o devido para aquela região.

Para mitigar esses riscos, o modelo será treinado com um conjunto de dados diversificado que inclui diferentes tipos de árvores, vegetação e densidades florestais. Isso garantirá que o modelo tenha a capacidade de identificar e contar com precisão todas as espécies presentes na floresta. Além disso, o modelo será revisado e ajustado periodicamente com novos dados coletados ao longo do tempo, permitindo que o sistema se mantenha atualizado e ajuste suas previsões conforme novas informações e variações nas condições da floresta.
