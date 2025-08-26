from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

db = SQLAlchemy()

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Paciente(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(100), nullable=False)
    telefono: Mapped[str] = mapped_column(String(15), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)
    direccion: Mapped[str] = mapped_column(String(50), nullable=False)
    ciudad: Mapped[str] = mapped_column(String(40), nullable=False)
    estado: Mapped[str] = mapped_column(String(40), nullable=False)
    nota: Mapped[str] = mapped_column(String(400), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "telefono": self.telefono,
            "email": self.email,
            "direccion": self.direccion,
            "ciudad": self.ciudad,
            "estado": self.estado,
            "nota": self.nota
        }
    
class Cita(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    paciente_id: Mapped[int] = mapped_column(db.ForeignKey('paciente.id'), nullable=False)
    fecha: Mapped[str] = mapped_column(String(20), nullable=False)
    hora: Mapped[str] = mapped_column(String(20), nullable=False)
    modalidad: Mapped[str] = mapped_column(String(40), nullable=False)
    precio: Mapped[str] = mapped_column(String(20), nullable=False)
    estado_pago: Mapped[str] = mapped_column(String(20), nullable=False)
    nota: Mapped[str] = mapped_column(String(400), nullable=False)

    paciente: Mapped["Paciente"] = relationship("Paciente", backref="citas")

    def serialize(self):
        return {
            "id": self.id,
            "paciente_id": self.paciente_id,
            "fecha": self.fecha,
            "hora": self.hora,
            "modalidad": self.modalidad,
            "precio": self.precio,
            "estado_pago": self.estado_pago,
            "nota": self.nota
        }