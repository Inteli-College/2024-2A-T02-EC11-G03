from fastapi import HTTPException
from repositories.user import UserRepository
from models.user import UserCreate, User  # Importando os modelos

class UserController:
    def __init__(self) -> None:
        pass

    async def create(self, user_schema: UserCreate):
    # Acessa os atributos diretamente
        name = user_schema.name
        email = user_schema.email
        password = user_schema.password
        role = user_schema.role if hasattr(user_schema, 'role') else None

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

