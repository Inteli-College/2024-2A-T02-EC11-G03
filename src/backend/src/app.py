from typing import Optional
    
import uvicorn
from fastapi import Body, FastAPI, File
from connectors.s3_bucket import upload_fileobj

app = FastAPI()
    
@app.get("/")
def read_root():
    return {"Hello": "World"}

    
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.post("/upload")
def upload_image(image: Body[File]):
    
    upload_fileobj(image, )
    
if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)