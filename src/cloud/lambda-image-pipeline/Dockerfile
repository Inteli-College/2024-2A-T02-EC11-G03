# Usar a imagem base oficial do Lambda para Python 3.9
FROM public.ecr.aws/lambda/python:3.9

# Copiar o arquivo requirements.txt para a imagem
COPY requirements.txt .

# Instalar as dependências necessárias
RUN pip install -r requirements.txt

# Copiar o código Python para o diretório /var/task (onde o Lambda executa o código)
COPY lambda_function.py .

# Definir o ponto de entrada para a função Lambda
CMD ["lambda_function.lambda_handler"]
