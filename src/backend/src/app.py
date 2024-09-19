# -*- coding: utf-8 -*-
import os
import uvicorn
from typing import Optional
from fastapi import FastAPI, File, UploadFile, HTTPException
from routes import user_router, upload_router
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

app.include_router(upload_router)

@app.get("/")
def read_root():
    return {"Hello": "World"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
