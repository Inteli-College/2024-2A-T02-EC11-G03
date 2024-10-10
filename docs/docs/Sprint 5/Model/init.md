---
title: Modelo - Versão Final
sidebar_position: 1
---

# Características e Detalhamento do Modelo Final
- A estutura de teste descrita  na sprint três se manteve contudo alguns pontos foram adicionados como a utilização de algumas métricas para avaliar o modelo, além da determinação de 20 épocas de treinamento antes do salvamento do modelo para o uso geral. 

## Métricas 
A principais métricas retiradas do modelo foi a de precisão e de recall. 
A precisão mede a proporção de previsões corretas feitas pelo modelo, em relação ao total de previsões que ele identificou como positivas (ou seja, aquelas que ele previu como árvores). Em termos práticos, isso significa:

Fórmula: Precisão = Verdadeiros Positivos / (Verdadeiros Positivos + Falsos Positivos)
Interpretação: De todas as árvores que o modelo detectou, quantas eram de fato árvores? Uma alta precisão significa que o modelo faz poucas previsões incorretas (ou seja, há poucos falsos positivos).

Recall
O recall mede a capacidade do modelo de identificar todas as instâncias positivas reais, ou seja, quantas árvores ele realmente detecta entre todas as que estão presentes na imagem.

Fórmula: Recall = Verdadeiros Positivos / (Verdadeiros Positivos + Falsos Negativos)
Interpretação: De todas as árvores que realmente estavam na imagem, quantas o modelo detectou corretamente? Um alto recall significa que o modelo está capturando a maioria das árvores (ou seja, há poucos falsos negativos).

### Precisão
- A precisão encontrada para o modelo foi de 75%, podendo ser interpretado que a cada 4 árvores o modelo identificava 3 árvores. 
### Revogação
- A revogação encontrada para o modelo foi de 4%, podendo ser interpretado que na maioria das vezes onde onde havia uma árvore ele predizia que não havia árvore.
# Limitações e hipóteses 
- Como forma de lidar com as limitações aplicamos alguns testes para dividir uma imagem de alta resolução em imagens menores a fim de usar o modelo, nas partes da imagem para obter um resultado melhor, contudo isso necessitaria um tratamento maior dos dados de saida para que a quantidade de árvores de cada predição fosse somada além da união das imagens menores na imagem principal, devido a complexidade desse tratamento acabamos não conseguindo efetuar essa integração.

- Outro problema evidente foi o contraste entre as métricas de precisão e revogaçõa, a principal hipótese sobre este resultado é devido a qunatidade de inputs de árvore e não árvore serem desbalanceados provocando um viés para o modelo, no qual ele resulta em predições positivas conseguindo uma alte precisão, mas em contra partida, uma pésima revogação. Para balancer seria necessário ajustes mais finos nos parâmetros de treinamento e um cuidado maior na hora de gerar o arquivo csv para anotações que serão utilizadas, uma possivel solução é a otimização do detec tree para evitar que ele identifique regiões que não são arvores como árvores, isso resolveria parte da problemática.  
