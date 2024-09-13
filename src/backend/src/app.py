# -*- coding: utf-8 -*-
import os
import uvicorn
from typing import Optional
from fastapi import FastAPI, File, UploadFile, HTTPException
from routes import user_router
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    from prisma import Prisma

    prismaClient = Prisma()

    await prismaClient.connect()
    yield
    await prismaClient.disconnect()


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)

UPLOAD_DIRECTORY = "uploads/"

if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/upload")
async def upload_image(image: UploadFile = File(...)):
    try:
        file_location = os.path.join(UPLOAD_DIRECTORY, image.filename)

        with open(file_location, "wb") as file_object:
            file_object.write(await image.read())

        return {"info": f"file '{image.filename}' saved at '{file_location}'"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
