
import logging

from fastapi import File
import boto3
from botocore.exceptions import ClientError
import os

def upload_file(file_name, bucket, object_name=None):

    if object_name is None:
        object_name = os.path.basename(file_name)
    
    s3_client = boto3.client('s3')
    try:
        response = s3_client.upload_file(file_name, bucket, object_name)
        logging.info(response)
    except ClientError as e:
        logging.error(e)
        return False
    return True

def upload_fileobj(file: File, bucket, object_name=None):

    if object_name is None:
        object_name = os.path.basename(file.name)
    
    s3_client = boto3.client('s3')
    try:
        with open(file, "rb") as f:
            response = s3_client.upload_fileobj(f, bucket, object_name)
            logging.info(response)
    except ClientError as e:
        logging.error(e)
        return False
    return True