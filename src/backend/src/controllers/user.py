from fastapi import HTTPException
from repositories.user import UserRepository
from models.user import UserCreate, User  # Importando os modelos

class UserController:
    def __init__(self) -> None:
        pass

    async def create(self, user_schema: dict):

        name = user_schema["name"]
        email = user_schema["email"]
        password = user_schema["password"]
        role = user_schema.get("role")

        user = UserRepository(name=name, email=email, password=password, role=role)

        try:
            new_user = await user.create()
            return new_user
        except NameError as e:
            raise HTTPException(status_code=404, detail=str(e))

        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    async def get_paginated(self, filters: dict, offset: int):
        pass

    async def get_user_by_key(self, key: str):
        user_repository = UserRepository(key)
        try:
            user = await user_repository.get_by_key()
            return user
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    async def login(self, email: str, password: str):
        user_repository = UserRepository(email=email, password=password)
        try:
            user = await user_repository.login()
            return user
        except ValueError as e:
            raise HTTPException(status_code=401, detail=str(e))
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))


async def create_user(user: UserCreate):
    existing_user = await prisma.user.find_unique(
        where={"email": user.email}
    )

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    created_user = await prisma.user.create(data={"email": user.email, "name": user.name, "password": user.password})
    return created_user
