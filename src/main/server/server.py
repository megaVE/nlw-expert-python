from flask import Flask
from flask_cors import CORS
from src.main.routes.tag_routes import tag_routes_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(tag_routes_bp)
