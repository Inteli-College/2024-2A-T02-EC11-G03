from fastapi import UploadFile
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

folder_name = 'uploads/'

def upload(file_name: str, file_content: bytes, image: UploadFile):
    try:
        # Faz o upload do arquivo para o S3
        s3_client.put_object(
            Bucket=os.getenv('BUCKET_NAME'),
            Key=f"{folder_name}{file_name}",
            Body=file_content,  # Garante que o conteúdo seja bytes
            ContentType=image.content_type,  # O tipo de conteúdo é importante
           )

        # Retorna a URL pública do arquivo
        file_url = f"https://{os.getenv('BUCKET_NAME')}.s3.amazonaws.com/{file_name}"
        return file_url
    except ClientError as e:
        raise Exception(f"Erro no upload para o S3: {str(e)}")
