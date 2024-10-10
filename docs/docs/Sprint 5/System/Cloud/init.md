---
title: Implementação - Cloud
sidebar_position: 1
---

# Implementação de Arquitetura em Cloud

Nesta documentação, explicamos a arquitetura do sistema cloud que utilizamos para o processamento de imagens, bem como o fluxo de dados entre os componentes do sistema.

## Arquitetura Geral

O sistema é construído sobre serviços gerenciados da AWS, utilizando **S3**, **AWS Lambda** e **RDS (PostgreSQL)** para armazenar, processar e manter as informações necessárias. Abaixo, detalhamos cada componente da arquitetura.

### Buckets S3

- **Bucket S3: Frontend e Processamento de Imagens**
    
    Utilizamos o **Amazon S3** para armazenar os arquivos de imagem e gerenciar os fluxos de dados entre o Frontend e o processamento. Há três buckets principais:
    
    - **Bucket Frontend**: Usado para receber e armazenar as imagens enviadas pelos usuários.
    - **Raw Image** (Imagem Crua): Após o upload, as imagens são armazenadas neste bucket para serem processadas pelo sistema.
    - **Processed Image** (Imagem Processada): Após a execução do modelo, as imagens processadas são salvas aqui e estarão disponíveis para visualização pelo usuário.

    As pastas dentro do bucket seguem uma estrutura organizada, separando as imagens enviadas e processadas.

### Funções Lambda

O sistema possui duas funções **AWS Lambda** responsáveis pelo processamento dos dados e pela comunicação entre os serviços:

- **Backend For Frontend (BFF)**:
    
    Esta função Lambda é acionada assim que uma imagem é enviada pelo usuário. A BFF recebe a imagem e seus metadados, e então:
    
    - Salva a imagem no bucket **Raw Image**.
    - Armazena as informações inputadas pelo usuário no **RDS** (PostgreSQL).
    - Gera a URL da imagem salva e a encaminha para a próxima função Lambda.

- **Modelo de Processamento**:
    
    A segunda função Lambda é responsável por processar a imagem. Ela consome a imagem armazenada no bucket **Raw Image**, aplica o modelo de machine learning para detectar as árvores, e depois salva a versão processada da imagem no bucket **Processed Image**. Informações como o número de árvores detectadas são armazenadas no banco de dados **RDS**.

### Banco de Dados RDS

O sistema utiliza um banco de dados **RDS (PostgreSQL)** para armazenar tanto os metadados inseridos pelo usuário quanto as informações geradas durante o processamento da imagem, como o número de árvores detectadas pelo modelo de machine learning.

---

## APIs para Upload e Processamento

### Upload de Arquivos para S3

A aplicação usa um endpoint de upload onde o arquivo de imagem é enviado pelo usuário. A função de upload lida com a integração com o **S3**, realizando as seguintes operações:

1. Recebe o arquivo de imagem via **FastAPI** e armazena temporariamente o conteúdo.
2. O arquivo é então enviado ao bucket **Raw Image** no S3, e a função retorna a URL pública da imagem para outras partes do sistema, permitindo que ela seja consumida pela função Lambda de processamento.

Essa abordagem utiliza o **boto3** (SDK da AWS para Python) para fazer o upload de maneira segura, com credenciais obtidas de variáveis de ambiente.

### Controlador de Upload e Processamento

O sistema possui um controlador dedicado para gerenciar o ciclo de vida das imagens, desde o upload até o processamento final. Ele realiza as seguintes etapas:

- **Recepção do Upload**: O controlador recebe o caminho da imagem e outras informações, como o tipo de árvores que serão detectadas.
- **Processamento da Imagem**: Utilizando **httpx**, o controlador faz uma requisição POST para enviar a imagem ao endpoint de processamento.
- **Armazenamento no Banco de Dados**: Após o processamento, a URL da imagem processada e os resultados (como o número de árvores) são armazenados no **RDS** via o repositório de uploads.

### Repositório de Upload

O repositório de upload é responsável pela comunicação com o banco de dados **RDS**. Ele segue o padrão de conexão assíncrona com **Prisma** para:

- Conectar-se ao banco de dados.
- Inserir os registros de imagens processadas e suas informações associadas, como a URL da imagem, tipos de árvores detectadas, e outros identificadores (scanId e addressId).

Esse repositório garante que todas as transações sejam executadas de maneira segura e eficiente, fechando a conexão com o banco após cada operação.

---

## Fluxo de Informações

1. **Upload de Imagem**: O usuário faz o upload da imagem através do frontend.
2. **Armazenamento Inicial**: A imagem é enviada para o bucket **Raw Image** no S3, e os metadados são salvos no **RDS**.
3. **Processamento de Imagem**: A imagem é processada pela função Lambda de modelo, que salva a imagem resultante no bucket **Processed Image**.
4. **Armazenamento Final**: Os resultados do modelo são armazenados no banco de dados RDS, prontos para consulta pelo frontend.

Essa arquitetura em cloud permite um fluxo de trabalho altamente escalável e eficiente, com recursos gerenciados da AWS para lidar com upload, processamento e armazenamento de imagens de forma integrada.

--- 

Com isso, o sistema assegura uma arquitetura robusta e ágil para o processamento de imagens com a utilização de modelos de machine learning em cloud.
