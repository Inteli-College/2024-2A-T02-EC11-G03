---
title: P&D - Modelo
sidebar_position: 1
---

# Documentação dos Modelos de Deep Learning

## 1. Detect Tree

**Descrição**:  
O **Detect Tree** é um modelo de deep learning especializado na detecção de árvores em imagens aéreas, como as capturadas por satélites ou drones. Ele é implementado como uma rede neural convolucional (CNN) projetada para identificar todos os pixels em uma imagem que correspondem a árvores. O modelo opera em um formato binário, onde cada pixel é classificado como "árvore" ou "não árvore". Este modelo é particularmente útil para mapear áreas florestais ou monitorar mudanças em grandes extensões de terra.

**Funcionamento**:  
- **Entrada**: Imagens aéreas de alta resolução.
- **Processamento**: A CNN analisa a imagem pixel por pixel, utilizando camadas convolucionais para extrair características relevantes que indicam a presença de vegetação.
- **Saída**: Um mapa binário onde os pixels identificados como árvores são marcados.

**Desafio**:  
O maior desafio do **Detect Tree** é sua falta de especificidade quanto à contagem exata de árvores, uma vez que ele fornece apenas uma classificação binária por pixel. Isso significa que ele não distingue entre diferentes tipos de vegetação ou contornos individuais de árvores. Contudo, o modelo pode ser integrado com outros métodos para criar filtros mais complexos ou gerar metadados úteis para treinar outros modelos mais avançados.

**Imagens**:
![Imagem Exemplo 1](https://github.com/Inteli-College/2024-2A-T02-EC11-G03/blob/dev/docs/static/img/sprint-2/detect_tree.png?raw=true)

---

## 2. Deep Forest

**Descrição**:  
**DeepForest** é uma poderosa biblioteca em Python para a detecção de objetos em imagens de florestas, utilizando o modelo **RetinaNet**, uma arquitetura de rede neural convolucional altamente eficaz para a tarefa de detecção de objetos. A principal funcionalidade do DeepForest é identificar e delinear árvores individuais em imagens aéreas, permitindo o monitoramento detalhado de ecossistemas florestais. Este modelo é capaz de detectar árvores mesmo em áreas densamente florestadas, tornando-o uma ferramenta valiosa para ecologistas e pesquisadores ambientais.

**Funcionamento**:  
- **Entrada**: Imagens aéreas ou de satélite de regiões florestais.
- **Processamento**: Através de camadas convolucionais, o modelo RetinaNet extrai características que indicam a presença de árvores, e aplica âncoras para localizar e delimitar as árvores detectadas.
- **Saída**: Bounding boxes ou contornos de árvores detectadas na imagem, com uma pontuação de confiança.

**Desafio**:  
Para maximizar a eficácia do **DeepForest**, é essencial realizar um fine-tuning do modelo com base nas imagens específicas que serão utilizadas em predições futuras. Esse ajuste fino ajuda a adaptar o modelo às variações de resolução, iluminação e vegetação específica de cada área de estudo, melhorando significativamente a precisão das detecções.

**Imagens**:
![Imagem Exemplo 1](https://github.com/Inteli-College/2024-2A-T02-EC11-G03/blob/dev/docs/static/img/sprint-2/deep_forest.png?raw=true)

### Colab - Deep Forest
- [Google Colab](https://colab.research.google.com/drive/1PPCKcU2zRY0LUlDblr4mxkztOLqHTBrp?usp=sharing)
---

## 3. DeepLabv3+

**Descrição**:  
O **DeepLabv3+** é um modelo de Segmentação Semântica, desenvolvido pelo Google Research, que combina a precisão com a eficiência. Ele é baseado em convoluções dilatadas e convoluções separáveis por profundidade, o que lhe confere uma excelente capacidade de segmentação sem sacrificar a velocidade. O **DeepLabv3+** é amplamente utilizado em aplicações onde a segmentação precisa de diferentes classes em uma imagem, como na segmentação de terrenos em imagens de satélite. Este modelo é particularmente eficaz em distinguir e segmentar regiões de interesse, como áreas florestais, corpos d'água, ou terrenos urbanos.

**Funcionamento**:  
- **Entrada**: Imagens de alta resolução que requerem segmentação semântica.
- **Processamento**: A arquitetura DeepLabv3+ aplica convoluções dilatadas para aumentar o campo receptivo sem perder resolução espacial, e convoluções separáveis por profundidade para segmentar diferentes classes com precisão.
- **Saída**: Máscaras segmentadas, onde cada pixel da imagem é classificado em uma categoria específica (por exemplo, floresta, água, solo).

**Desafio**:  
O principal desafio do **DeepLabv3+** é a necessidade de datasets de alta qualidade com máscaras de segmentação pré-definidas. A qualidade das segmentações depende diretamente da precisão e variedade das máscaras utilizadas para treinar o modelo. A criação e curadoria dessas máscaras podem ser trabalhosas, mas são cruciais para que o modelo atinja alta precisão em suas predições.

**Imagens**:
![Imagem Exemplo 1](https://github.com/Inteli-College/2024-2A-T02-EC11-G03/blob/dev/docs/static/img/sprint-2/DeepLabv3+.png?raw=true)
