from fastapi import APIRouter, File, UploadFile, HTTPException
import connectors.s3_bucket as s3
from models.upload import Registry
from controllers.upload import UploadController

router = APIRouter(prefix="/upload", tags=["upload"])

@router.post("/image")
async def upload_image(image: UploadFile = File(...)):
    try:
    
        file_content = await image.read()

        # Cria um nome único para a imagem
        file_name = image.filename

        file_url = s3.upload(file_name, file_content, image)
 
        return file_url
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.post("/")
async def add_registry(registry: Registry):
    controller = UploadController()
    return await controller.create(registry)