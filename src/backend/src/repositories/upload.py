from typing import List
from __init__ import db
from prisma import Prisma, errors
from contextlib import asynccontextmanager


class UploadRepository:
    def __init__(
        self, image_url: str = None, tree_types: List[str] = None, scanId: int = None, adressId: int = None
    ) -> None:
        self.image_url = image_url
        self.tree_types = tree_types
        self.scanId = scanId
        self.adressId = adressId

    @asynccontextmanager
    async def database_connection(self):
        self.db = db
        await self.db.connect()
        try:
            yield
        finally:
            await self.db.disconnect()
    
    async def create(self):
        async with self.database_connection():
            return await self.db.quarter.create(
                data={
                    "image_url": self.image_url,
                    "tree_types": self.tree_types,
                    "scanId": self.scanId,
                    "adressId": self.adressId,
                }
            )