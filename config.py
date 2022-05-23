from dotenv import load_dotenv
import os

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
SQLALCHEMY_DATABASE_URI = "sqlite:///../db.sqlite3"

class application ():
    name = "Py-Dictionary"

class server ():
    hostname = "localhost"
    port = 8000
