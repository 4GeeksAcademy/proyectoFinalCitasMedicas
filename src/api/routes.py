"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Paciente, Cita
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from datetime import datetime
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.email_client import send_email
import os
from flask import current_app
from werkzeug.security import check_password_hash, generate_password_hash


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

# se pregunta si tiene email
    if not email or not password:
        return jsonify({"msg": "Bad email or password in body."}), 401
# buscamos el usuario por email
    user = User.query.filter_by(email=email).one_or_none()

# pregunta si tiene usuario
    if not user:
        return jsonify({"msg": "Bad username or password"}), 401
    # pregunta si está bien el password
    if not check_password_hash(user.password, password):
        return jsonify({"msg": "Bad username or password"}), 401
# si todo coincide crea el token y puede acceder
    access_token = create_access_token(identity=email)
    return jsonify({
        "access_token": access_token,
        "name": user.name,
        "email": user.email
    }), 200

# Crear Usuarios Register


@api.route("/register", methods=["POST"])
def register():
    body = request.get_json()

    if not body.get('name') or not body.get('phone'):
        return jsonify({"error": "Nombre y teléfono son requeridos"}), 400

    if User.query.filter_by(email=body['email']).first():
        return jsonify({"error": "Email ya existe"}), 400

    if User.query.filter_by(phone=body['phone']).first():
        return jsonify({"error": "El teléfono ya existe"}), 400

    # crear usuario con todos los campos
    user = User(
        name=body['name'],
        email=body['email'],
        phone=body['phone'],
        password=generate_password_hash(body['password']),
        is_active=True
    )

    try:
        db.session.add(user)
        db.session.commit()

        html_body = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4CAF50;">¡Bienvenido/a a MedAgend, {body['name']}! 🎉</h2>
            <p>Estamos emocionados de tenerte en nuestra plataforma.</p>
            <p>Con MedAgend podrás gestionar tus pacientes de manera eficiente y organizada.</p>
            <p><strong>Tu cuenta ha sido creada exitosamente con el email:</strong> {body['email']}</p>
            <br>
            <p>¡Que tengas un día fantástico! ✨</p>
            <p><em>El equipo de MedAgend</em></p>
        </div>
        """

        send_email(
            smtp_server=os.getenv('SMTP_SERVER', 'smtp.gmail.com'),
            port=int(os.getenv('SMTP_PORT', 587)),
            username=os.getenv('EMAIL_USERNAME'),
            password=os.getenv('EMAIL_PASSWORD'), 
            to_email=body['email'],
            subject="¡Bienvenido/a a MedAgend! 🌟",
            body=html_body,
            html=True
        )
    except:
        return jsonify({"msg": "Algo raro pasó"}), 500
    return jsonify(user.serialize()), 201


# obtener todos los pacietes DEL USUARIO AUTENTICADO
@api.route('/paciente', methods=['GET'])
@jwt_required()
def obtener_paciente():

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    pacientes = Paciente.query.filter_by(user_id=current_user.id).all()
    return jsonify([
        paciente.serialize() for paciente in pacientes
    ]), 200

# obtener todas las citas DEL USUARIO AUTENTICADO


@api.route('/cita', methods=['GET'])
@jwt_required()
def obtener_citas():

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    citas = Cita.query.filter_by(user_id=current_user.id).all()
    return jsonify([
        cita.serialize() for cita in citas
    ]), 200
# NUEVO


@api.route('/cita/<int:id>', methods=['GET'])
@jwt_required()
def obtener_cita_individual(id):
    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    if not current_user:
        return jsonify({"error": "Usuario no encontrado"}), 404

    # Buscar la cita que pertenezca al usuario actual
    cita = Cita.query.filter_by(id=id, user_id=current_user.id).first()

    if not cita:
        return jsonify({"error": "Cita no encontrada"}), 404

    return jsonify(cita.serialize()), 200

# obtener paciente por id SI PERTENECE AL USUARIO


@api.route('/paciente/<int:paciente_id>', methods=['GET'])
@jwt_required()
def obtener_single_paciente(paciente_id):

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    buscar_paciente = Paciente.query.filter_by(
        id=paciente_id, user_id=current_user.id).first()

    if not buscar_paciente:
        return jsonify({"msg": f"Paciente con id {paciente_id} no encontrado en la base de datos"}), 404

    return jsonify(buscar_paciente.serialize()), 200


# obtener citas de un paciente SI PERTENECE AL USUARIO
@api.route('/cita/<int:paciente_id>', methods=['GET'])
@jwt_required()
def obtener_single_cita(paciente_id):

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    paciente = Paciente.query.filter_by(
        id=paciente_id, user_id=current_user.id).first()

    if not paciente:
        return jsonify({"msg": "Paciente no encontrado"}), 404

    citas = Cita.query.filter_by(
        paciente_id=paciente_id, user_id=current_user.id).all()

    return jsonify([cita.serialize() for cita in citas]), 200

# crear paciente


@api.route('/paciente', methods=['POST'])
@jwt_required()
def crear_paciente():

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    if not current_user:
        return jsonify({"error": "Usuario no encontrado"}), 404

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
        nota=body.get('nota', ''),  # Campo opcional
        user_id=current_user.id
    )

    db.session.add(nuevo_paciente)
    db.session.commit()

    return jsonify(nuevo_paciente.serialize()), 201

# crear cita ASOSCIADA AL PACIENTE AUTENTICADO


def parse_fecha(fecha_str):
    return datetime.strptime(fecha_str, "%Y-%m-%d").date()


def parse_hora(hora_str):
    return datetime.strptime(hora_str, "%H:%M").time()


@api.route('/cita', methods=['POST'])
@jwt_required()
def crear_cita():

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    body = request.get_json()

    if not body:
        return jsonify({"error": "no se enviaron datos"}), 400

    paciente = Paciente.query.filter_by(
        id=body['paciente_id'], user_id=current_user.id).first()
    if not paciente:
        return jsonify({"error": "Paciente no encontrado o no autorizado"}), 404

    nueva_cita = Cita(
        paciente_id=body['paciente_id'],
        fecha=parse_fecha(body['fecha']),
        hora=parse_hora(body['hora']),
        modalidad=body['modalidad'],
        precio=body['precio'],
        estado_pago=body['estado_pago'],
        nota=body.get('nota', ''),
        user_id=current_user.id
    )

    db.session.add(nueva_cita)
    db.session.commit()

    return jsonify(nueva_cita.serialize()), 201

# PUT Paciente


@api.route('/paciente/<int:paciente_id>', methods=['PUT'])
@jwt_required()
def actualizar_paciente(paciente_id):

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    paciente = Paciente.query.filter_by(
        id=paciente_id, user_id=current_user.id).first()

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

    db.session.commit()  # Actualizar cambios

    return jsonify(paciente.serialize()), 200

# PUT cita SI PERTENECE AL USUARIO


@api.route('/cita/<int:id>', methods=['PUT'])
@jwt_required()
def actualizar_cita(id):

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    cita = Cita.query.filter_by(id=id, user_id=current_user.id).first()

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

    db.session.commit()  # Actualizar cambios

    return jsonify(cita.serialize()), 200

# Delete Paciente


@api.route('/paciente/<int:paciente_id>', methods=['DELETE'])
@jwt_required()
def eliminar_paciente(paciente_id):

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    eliminar = Paciente.query.filter_by(
        id=paciente_id, user_id=current_user.id).first()

    if not eliminar:
        return jsonify({"Error": "Paciente no encontrado"}), 404

    try:
        db.session.delete(eliminar)
        db.session.commit()

        return jsonify({"Mensaje": "Paciente eliminado"}), 200
    except IntegrityError:
        db.session.rollback()  # deshace la transacción
        return jsonify({
            "Error": "No se puede eliminar el paciente",
            "Mensaje": "El paciente tiene citas asociadas. Debe eliminar primero las citas"
        }), 400


@api.route('/cita/<int:id>', methods=['DELETE'])
@jwt_required()
def eliminar_cita(id):

    current_user_email = get_jwt_identity()
    current_user = User.query.filter_by(email=current_user_email).first()

    eliminar = Cita.query.filter_by(id=id, user_id=current_user.id).first()

    if not eliminar:
        return jsonify({"error": "Cita no encontrada"}), 404

    db.session.delete(eliminar)
    db.session.commit()

    return jsonify({"Mensaje": "Cita eliminada"}), 200
