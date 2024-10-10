# Usar uma imagem base com Python
FROM python:3.9

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo de requisitos para o container
COPY requirements.txt .

# Instalar as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o código para o container
COPY . .

# Comando de execução do script principal
CMD ["python", "main.py"]
