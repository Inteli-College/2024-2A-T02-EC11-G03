import json
import cv2
import numpy as np
import boto3
import base64
from io import BytesIO

# Inicializa o cliente S3
s3 = boto3.client('s3')

def resize_image(image, width, height):
    return cv2.resize(image, (width, height))

def sharpen_image(image):
    kernel = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]])
    sharpened_image = cv2.filter2D(image, -1, kernel)
    return sharpened_image

def increase_saturation(image, saturation_scale=1.5):
    hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    hsv_image[:, :, 1] = cv2.multiply(hsv_image[:, :, 1], saturation_scale)
    saturated_image = cv2.cvtColor(hsv_image, cv2.COLOR_HSV2BGR)
    return saturated_image

def lambda_handler(event, context):
    try:
        # Pegando o nome do bucket e o arquivo do evento S3
        bucket_name = event['Records'][0]['s3']['bucket']['name']
        object_key = event['Records'][0]['s3']['object']['key']

        # Baixar a imagem do S3
        response = s3.get_object(Bucket=bucket_name, Key=object_key)
        image_bytes = response['Body'].read()

        # Convertendo a imagem de bytes para array NumPy
        image_array = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

        # Executar a pipeline de transformação
        resized_image = resize_image(image, 800, 600)
        sharpened_image = sharpen_image(resized_image)
        saturated_image = increase_saturation(sharpened_image, 1.8)

        # Convertendo de volta para bytes
        _, buffer = cv2.imencode('.jpg', saturated_image)
        processed_image_bytes = BytesIO(buffer).getvalue()

        # Definindo o nome do arquivo de saída
        processed_image_key = f'processed/{object_key}'

        # Enviando a imagem processada de volta ao S3
        s3.put_object(Bucket=bucket_name, Key=processed_image_key, Body=processed_image_bytes, ContentType='image/jpeg')

        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Image processed and uploaded successfully!',
                'bucket': bucket_name,
                'processed_image_key': processed_image_key
            })
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({
                'message': 'Error processing image',
                'error': str(e)
            })
        }
