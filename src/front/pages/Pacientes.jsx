import { useEffect, useState } from "react"
import { Navbar2 } from "../components/Navbar2"
import { Link, useNavigate } from "react-router-dom";
import { func } from "prop-types";


export const Pacientes = () => {

    const fecha = new Date()
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const [citas, setCitas] = useState([])
    const [pacientes, setPacientes] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [ordenamiento, setOrdenamiento] = useState("")
    const navigate = useNavigate();



    // fetch get citas
    async function obtenerCitas() {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                Navigate('/sing-in');
                return;
            }

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cita`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })

            if (!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`)
            }

            const data = await response.json();
            setCitas(data);
            return (data);



        } catch (error) {
            console.error(`Error fetching data: `, error);
            throw error;
        }
    }
    // fetch get pacientes
    async function obtenerPacientes() {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                Navigate('/sing-in');
                return;
            }

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paciente`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`)
            }
            const data = await response.json();
            setPacientes(data);
            return data;


        } catch (error) {
            console.error(`Error fetching data: `, error);
            throw error;
        }
    }


    // fetch eliminar paciente
    async function eliminarPaciente(pacienteId) {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                Navigate('/sing-in');
                return;
            }

            const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este paciente?')
            if (!confirmacion) {
                return
            }
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paciente/${pacienteId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            });
            if (!response.ok) {
                const errorData = await response.json()
                alert(errorData.Mensaje || errorData || 'Error al eliminar el paciente')
            }

            const data = await response.json();
            setPacientes(pacientesActuales => pacientesActuales.filter(paciente => paciente.id !== pacienteId));
            alert('Paciente eliminado con éxito')

        } catch (error) {
            console.error(`Error eliminando: `, error);
        }
    }

    // FILTROS

    // buscar pacientes
    const pacientesFiltrados = pacientes.filter(paciente =>
        paciente.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    // Ordenar por nombre

    const pacientesOrdenados = [...pacientesFiltrados].sort((a, b) => {
        if (ordenamiento === "1") {
            if (a.nombre < b.nombre) return -1;
            if (a.nombre > b.nombre) return 1;
            return 0;
        } else if (ordenamiento === "2") {
            if (a.nombre > b.nombre) return -1;
            if (a.nombre < b.nombre) return 1;
            return 0;
        }
        return 0;
    });

    // contar estados de pacientes
    const contarTotal = pacientes.length;

    const contarActivos = pacientes.filter(paciente =>
        paciente.estado === 'Activo' || paciente.estado === 'activo').length;

    const contarDeAlta = pacientes.filter(paciente =>
        paciente.estado === 'De_alta' || paciente.estado === 'de_alta').length;

    const contarInactivos = pacientes.filter(paciente =>
        paciente.estado === 'Inactivo' || paciente.estado === 'inactivo').length;

    // color estado del paciente
    const getEstadoIcon = (estado) => {
        switch (estado.toLowerCase()) {
            case 'activo':
                return <i className="fa-solid fa-circle-check text-black me-2"></i>;
            case 'inactivo':
                return <i className="fa-solid fa-circle-xmark text-black me-2"></i>;
            case 'de_alta':
                return <i className="fa-solid fa-circle-minus text-black me-2"></i>;
            default:
                return <i className="fa-solid fa-circle text-black me-2"></i>;
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/sing-in');
            return;
        }
        obtenerCitas();
        obtenerPacientes();
    }, [])



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
                <Navbar2 />
                <div className="col-12 col-md-6 col-lg-8 ps-5">
                    <div className="bg-dark rounded-5 h-100 p-3 p-md-4 ">
                        <div className="row g-0 text-white h-25 ">
                            <div className=" d-flex  justify-content-between">
                                <h1 className="ms-2">Pacientes</h1>
                                <div className="d-flex">
                                    <div className="form-inline pe-2 d-flex">
                                        <input
                                            className="form-control mr-sm-2 rounded-5"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={busqueda}
                                            onChange={(e) => { setBusqueda(e.target.value) }}
                                            style={{ height: '38px' }}

                                        />
                                    </div>
                                    <div>
                                        <Link to="/agregar-paciente">
                                            <button type="button" className="btn btn-outline-light rounded-5">
                                                <i className="fa-solid fa-user-plus me-2"></i>Agregar paciente
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <p className="text-light">{fechaFormateada}</p>

                            {/* Estados de pacientes */}

                            <div className="d-flex justify-content-between text-start">

                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Total</h4>
                                    <p className="text-dark ms-3"><strong>{contarTotal}</strong></p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Activos</h4>
                                    <p className="text-dark ms-3"><strong>{contarActivos}</strong></p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">De alta</h4>
                                    <p className="text-dark ms-3"><strong>{contarDeAlta}</strong></p>
                                </div>
                                <div className="bg-white rounded-5 w-25 mx-2 pt-3">
                                    <h4 className="text-dark ms-3">Inactivos</h4>
                                    <p className="text-dark ms-3"><strong>{contarInactivos}</strong></p>
                                </div>
                            </div>


                            {/* Filtros */}
                            <div className="d-flex justify-content-around my-3 h-50">
                                <div className="bg-white rounded-5 p-3 text-dark">
                                    <div className="form-floating ">
                                        <select
                                            className="form-select rounded-5"
                                            id="floatingSelect"
                                            aria-label="Floating label select example"
                                            value={ordenamiento}
                                            onChange={(e) => setOrdenamiento(e.target.value)}
                                        >
                                            <option value="">Sin ordenar</option>
                                            <option value="1">Ascendente (A-Z)</option>
                                            <option value="2">Descendente (Z-A)</option>
                                        </select>
                                        <label htmlFor="floatingSelect">por nombre</label>
                                    </div>
                                </div>
                            </div>

                            {/* lista pacientes */}
                            <div className="d-flex flex-column mx-auto justify-content-start" style={{ maxWidth: "750px", maxHeight: "500px", overflowY: "auto" }}>
                                <div className="col-12 px-3 " >
                                    <div className="bg-white rounded-5 p-3 text-dark h-100">
                                        {pacientesFiltrados.length === 0 && busqueda && (
                                            <div className="text-center py-4">
                                                <p className="text-muted mb-2">
                                                    <i className="fa-solid fa-magnifying-glass me-2"></i>
                                                    No se encontraron pacientes para "{busqueda}"
                                                </p>
                                                <small className="text-muted">Intenta con otro término de búsqueda</small>
                                            </div>
                                        )}
                                        {pacientesFiltrados.length === 0 && !busqueda && citas.length === 0 && (
                                            <div className="text-center py-5">
                                                <i className="fa-regular fa-calendar-xmark fs-1 text-muted mb-3"></i>
                                                <h5 className="text-muted">No hay pacientes registrados</h5>
                                                <p className="text-muted">Agrega tu primer paciente para comenzar</p>
                                            </div>
                                        )}
                                        {pacientesOrdenados.map((paciente) => (

                                            <div key={paciente.id} className="mt-2  border-bottom d-flex justify-content-between">
                                                <div>
                                                    <p value={paciente.id} className="mb-2 ms-2"><strong>{paciente.nombre}</strong></p>
                                                    <div className="d-flex  text-muted d-block ms-2">
                                                        <small>{getEstadoIcon(paciente.estado)}{paciente.estado}</small>
                                                        <small><i className="fa-solid fa-mobile-retro mx-2 mb-2"></i>{paciente.telefono}</small>
                                                    </div>
                                                </div>
                                                <div>
                                                    {/*Button modal*/}
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-outline-dark rounded-5 border-0" 
                                                        data-bs-toggle="modal" 
                                                        data-bs-target={`#modalNota-${paciente.id}`}
                                                        
                                                    >
                                                        <i className="fa-solid fa-circle-info fa-2x"></i>
                                                    </button>

                                                    {/* <!-- Modal --> */}
                                                    <div className="modal fade"
                                                        id={`modalNota-${paciente.id}`}
                                                        data-bs-backdrop="static"
                                                        data-bs-keyboard="false"
                                                        tabIndex="-1"
                                                        aria-labelledby={`modalLabel-${paciente.id}`}
                                                        
                                                    >
                                                        <div className="modal-dialog modal-dialog-centered modal-lg h-100 position-fixed end-0 top-0 m-0"
                                                            style={{ width: '600px', maxWidth: '600px' }}>
                                                            <div className="modal-content rounded-5 d-flex flex-column" style={{ height: '100%', borderRadius: '0' }}>
                                                                <div className="modal-header rounded-5">
                                                                    <h1 className="modal-title fs-5" id={`modalLabel-${paciente.id}`}><strong>{paciente.nombre}</strong> </h1>

                                                                    <button
                                                                        type="button"
                                                                        className="btn-close rounded-5"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"
                                                                        
                                                                    >

                                                                    </button>
                                                                </div>

                                                                {/* EMPIEZA ACA */}
                                                                <div className="container flex-grow-1 overflow-auto">
                                                                    <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
                                                                        <li className="nav-item" role="presentation">
                                                                            <button
                                                                                className="nav-link active"
                                                                                id="home-tab"
                                                                                data-bs-toggle="tab"
                                                                                data-bs-target="#home"
                                                                                type="button"
                                                                                role="tab"
                                                                                style={{ color: "black" }}

                                                                            >
                                                                                <strong>Datos</strong>
                                                                            </button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button
                                                                                className="nav-link"
                                                                                id="profile-tab"
                                                                                data-bs-toggle="tab"
                                                                                data-bs-target="#profile"
                                                                                type="button" role="tab"
                                                                                style={{ color: "black" }}

                                                                            >
                                                                                <strong>Citas</strong>
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="tab-content mt-5" id="myTabContent">
                                                                        <div className="tab-pane fade show active" id="home" role="tabpanel">
                                                                            <h4><strong>Datos del paciente</strong></h4>
                                                                            <div className="p-3 mt-2">
                                                                                <ul className="list-group list-group-flush">
                                                                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                                                                        <span >Estado del paciente: </span>
                                                                                        <button type="button" className="btn btn-light rounded-5 btn-sm align-self-start">
                                                                                            {getEstadoIcon(paciente.estado)}{paciente.estado}
                                                                                        </button>
                                                                                    </li>
                                                                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                                                                        <span >Email</span>
                                                                                        <span><i className="fa-solid fa-envelope me-2"></i>{paciente.email}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                                                                        <span >Contacto: </span>
                                                                                        <span><i className="fa-solid fa-mobile-retro me-2"></i>{paciente.telefono}</span>
                                                                                    </li>
                                                                                    <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                                                                                        <span>Dirección: </span>
                                                                                        <span><i className="fa-solid fa-location-dot me-2"></i>{paciente.direccion} <i className="fa-solid fa-tree-city mx-2"></i>{paciente.ciudad}</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="tab-pane fade" id="profile" role="tabpanel">
                                                                            <h3 className="d-flex justify-content-center"><strong>Motivo de consulta</strong></h3>
                                                                            <div className="row g-1 mb-4 mt-2">
                                                                                <div className="d-flex justify-content-center">
                                                                                </div>
                                                                                <div className="p-3 bg-dark text-white rounded-5 text-start mt-2 h-100">
                                                                                    <p><strong>Nota</strong></p>
                                                                                    <div> <strong><p >
                                                                                        {paciente.nota || 'Sin notas adicionales'}</p></strong>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* TERMINA ACA */}
                                                                <div className="modal-footer rounded-5 d-flex align-items-end">
                                                                    <Link to={`/editar-paciente/${paciente.id}`}>
                                                                        <button type="button" className="btn btn-dark rounded-5" data-bs-dismiss="modal">Editar</button>
                                                                    </Link>
                                                                    <button type="button"
                                                                        className="btn btn-outline-danger rounded-5"
                                                                        data-bs-dismiss="modal"
                                                                        onClick={() => eliminarPaciente(paciente.id)}
                                                                    >
                                                                        <i className="fa-solid fa-trash me-2"></i>Eliminar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}