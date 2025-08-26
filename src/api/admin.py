import os
from flask_admin import Admin
from .models import db, User, Paciente, Cita
from flask_admin.contrib.sqla import ModelView

# ✅ Añade esta clase personalizada para Cita
class CitaModelView(ModelView):
    # Campos que se mostrarán en el formulario de creación
    form_columns = ['paciente', 'fecha', 'hora', 'modalidad', 'precio', 'estado_pago', 'nota']
    
    # Campos que se mostrarán en la lista
    column_list = ['id', 'paciente', 'fecha', 'hora', 'modalidad', 'estado_pago']
    
    # ✅ Configurar el dropdown para seleccionar paciente
    form_args = {
        'paciente': {
            'query_factory': lambda: Paciente.query.all(),
            'get_label': 'nombre',  # Mostrar el nombre en el dropdown
            'allow_blank': False    # No permitir valor vacío
        }
    }
    
    # ✅ Opcional: Formatear cómo se muestran los datos en la lista
    column_labels = {
        'paciente': 'Paciente',
        'fecha': 'Fecha',
        'hora': 'Hora', 
        'modalidad': 'Modalidad',
        'estado_pago': 'Estado Pago'
    }

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Paciente, db.session))
    # ✅ Cambia esta línea para usar la vista personalizada
    admin.add_view(CitaModelView(Cita, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))