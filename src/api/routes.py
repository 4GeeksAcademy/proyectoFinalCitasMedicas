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


@api.route('/paciente', methods=['GET'])
def obtener_paciente():
    pacientes = Paciente.query.all()
    return jsonify([
        paciente.serialize() for paciente in pacientes
    ]), 200

@api.route('/cita', methods=['GET'])
def obtener_citas():
    citas = Cita.query.all()
    return jsonify([
        cita.serialize() for cita in citas
    ]), 200
 


@api.route('/paciente/<int:paciente_id>', methods=['GET'])
def obtener_single_paciente(paciente_id):
    buscar_paciente = Paciente.query.get(paciente_id)

    if not buscar_paciente:
        return jsonify({"msg": f"Paciente no encontrado con id {paciente_id} no está en la base de datos" }), 404
    
    return jsonify(buscar_paciente.serialize()), 200

