import { useEffect, useState } from "react"
import { Navbar2 } from "../components/Navbar2"
import { Link, useParams, useNavigate} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


export const EditarCita = () => {

    const [citaData, setCitaData] = useState ({
        paciente_id: '',
        fecha: '',
        hora: '',
        modalidad: '',
        precio: '',
        estado_pago: '',
        nota: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    const [paciente, setPaciente] = useState([])




//traer citas
    async function cargarCitas(citaId) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cita/${citaId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            
             
        
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const cita = await response.json();
            
            setCitaData({
                paciente_id: cita.paciente_id || '',
                fecha: cita.fecha || '',
                hora: cita.hora || '',
                modalidad: cita.modalidad || '',
                precio: cita.precio || '',
                estado_pago: cita.estado_pago || '',
                nota: cita.nota || ''
            });
            
        } catch (error) {
            console.error('Error cargando paciente:', error);
        }
    }

    
    
    // button para crear cita
    const actualizarCitaButton = async () => {
        if(!citaData.paciente_id || !citaData.fecha || 
            !citaData.hora || !citaData.modalidad || 
            !citaData.precio || !citaData.estado_pago) {
            toast.error('Por favor, completa todos los campos.')

            return;
            }
            try{
                const resultado = await actualizarCita(citaData);
                toast.success('Cita editada con exito')
                navigate('/citas')
                return resultado
            } catch(error) {
                console.error()
                toast.error(`Error: ${error.message}`)
            }
            
        }
        
        // fetch para actulizar cita
        async function actualizarCita(citaData) {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cita/${id}`, {
                    method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(citaData)
            });

            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            
            const nuevaCita = await response.json();
            return nuevaCita;
            
        } catch(error) {
            console.error(`Error fetching data: `, error);
            throw error;
        }
    }
    
    // Fetchs para obtener pacientes
    async function obtenerPacientes(){
        try{
            const token = localStorage.getItem('token');

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paciente`, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            
            if (!response.ok){
                throw new Error(`HTTP Error! status: ${response.status}`)
            }
            const data = await response.json();
            setPaciente(data);
            return data;
            
            
        } catch(error){
            console.error(`Error fetching data: `, error);
            throw error;
        }
    }
    
    const handleInputChange = (campo, valor) => {
        setCitaData(prevData => ({
            ...prevData,
            [campo]: valor
        }))
    }

    useEffect(() => {
        obtenerPacientes();
        if (id){
            cargarCitas(id)
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
                <div className="col-12 col-md-6 col-lg-8 ps-5 ">
                    <div className="bg-dark rounded-5 h-100 p-3 p-md-4">
                        <div className="row g-0 text-white h-50">
                            {/* Header */}
                            <div className="d-flex justify-content-between">
                                <div className="col-6" >
                                    <h2 className="mb-1">Editar cita</h2>
                                    <p className="text-light"></p>                                
                                </div>
                                <div>
                                    <Link to="/agregar-paciente">
                                        <button type="button" className="btn btn-outline-light rounded-5">
                                            <i className="fa-solid fa-user-plus me-2"></i>Agregar paciente
                                        </button>
                                    </Link>
                                </div>
                            </div>    
                             {/* Campos Info*/}
                        <div className="d-flex flex-column align-items-start">       
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <div className="form-floating ">
                                        <select 
                                            className="form-select rounded-5" 
                                            id="floatingSelect" 
                                            aria-label="Floating label select example"
                                            value={citaData.paciente_id}
                                            onChange={(e) => handleInputChange('paciente_id', e.target.value)}
                                            > 
                                            <option value="">Selecione un paciente</option>
                                              {/* map para renderizar pacientes */}
                                              {paciente.map((paciente) => (
                                                  <option key={paciente.id} value={paciente.id}>
                                                    {paciente.nombre}
                                                  </option>

                                              ))}
                                        </select>
                                        <label htmlFor="floatingSelect">Selecione un paciente</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="d-flex justify-content-between align-items-center bg-white rounded-5 p-3 text-dark h-100">
                                    <h5 className="ps-2 my-2 fw-bold">Seleccionar fecha</h5>
                                    <div >
                                        <input 
                                            type="date"
                                            className="form-control rounded-5"
                                            id="fecha"
                                            value={citaData.fecha}
                                            onChange={(e) => handleInputChange('fecha', e.target.value)}
                                        >   
                                            {/* <i className="fa-solid fa-calendar-days fa-2xl me-2 text-center"></i> */}
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="d-flex justify-content-between align-items-center bg-white rounded-5 p-3 text-dark h-100">
                                    <h5 className="ps-2 my-2 fw-bold">Horario</h5>
                                    <div>
                                        <input 
                                            type="time"
                                            className="form-control rounded-5"
                                            id="hora"
                                            value={citaData.hora}
                                            onChange={(e)=> handleInputChange('hora', e.target.value)}
                                            
                                        >
                                            {/* <i className="fa-solid fa-clock fa-2xl me-2"></i> */}
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <div className="form-floating ">
                                        <select 
                                            className="form-select rounded-5" 
                                            id="floatingSelect"
                                            placeholder="Lugar"
                                            value={citaData.modalidad}
                                            onChange={(e) => handleInputChange('modalidad', e.target.value)}
                                        >   
                                            <option value="">¿Presencial o virtual?</option>
                                            <option value="Presencial">Presencial</option>
                                            <option value="Virtual">Virtual</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Modalidad</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100">
                                    <small className="text-muted d-block ps-2">Precio cita</small>
                                    <input 
                                        type="text" 
                                        className="form-control rounded-5" 
                                        placeholder="150 USD" 
                                        aria-label="Amount (to the nearest dollar)"
                                        value={citaData.precio}
                                        onChange= {(e) => handleInputChange('precio', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 mt-1" >    
                                <div className="bg-white rounded-5 p-3 text-dark h-100"style={{height: '50px'}}>
                                    <div className="form-floating ">
                                        <select 
                                        className="form-select rounded-5" 
                                        id="floatingSelect" 
                                        aria-label="Floating label select example"
                                        value={citaData.estado_pago}
                                        onChange={(e) => handleInputChange('estado_pago', e.target.value)}
                                        >   
                                            <option value="">¿Ya fue cancelado?</option>
                                            <option value="Cancelado">Cancelado</option>
                                            <option value="Pendiente">Pendiente</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Estado del pago</label>
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
                                            style={{height: '50px'}}
                                            value={citaData.nota}
                                            onChange={(e) => handleInputChange('nota', e.target.value)}
                                        >
                                        </textarea>
                                        <label htmlFor="floatingTextarea2">Nota</label>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end w-100">
                                <Link to="">    
                                    <button 
                                    type="button" 
                                    className=" btn btn-outline-light btn-lg rounded-5 px-4 mt-3 me-3"
                                    onClick={actualizarCitaButton}
                                    >
                                        Editar
                                    </button>
                                </Link> 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}