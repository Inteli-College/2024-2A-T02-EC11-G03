from pydantic import BaseModel
from typing import List

class Registry(BaseModel):
    image_path: str
    tree_types: List[str]
    scanId: int
    addressId: int