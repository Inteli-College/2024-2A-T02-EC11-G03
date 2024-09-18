from pydantic import BaseModel
from typing import Optional, List
from enum import Enum

class Role(str, Enum):
    ADMIN = "ADMIN"
    BUSINESS = "BUSINESS"
    CLIENT = "CLIENT"
    DEFAULT_ROLE = "DEFAULT_ROLE"

class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    role: List[str]

from pydantic import BaseModel

class LoginData(BaseModel):
    email: str
    password: str

class User(BaseModel):
    id: int
    email: str
    name: str

    class Config:
        orm_mode = True  # Permite compatibilidade com ORM como Prisma
