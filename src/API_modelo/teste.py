import requests
import base64

# Caminho da imagem local
image_path = "./image_praça_liberdadeBH.jpg"

# URL da API FastAPI
url = "http://localhost:8000/predict/"

# Enviar a imagem via POST para o backend
with open(image_path, 'rb') as image_file:
    response = requests.post(url, files={'file': image_file})

# Verificar a resposta do servidor
if response.status_code == 200:
    data = response.json()
    
    # Decodificar a imagem Base64
    image_data = base64.b64decode(data['image'])
    
    # Salvar a imagem decodificada em um arquivo
    with open("output_image.jpg", "wb") as f:
        f.write(image_data)
    
    print(f"Bounding boxes detectadas: {data['num_boxes']}")
    print("A imagem foi salva como 'output_image.jpg'.")
else:
    print(f"Erro: {response.status_code}, {response.text}")
