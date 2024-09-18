from fastapi import APIRouter
from controllers.user import UserController
from models.user import UserCreate, LoginData  # Certifique-se de que o caminho está correto

router = APIRouter(prefix="/user", tags=["user"])


@router.get("/{key}")
async def get_by_key(key: str):
    controller = UserController()
    return controller.get_user_by_key(key)

@router.post("/")
async def create(user: UserCreate):
    controller = UserController()
    return await controller.create(user)

@router.post("/login")
async def login(data: LoginData):
    controller = UserController()
    user = await controller.login(data.email, data.password)
    return {"email": user.email, "name": user.name, "role": user.role}
