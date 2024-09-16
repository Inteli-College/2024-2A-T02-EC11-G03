from fastapi import APIRouter
from controllers.user import UserController

router = APIRouter(prefix="/user", tags=["user"])


@router.get("/{key}")
async def get_by_key(key: str):
    controller = UserController()

    return controller.get_user_by_key(key)


@router.post("/")
async def create(data: dict):
    controller = UserController()

    return controller.create(data)


@router.post("/login")
async def login(data: dict):
    controller = UserController()

    return controller.login(data.email, data.password)
