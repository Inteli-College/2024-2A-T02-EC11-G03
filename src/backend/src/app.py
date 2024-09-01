# -*- coding: utf-8 -*-
import os
import uvicorn
from typing import Optional
from connectors.s3_bucket import upload_fileobj
from fastapi import FastAPI, File, UploadFile, HTTPException, Body

app = FastAPI()

# Defina o diretório onde as imagens serão salvas
UPLOAD_DIRECTORY = "uploads/"

# Certifique-se de que o diretório de uploads existe
if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.post("/upload")
async def upload_image(image: UploadFile = File(...)):
    try:
        # Caminho completo onde o arquivo será salvo
        file_location = os.path.join(UPLOAD_DIRECTORY, image.filename)
        
        # Salva o arquivo na pasta local
        with open(file_location, "wb") as file_object:
            file_object.write(await image.read())
        
        return {"info": f"file '{image.filename}' saved at '{file_location}'"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
