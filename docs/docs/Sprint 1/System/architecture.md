---
title: Arquitetura - Versão Inicial
sidebar_position: 1
---

# Arquitetura - Versão Inicial (V0)

## Interface
A interface do sistema foi concebida em dois formatos distintos para atender diferentes necessidades: uma voltada para a experiência do usuário final da Abundance Brasil e outra para facilitar a interação entre a empresa e o sistema. Dado que o projeto envolve hardware, é essencial garantir o funcionamento contínuo e eficiente do sistema e do modelo de IA. Para isso, planejamos as seguintes funcionalidades:
1. Dashboard de Visualização do Sistema com Metabase: Uma plataforma intuitiva para monitoramento em tempo real das operações, desempenho do modelo de IA, e status do hardware.
2. Interface Integrada com o Sistema da Abundance: Uma solução personalizada que se integra aos sistemas internos da Abundance, permitindo uma interação fluida e eficiente.

## Servidor - Backend
O backend será desenvolvido em Python e atuará como o núcleo da integração entre o hardware e as interfaces do sistema. As principais responsabilidades do servidor incluem:
1. Registro de Dados no Banco: Armazenamento seguro e organizado dos dados coletados pelo hardware.
Servir os Dados para a Interface: Fornecimento de dados em tempo real para as interfaces de usuário e administração.
2. Armazenamento de Imagens: Gestão e armazenamento das imagens capturadas pelo hardware, garantindo acessibilidade e segurança.

## Hardware
O hardware desempenhará um papel crucial no processamento de imagens e na coleta de metadados, que serão armazenados no banco de dados. Estamos avaliando as seguintes opções para o desenvolvimento do hardware:
1. Raspberry Pi com Dobot Cam: Uma solução robusta que combina flexibilidade com poder de processamento suficiente para aplicações mais complexas.
2. ESP32 + Cam: Uma opção mais leve e econômica, ideal para implementações em grande escala ou onde o consumo de energia é uma preocupação.


## Modelo/IA e Processamento de Imagens
Para o desenvolvimento do modelo de IA e o processamento de imagens, estamos considerando duas abordagens que balanceiam a necessidade de desempenho com as limitações de hardware:
1. Tiny ML: Um modelo compacto, otimizado para dispositivos de baixa potência, que oferece processamento eficiente em tempo real.
2. YOLO Nano: Uma versão reduzida do modelo YOLO, focada em detecção rápida e precisa, adequada para hardware com capacidade de processamento limitada.