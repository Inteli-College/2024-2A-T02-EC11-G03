FROM python:3.8-slim

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN prisma generate

# RUN prisma db push --schema=./src/prisma/schema.prisma

EXPOSE 3000

CMD ["python", "main.py"]