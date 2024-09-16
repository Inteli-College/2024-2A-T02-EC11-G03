FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN prisma generate  # Isso pode ficar no Dockerfile

EXPOSE 3000

CMD ["python", "main.py"]  # Certifique-se de que está chamando o arquivo correto para iniciar a aplicação
