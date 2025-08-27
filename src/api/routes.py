"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Paciente, Cita
from api.utils import generate_sitemap, APIException
from flask_cors import CORS


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/paciente/', methods=['POST'])
def crear_paciente():
    datos_paceinte = request.get_json()

@api.route('/paciente', methods=['GET'])
def obtener_paciente():
    pacientes = Paciente.query.all()
    pacientes_to_dict = [paciente.serialize() for paciente in pacientes]
    return jsonify(pacientes_to_dict), 200
 

