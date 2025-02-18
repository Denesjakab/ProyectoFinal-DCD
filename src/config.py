import os
from dotenv import load_dotenv
import cloudinary

# Cargar el .env correctamente
load_dotenv()

# Configurar Cloudinary con las variables de entorno
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
    secure=True
)