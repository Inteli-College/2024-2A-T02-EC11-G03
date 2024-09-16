from pydantic import BaseModel

# Modelo Pydantic para criação de usuários
class UserCreate(BaseModel):
    email: str
    name: str
    password: str  # Se você planeja capturar a senha

class User(BaseModel):
    id: int
    email: str
    name: str

    class Config:
        orm_mode = True  # Permite compatibilidade com ORM como Prisma
