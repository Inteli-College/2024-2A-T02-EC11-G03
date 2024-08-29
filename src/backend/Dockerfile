FROM python:3.8-slim

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN prisma generate

RUN prisma migrate dev -n 'auto' --schema=./src/prisma/schema.prisma