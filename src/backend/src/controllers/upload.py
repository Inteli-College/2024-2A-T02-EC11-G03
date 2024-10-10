import uuid
from fastapi import HTTPException
import httpx
from repositories.upload import UploadRepository
from models.upload import Registry # Importando os modelos

class UploadController:
    def __init__(self) -> None:
        pass

    async def create(self, upload_schema: Registry):
        image_path = upload_schema.image_path
        tree_types = upload_schema.tree_types
        scanId = upload_schema.scanId
        adressId = upload_schema.addressId

        try:
            async with httpx.AsyncClient() as client:
                with open(image_path, "rb") as image_file:
                    files = {"image": (f"{uuid.uuid4()}.jpg", image_file, "image/jpeg")}

                    # Fazendo a requisição POST com o arquivo de imagem
                    image_url = await client.post("http://localhost:8080/upload/image", files=files)

                    if image_url.status_code != 200:
                        raise HTTPException(status_code=image_url.status_code, detail="Error uploading image")
                
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        
        upload = UploadRepository(image_url=image_url, tree_types=tree_types, scanId=scanId, adressId=adressId)

        try:
            new_registry = await upload.create()
            return new_registry
        except NameError as e:
            raise HTTPException(status_code=404, detail=str(e))
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))