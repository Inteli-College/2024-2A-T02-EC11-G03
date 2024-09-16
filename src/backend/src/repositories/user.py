import datetime
from uuid import uuid4
from __init__ import db
from prisma import Prisma, errors
from prisma.enums import Role, UserStatus
from contextlib import asynccontextmanager
import bcrypt


class UserRepository:
    def __init__(
        self, key: str = None, name: str = None, email: str = None, password: str = None, role: str = None
    ) -> None:
        self.key = key
        self.name = name
        self.email = email
        self.password = password
        self.role = role

    @asynccontextmanager
    async def database_connection(self):
        self.db = db
        await self.db.connect()
        try:
            yield
        finally:
            await self.db.disconnect()

    def _encrypt_password(self, password: str) -> str:
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode("utf-8"), salt)
        return hashed_password.decode("utf-8")

    def _verify_password(self, password: str, hashed_password) -> bool:
        return bcrypt.checkpw(password.encode("utf-8"), hashed_password.encode("utf-8"))

    async def login(self):
        async with self.database_connection():
            user = await self.db.user.find_first_or_raise(
                where={
                    "email": self.email,
                }
            )

            is_valid = self._verify_password(self, self.password, user.password) and user.status != UserStatus.DISABLED

            if is_valid:
                return user
            else:
                raise ValueError("InvalidPassword")

    async def create(self):
        async with self.database_connection():
            try:

                await self.db.user.find_first_or_raise(where={"email": self.email})

                raise NameError("User already exists")
            except errors.RecordNotFoundError:

                return await self.db.user.create(
                    data={
                        "email": self.email,
                        "name": self.name,
                        "password": self._encrypt_password(self.password),
                        "role": self.role if self.role else Role.DEFAULT_ROLE,
                    }
                )

    async def get_paginated(self, filters: dict):
        async with self.database_connection():
            pass

    async def get_by_key(self):
        async with self.database_connection():
            return await self.db.user.find_unique_or_raise(
                where={"key": self.key}, include={"trades": True, "trees": True}
            )

    async def update_role(self):
        async with self.database_connection():
            return await self.db.user.update(where={"key": self.key}, data={"role": self.role})

    async def update_user(self, updated_user):
        async with self.database_connection():
            try:

                return await self.db.user.update_or_raise(where={"key": self.key}, data=updated_user)

            except errors.RecordNotFoundError:
                raise ValueError("User not found")

    async def delete_user(self) -> None:
        async with self.database_connection():

            user = await self.db.user.update_or_raise(where={"key": self.key}, data={"status": UserStatus.DISABLED})

            await self.db.userstatusevent.create(data={"user": user, "status": UserStatus.DISABLED})
