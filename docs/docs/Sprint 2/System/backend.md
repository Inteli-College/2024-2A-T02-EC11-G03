---
title: Backend - V0
sidebar_position: 1
---

## Documentação do Sistema Dockerizado

### 1. Dockerfile
O Dockerfile é usado para criar uma imagem Docker para o backend, que é uma API desenvolvida em Python com FastAPI e Prisma.

- A imagem base utilizada é o Python 3.8 em sua versão slim para otimizar o espaço.
- O diretório de trabalho dentro do contêiner é definido para /app.
- O arquivo requirements.txt é copiado para o contêiner, e as dependências Python são instaladas a partir dele.
- Todo o conteúdo do diretório atual é copiado para o contêiner.
- O cliente Prisma é gerado com base no schema definido.
- As migrações do Prisma são executadas para configurar o banco de dados com o schema atual.

### 2. docker-compose.yml
O arquivo docker-compose.yml define e executa múltiplos serviços Docker, permitindo a construção e execução dos contêineres do backend e do banco de dados.

#### Serviços:
1. backend:
- O serviço backend usa a imagem Docker construída para o backend.
- O contêiner do backend é nomeado como demeter-api.
- A porta 8000 do contêiner é mapeada para a mesma porta no host, permitindo o acesso à API.
- As variáveis de ambiente são carregadas a partir de um arquivo .env.
- O diretório de código-fonte do host é mapeado para o diretório de trabalho no contêiner, permitindo que alterações no código sejam refletidas sem necessidade de reconstrução da imagem.
- O serviço é iniciado usando o Uvicorn, com hot-reload ativado.
- O contêiner é configurado para reiniciar automaticamente em caso de falha.
- O serviço depende do banco de dados, garantindo que o backend só inicie após o banco estar disponível.

2. db:
- O serviço db constrói uma imagem Docker para o banco de dados PostgreSQL.
- O contêiner do banco de dados é nomeado como postgres.
- As variáveis de ambiente configuram o usuário, a senha e o nome do banco de dados.
- A porta 5432 do contêiner é mapeada para a mesma porta no host, permitindo o acesso ao banco de dados.


## Documentação da API
### Introdução
Esta API foi desenvolvida utilizando FastAPI, oferecendo endpoints para operações básicas como leitura de itens e upload de imagens. A API é projetada para ser leve e fácil de usar, com funcionalidades essenciais para manipulação de dados e arquivos.

### Endpoints
1. GET ```/```
- Descrição: Endpoint raiz que retorna uma mensagem de boas-vindas.
- Resposta:
- Status: 200 OK
- Corpo da resposta: 
```{"Hello": "World"}```

2. GET ```/items/{item_id}```
- Descrição: Retorna o ID do item solicitado e um parâmetro opcional de consulta.
- Parâmetros:
    - ```item_id``` (int): ID do item a ser retornado.
    - ```q``` (opcional, str): Parâmetro de consulta adicional.
- Resposta:
- Status: 200 OK
- Corpo da resposta: 
```{"item_id": item_id, "q": q}```

3. POST ```/upload```
- Descrição: Endpoint para upload de imagens. A imagem enviada será salva em um diretório local.
- Parâmetros:
    - image (UploadFile): Arquivo de imagem a ser carregado.
- Resposta:
- Status: 200 OK (sucesso)
- Corpo da resposta: 
```{"info": "file 'filename' saved at 'path/to/file'"}```

onde filename é o nome do arquivo carregado e path/to/file é o local onde ele foi salvo.
- Status: 500 Internal Server Error (em caso de falha)
- Corpo da resposta: Detalhes do erro ocorrido.
- Configuração
    - Diretório de Upload
    - As imagens carregadas através do endpoint /upload são salvas em um diretório local especificado por UPLOAD_DIRECTORY.
    - Caso o diretório especificado não exista, ele será criado automaticamente quando a API for iniciada.

### Execução da API
A API pode ser executada utilizando Uvicorn. Por padrão, ela será iniciada no host 0.0.0.0 e porta 8000, com o modo de recarga automática ativado para facilitar o desenvolvimento.