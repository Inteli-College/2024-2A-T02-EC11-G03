from prisma import Prisma
from dotenv import load_dotenv

db = Prisma(auto_register=True)

load_dotenv()
