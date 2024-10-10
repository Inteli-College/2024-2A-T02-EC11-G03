from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from deepforest import main
import numpy as np
import torch
import io
import base64
from PIL import Image

app = FastAPI()

MODEL_PATH = "./deepforest_model.pth"

def load_model():
    model = main.deepforest() 
    model.load_state_dict(torch.load(MODEL_PATH))  
    model.eval()  
    return model

model = load_model()

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:

        image_path = f"{file.filename}"
        
        with open(image_path, "wb") as image_file:
            content = await file.read()
            image_file.write(content)
        
        try:
            Image.open(image_path)
        except Exception as e:
            raise HTTPException(status_code=400, detail="O arquivo enviado não é uma imagem válida.")
        
        predictions = model.predict_image(path=image_path, return_plot=True)

        output_image = Image.fromarray(predictions.astype(np.uint8))

        buffered = io.BytesIO()
        output_image.save(buffered, format="JPEG") 
        image_data = base64.b64encode(buffered.getvalue()).decode('utf-8')

        num_boxes = len(predictions)

        return JSONResponse(content={"num_boxes": num_boxes, "image": image_data})

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)