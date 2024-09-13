from fastapi import APIRouter, HTTPException
from prisma import Prisma
from models.user import UserCreate, User  # Importando os modelos

router = APIRouter()
prisma = Prisma()

@router.on_event("startup")
async def connect_to_prisma():
    await prisma.connect()

@router.on_event("shutdown")
async def disconnect_from_prisma():
    await prisma.disconnect()

@router.post("/users/")
async def create_user(user: UserCreate):
    existing_user = await prisma.user.find_unique(
        where={"email": user.email}
    )

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    created_user = await prisma.user.create(data={"email": user.email, "name": user.name, "password": user.password})
    return created_user
