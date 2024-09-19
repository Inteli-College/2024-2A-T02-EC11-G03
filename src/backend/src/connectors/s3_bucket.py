import logging

from fastapi import File
import boto3
from botocore.exceptions import ClientError
import os
from dotenv import load_dotenv

load_dotenv()

# Configuração do cliente S3
s3_client = boto3.client(
    's3',
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
    region_name=os.getenv('AWS_REGION')
)

def upload(file_name, file_content, image):
    s3_client.put_object(
            Bucket=os.getenv('BUCKET_NAME'),
            Key=file_name,
            Body=file_content,
            ContentType=image.content_type
        )

        # Retorna a URL pública do arquivo
    file_url = f"https://{os.getenv('BUCKET_NAME')}.s3.amazonaws.com/{file_name}"
    return file_url

