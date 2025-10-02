from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, ForeignKey, Date, Time 
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import date, time

db = SQLAlchemy()

class User(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] =mapped_column(String(80), nullable=True)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    phone: Mapped[str] = mapped_column(String(20), unique=True, nullable=True)
    password: Mapped[str] = mapped_column(String(300), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)

    #Relaciones uno-a-muchos
    pacientes= relationship("Paciente", backref="user")
    citas= relationship("Cita", backref="user")


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone
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
    nota: Mapped[str] = mapped_column(String(400), nullable=True)

    user_id: Mapped[int] = mapped_column(ForeignKey('user.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "telefono": self.telefono,
            "email": self.email,
            "direccion": self.direccion,
            "ciudad": self.ciudad,
            "estado": self.estado,
            "nota": self.nota,
            "user_id": self.user_id
        }
    
class Cita(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    paciente_id: Mapped[int] = mapped_column(ForeignKey('paciente.id'), nullable=False)
    fecha: Mapped[date] = mapped_column(Date, nullable=False)
    hora: Mapped[time] = mapped_column(Time, nullable=False)
    modalidad: Mapped[str] = mapped_column(String(40), nullable=False)
    precio: Mapped[str] = mapped_column(String(20), nullable=False)
    estado_pago: Mapped[str] = mapped_column(String(20), nullable=False)
    nota: Mapped[str] = mapped_column(String(400), nullable=True)

    user_id: Mapped[int] = mapped_column(ForeignKey('user.id'), nullable=False)

    paciente: Mapped["Paciente"] = relationship("Paciente", backref="citas")

    def serialize(self):
        return {
            "id": self.id,
            "paciente_id": self.paciente_id,
            "paciente_nombre": self.paciente.nombre,
            "fecha": self.fecha.isoformat(),
            "hora": self.hora.strftime("%H:%M"),
            "modalidad": self.modalidad,
            "precio": self.precio,
            "estado_pago": self.estado_pago,
            "nota": self.nota,
            "user_id": self.user_id
        }