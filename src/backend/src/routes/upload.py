from fastapi import APIRouter, File, UploadFile, HTTPException
import connectors.s3_bucket as s3

router = APIRouter(prefix="/upload", tags=["upload"])

@router.post("/")
async def upload_image(image: UploadFile = File(...)):
    try:
        # Lê o conteúdo do arquivo como bytes
        file_content = await image.read()

        # Cria um nome único para a imagem
        file_name = image.filename

        # Valida se o conteúdo do arquivo é válido
        if not file_name or not isinstance(file_content, bytes):
            raise ValueError("Nome do arquivo ou conteúdo inválido.")

        # Faz o upload para o S3 e obtém a URL
        file_url = s3.upload(file_name, file_content, image)
        
        return {"file_url": file_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
