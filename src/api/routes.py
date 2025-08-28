"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Paciente, Cita
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from datetime import datetime
from sqlalchemy.exc import IntegrityError 


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# obtener todos los pacietes
@api.route('/paciente', methods=['GET'])
def obtener_paciente():
    pacientes = Paciente.query.all()
    return jsonify([
        paciente.serialize() for paciente in pacientes
    ]), 200

# obtener todas las citas
@api.route('/cita', methods=['GET'])
def obtener_citas():
    citas = Cita.query.all()
    return jsonify([
        cita.serialize() for cita in citas
    ]), 200


# obtener paciente por id
@api.route('/paciente/<int:paciente_id>', methods=['GET'])
def obtener_single_paciente(paciente_id):
    buscar_paciente = Paciente.query.get(paciente_id)

    if not buscar_paciente:
        return jsonify({"msg": f"Paciente con id {paciente_id} no encontrado en la base de datos"}), 404

    return jsonify(buscar_paciente.serialize()), 200


# revisar como obtener todas las citas de un paciente.
@api.route('/cita/<int:paciente_id>', methods=['GET'])
def obtener_single_cita(paciente_id):
    buscar_cita = Cita.query.get(paciente_id)

    if not buscar_cita:
        return jsonify({"msg": f"Cita con id {id} no encontrado en la base de datos"}), 404

    return jsonify(buscar_cita.serialize()), 200

# crear paciente

@api.route('/paciente', methods=['POST'])
def crear_paciente():
    body = request.get_json()

    if not body:
        return jsonify({"error": "No se enviaron datos"}), 400

    if not body.get('nombre'):
        return jsonify({"error": "El nombre es requerido"}), 400
    if not body.get('telefono'):
        return jsonify({"error": "El telefono es requerido"}), 400
    if not body.get('email'):
        return jsonify({"error": "El email es requerido"}), 400
    if not body.get('direccion'):
        return jsonify({"error": "La direccion es requerida"}), 400
    if not body.get('ciudad'):
        return jsonify({"error": "La ciudad es requerida"}), 400
    if not body.get('estado'):
        return jsonify({"error": "El estado es requerido"}), 400

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

# crear cita

def parse_fecha(fecha_str):
    return datetime.strptime(fecha_str, "%Y-%m-%d").date()


def parse_hora(hora_str):
    return datetime.strptime(hora_str, "%H:%M:%S").time()


@api.route('/cita', methods=['POST'])
def crear_cita():
    body = request.get_json()

    if not body:
        return jsonify({"error": "no se enviaron datos"}), 400

    nueva_cita = Cita(
        paciente_id=body['paciente_id'],
        fecha=parse_fecha(body['fecha']),
        hora=parse_hora(body['hora']),
        modalidad=body['modalidad'],
        precio=body['precio'],
        estado_pago=body['estado_pago'],
        nota=body.get('nota', '')
    )

    db.session.add(nueva_cita)
    db.session.commit()

    return jsonify(nueva_cita.serialize()), 201

# PUT Paciente
@api.route('/paciente/<int:paciente_id>', methods=['PUT'])
def actualizar_paciente(paciente_id):
    paciente = Paciente.query.get(paciente_id)

    if not paciente:
        return jsonify({"error": "Paciente no encontrado"}), 404

    body = request.get_json()
  
    if 'nombre' in body:
        paciente.nombre = body['nombre']
    if 'telefono' in body:
        paciente.telefono = body['telefono']
    if 'email' in body:
        paciente.email = body['email']
    if 'direccion' in body:
        paciente.direccion = body['direccion']
    if 'ciudad' in body:
        paciente.ciudad = body['ciudad']
    if 'estado' in body:
        paciente.estado = body['estado']
    if 'nota' in body:
        paciente.nota = body['nota']

    db.session.commit() # Actualizar cambios


    return jsonify(paciente.serialize()), 200

#PUT cita

@api.route('/cita/<id>', methods=['PUT'])
def actualizar_cita(id):
    cita = Cita.query.get(id)

    if not cita:
        return jsonify({"error": "Cita no encontrada"}), 404
    
    body = request.get_json()

    if 'fecha' in body:
        cita.fecha = parse_fecha(body['fecha'])
    if 'hora' in body:
        cita.hora = parse_hora(body['hora'])
    if 'modalidad' in body:
        cita.modalidad = body['modalidad']
    if 'precio' in body:
        cita.precio = body['precio']
    if 'estado_pago' in body:
        cita.estado_pago = body['estado_pago']
    if 'nota' in body:
        cita.nota = body['nota']

    db.session.commit() # Actualizar cambios

    return jsonify(cita.serialize()), 200

# Delete Paciente

@api.route('/paciente/<int:paciente_id>', methods=['DELETE'])
def eliminar_paciente(paciente_id):
    eliminar = Paciente.query.get(paciente_id)

    if not eliminar: 
        return jsonify({"Error": "Paciente no encontrado"}), 404
    
    
    try:
        db.session.delete(eliminar)
        db.session.commit()

        return jsonify({"Mensaje": "Paciente eliminado"}), 200
    except IntegrityError:
        db.session.rollback() #deshace la transacción
        return jsonify({
            "Error": "No se puede eliminar el paciente",
            "Mensaje": "El paciente tiene citas asociadas. Debe eliminar primero las citas"
        }), 400
    
@api.route('/cita/<int:id>', methods=['DELETE'])
def eliminar_cita(id):
    eliminar = Cita.query.get(id)

    if not eliminar:
        return jsonify({"error": "Cita no encontrada"}), 404

    db.session.delete(eliminar)
    db.session.commit()

    return jsonify({"Mensaje": "Cita eliminada"}), 200