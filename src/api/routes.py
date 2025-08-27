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


#obtener todos los pacietes
@api.route('/paciente', methods=['GET'])
def obtener_paciente():
    pacientes = Paciente.query.all()
    return jsonify([
        paciente.serialize() for paciente in pacientes
    ]), 200

#obtener todas las citas
@api.route('/cita', methods=['GET'])
def obtener_citas():
    citas = Cita.query.all()
    return jsonify([
        cita.serialize() for cita in citas
    ]), 200
 

#obtener paciente por id
@api.route('/paciente/<int:paciente_id>', methods=['GET'])
def obtener_single_paciente(paciente_id):
    buscar_paciente = Paciente.query.get(paciente_id)

    if not buscar_paciente:
        return jsonify({"msg": f"Paciente con id {paciente_id} no encontrado en la base de datos" }), 404
    
    return jsonify(buscar_paciente.serialize()), 200


# revisar como obtener todas las citas de un paciente.
@api.route('/cita/<int:paciente_id>', methods=['GET'])
def obtener_single_cita(paciente_id):
    buscar_cita = Cita.query.get(paciente_id)

    if not buscar_cita:
        return jsonify({"msg": f"Cita con id {id} no encontrado en la base de datos" }), 404
    
    return jsonify(buscar_cita.serialize()), 200

#crear paciente
@api.route('/paciente', methods=['POST'])
def crear_paciente():
    body = request.get_json()

    if not body:
        return jsonify({"error": "No se enviaron datos"}), 400 
        
    nuevo_paciente = Paciente(
                nombre=body['nombre'],
                telefono=body['telefono'],
                email=body['email'],
                direccion=body['direccion'],
                ciudad=body['ciudad'],
                estado=body['estado'],
                nota=body.get('nota', '')  # Campo opcional
    )

    db.session.add(nuevo_paciente)
    db.session.commit()

    return jsonify(nuevo_paciente.serialize()), 201
