import { Navbar2 } from "../components/Navbar2"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export const EditarPaciente = () => {

    const [pacienteData, setPacienteData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        direccion: '',
        ciudad: '',
        estado: '',
        nota: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();

      async function cargarPaciente(pacienteId) {
        try {
            
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paciente/${pacienteId}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const paciente = await response.json();
            setPacienteData({
                nombre: paciente.nombre || '',
                telefono: paciente.telefono || '',
                email: paciente.email || '',
                direccion: paciente.direccion || '',
                ciudad: paciente.ciudad || '',
                estado: paciente.estado || '',
                nota: paciente.nota || ''
            });
            
        } catch (error) {
            console.error('Error cargando paciente:', error);
        }
    }

    const handleInputChange = (campo, valor) => {
        setPacienteData(prevData => ({
            ...prevData,
            [campo]: valor
        }));
    };

    // console.log('Paciente Data:', pacienteData);

    const editarPacienteButton = async () => {

        if(!pacienteData.nombre || !pacienteData.telefono || 
            !pacienteData.email || !pacienteData.direccion || 
            !pacienteData.ciudad || !pacienteData.estado) {
                alert('Por favor, completa los campos obligatorios.')
                return;
            }    
        try{
            const resultado = await actualizarPaciente(pacienteData)
            alert('Paciente actualizado con éxito')
            navigate('/pacientes')
            
        } catch(error){
            alert(`Error: ${error.message}`)
        }
    }
    


    async function actualizarPaciente(pacienteData){
        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paciente/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pacienteData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const nuevoPaciente = await response.json()
            return nuevoPaciente;
            

        } catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
    }

useEffect(() => {
    if (id) {
    cargarPaciente(id);
    }
}, [id])

    return (
        <div
            style={{
                backgroundColor: 'black',
                margin: 0,
                paddingTop: '15px',
                minHeight: '100vh'
            }}
        >
            <div className="d-flex">
                <div className=" ">
                    {/* Navbar - Sidebar */}
                    <Navbar2 />
                </div>
                {/* Contenido Principal */}
                <div className="col-12 col-md-6 col-lg-8 ps-5">
                    <div className="bg-dark rounded-5 h-100 p-3 p-md-4 
                    ">
                        <div className="row g-0 text-white h-50">
                            {/* Header */}
                            <div className="col-12" >
                                <h2 className="mb-1">Editar paciente</h2>
                                <p className="text-light"></p>
                            </div>
                            
                            {/* Campos Info*/}
                            <div className="d-flex flex-column align-items-start ">
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Nombre</small>
                                        <input 
                                            type="text" 
                                            className="form-control rounded-5" 
                                            placeholder="Ingresa el nombre completo"
                                            value={pacienteData.nombre}
                                            onChange={(e) => handleInputChange('nombre', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Teléfono</small>
                                        <input 
                                            type="text" 
                                            className="form-control rounded-5" 
                                            placeholder="3506598569" 
                                            value={pacienteData.telefono}
                                            onChange={(e) => handleInputChange('telefono', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Email</small>
                                        <input 
                                            type="email" 
                                            className="form-control rounded-5" 
                                            placeholder="test@example.com" 
                                            value={pacienteData.email} 
                                            onChange={(e) => handleInputChange('email', e.target.value)}   
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Dirección</small>
                                        <input
                                            type="text" 
                                            className="form-control rounded-5" 
                                            placeholder="cra 123 #44-15" 
                                            value={pacienteData.direccion}
                                            onChange={(e) => handleInputChange('direccion', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <small className="text-muted d-block">Ciudad</small>
                                        <input 
                                        type="text" 
                                        className="form-control rounded-5" 
                                        placeholder="Bogotá D.C" 
                                        value={pacienteData.ciudad}
                                        onChange={(e) => handleInputChange('ciudad', e.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <div className="form-floating ">
                                            <select 
                                                className="form-select rounded-5" 
                                                id="floatingSelect" 
                                                aria-label="Floating label select example"
                                                value={pacienteData.estado}
                                                onChange={(e)=> handleInputChange('estado', e.target.value)}
                                            >   
                                                <option value=""></option>
                                                <option value="activo">Activo</option>
                                                <option value="de_alta">De alta</option>
                                                <option value="inactivo">Inactivo</option>
                                            </select>
                                            <label htmlFor="floatingSelect">Estado del paciente</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-1" >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        <div className="form-floating">
                                            <textarea 
                                                className="form-control rounded-5" 
                                                placeholder="Leave a comment here" 
                                                id="floatingTextarea2" 
                                                style={{ height: '50px' }}
                                                value={pacienteData.nota}
                                                onChange={(e) => handleInputChange('nota', e.target.value)}
                                            >

                                            </textarea>
                                            <label htmlFor="floatingTextarea2">Nota</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end w-100">
                                    <button 
                                        type="button" 
                                        className=" btn btn-outline-light btn-lg px-4 rounded-5 mt-3 me-3"
                                        onClick={editarPacienteButton}
                                    >
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}