import { useState, useEffect } from 'react';
import { Navbar2 } from "../components/Navbar2"

export const Finanzas = () => {
    const [tabActivo, setTabActivo] = useState('dia');
    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        const cargarCitas = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cita`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setCitas(data);
                }
            } catch (error) {
                console.error('Error cargando citas:', error);
            } finally {
                setLoading(false);
            }
        };

        cargarCitas();
    }, []);

    const citasHoy = obtenerCitasHoy(citas);
    const citasSemana = obtenerCitasEstaSemana(citas);
    const citasMes = obtenerCitasEsteMes(citas);


    function contarModalidades(citasArray) {
        const virtual = citasArray.filter(cita => cita.modalidad === 'Virtual').length;
        const presencial = citasArray.filter(cita => cita.modalidad === 'Presencial').length;
        return { virtual, presencial, total: virtual + presencial };
    }

    function obtenerCitasHoy(citas) {
        const hoy = new Date().toLocaleDateString('en-CA');
        return citas.filter(cita => cita.fecha === hoy);
    }

    function obtenerCitasEstaSemana(citas) {
        const hoy = new Date();
        const diaSemana = hoy.getDay(); // 0 (domingo) a 6 (sábado)

        // Generar todos los días de la semana
        const diasSemana = [];
        for (let i = -diaSemana; i <= (6 - diaSemana); i++) {
            const fecha = new Date(hoy);
            fecha.setDate(hoy.getDate() + i);
            diasSemana.push(fecha.toLocaleDateString('en-CA')); //formato YYYY-MM-DD
        }

        return citas.filter(cita => diasSemana.includes(cita.fecha));
    }

    function obtenerCitasEsteMes(citas) {
        const hoy = new Date();
        const mesActual = hoy.getMonth() + 1; // Mes actual (1-12)
        const añoActual = hoy.getFullYear();

        return citas.filter(cita => {
            const [año, mes] = cita.fecha.split('-').map(Number);
            return año === añoActual && mes === mesActual;
        });
    }
    //Search
    const citasFiltradas = () => {
        let citasBase = [];
        switch (tabActivo) {
            case 'dia': citasBase = citasHoy; break;
            case 'semana': citasBase = citasSemana; break;
            case 'mes': citasBase = citasMes; break;
            default: citasBase = [];
        }

        return citasBase.filter(cita =>
            cita.paciente_nombre.toLowerCase().includes(busqueda.toLowerCase())
        );
    };

    // Calcular totales
    const totalHoy = citasHoy.reduce((total, cita) => total + parseInt(cita.precio), 0);
    const totalSemana = citasSemana.reduce((total, cita) => total + parseInt(cita.precio), 0);
    const totalMes = citasMes.reduce((total, cita) => total + parseInt(cita.precio), 0);

    // Función para renderizar el contenido
    const renderContenido = () => {
        if (loading) {
            return <div className="text-white text-center">Cargando...</div>;
        }

        let datosFiltrados = citasFiltradas();
        let titulo = '';
        let total = 0;
        let modalidades = { virtual: 0, presencial: 0, total: 0 };

        switch (tabActivo) {
            case 'dia':
                titulo = 'Citas de Hoy';
                total = totalHoy;
                modalidades = contarModalidades(citasHoy);
                break;
            case 'semana':
                titulo = 'Citas de esta Semana';
                total = totalSemana;
                modalidades = contarModalidades(citasSemana)
                break;
            case 'mes':
                titulo = 'Citas de este Mes';
                total = totalMes;
                modalidades = contarModalidades(citasMes);
                break;
        }

        return (
            <div>
                <h4 className="text-white"><strong>{titulo}</strong></h4>

                <div className="row text-white mb-3">
                    <div className="col-md-6">
                        <strong>Total: ${total.toLocaleString()}</strong> | 
                        <span className="ms-2">{datosFiltrados.length} citas</span>
                        {busqueda && <span className="ms-2 text-info">(Filtradas)</span>}
                    </div>
                    <div className="col-md-6 text-end pe-4">
                        <span className="me-2"><strong> Modalidad de citas: </strong></span>
                        <span className="badge bg-white text-black me-2 rounded-5">
                            <i className="fa-solid fa-video me-2"></i>Virtual: {modalidades.virtual}
                        </span>
                        <span className="badge bg-white text-black rounded-5">
                            <i className="fa-solid fa-location-dot"></i> Presencial: {modalidades.presencial}
                        </span>
                    </div>
                </div>

                <div className="p-3 mt-2">
                    <ul className="list-group list-group-flush">
                        {datosFiltrados.map(cita => (
                            <li key={cita.id} className="list-group-item bg-white text-black rounded-5 mb-2 p-3">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="flex-grow-1">
                                        <strong>{cita.paciente_nombre}</strong>
                                        <br />
                                        <small>
                                            {cita.fecha} a las {cita.hora} |
                                            <span className={`badge ${cita.modalidad === 'Virtual' ? 'bg-primary' : 'bg-secondary'} ms-2 rounded-5`}>
                                                {cita.modalidad}
                                            </span>
                                        </small>
                                        <br />
                                        <small>{cita.nota}</small>
                                    </div>
                                    <div className="text-end ms-3">
                                        <span className="badge bg-light text-dark rounded-pill fs-6">
                                            ${parseInt(cita.precio).toLocaleString()}
                                        </span>
                                        <br />
                                        <span className={`badge ${cita.estado_pago === 'Cancelado' ? 'bg-success' : 'bg-black'} rounded-pill mt-1`}>
                                            {cita.estado_pago}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}

                        {datosFiltrados.length === 0 && (
                            <li className="list-group-item bg-dark text-white rounded-5 p-3 text-center">
                                No hay citas para este período
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div style={{ backgroundColor: 'black', margin: 0, paddingTop: '15px', minHeight: '100vh' }}>
            <div className="d-flex">
                <Navbar2 />
                <div className="col bg-dark rounded-5 mx-3">
                    <div className="text-white">
                        <h1 className="text-white ms-4 mt-3">Reporte Financiero</h1>
                        <h5 className="ms-4 mt-3 p-2 d-inline-flex  badge bg-secondary text-white  rounded-5">Análisis de ingresos</h5>
                    </div>

                    {/* Resumen rápido */}
                    <div className="row mx-3 mt-4">
                        <div className="col-md-4">
                            <div className="card bg-white text-black rounded-5">
                                <div className="card-body text-center">
                                    <h5><strong>Hoy</strong></h5>
                                    <h3>${totalHoy.toLocaleString()}</h3>
                                    <small className='bg-secondary rounded-5 px-2 opacity-75'>{citasHoy.length} citas</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-white text-black rounded-5">
                                <div className="card-body text-center">
                                    <h5><strong>Esta Semana</strong></h5>
                                    <h3>${totalSemana.toLocaleString()}</h3>
                                    <small className='bg-secondary rounded-5 px-2 opacity-75'>{citasSemana.length}  citas</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-white text-black rounded-5">
                                <div className="card-body text-center">
                                    <h5><strong>Este Mes</strong></h5>
                                    <h3>${totalMes.toLocaleString()}</h3>
                                    <small className='bg-secondary rounded-5 px-2 opacity-75'>{citasMes.length} citas</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container flex-grow-1 overflow-auto mt-4 ">
                        {/* Tabs */}
                        <div className=''>

                            <ul className="nav nav-tabs mt-5 ms-2 d-flex" role="tablist">
                                <li className="nav-item me-2" role="presentation">
                                    <button
                                        className={`nav-link btn rounded-5 ${tabActivo === 'dia' ? 'btn-light' : 'btn-outline-light'} ${tabActivo === 'dia' ? 'bg-white' : 'bg-dark'}`}
                                        onClick={() => setTabActivo('dia')}
                                        style={{ color: tabActivo === 'dia' ? "black" : "white" }}
                                    >
                                        <strong>Día</strong>
                                    </button>
                                </li>
                                <li className="nav-item me-2" role="presentation">
                                    <button
                                        className={`nav-link btn rounded-5 ${tabActivo === 'semana' ? 'btn-light' : 'btn-outline-light'} ${tabActivo === 'semana' ? 'bg-white' : 'bg-dark'}`}
                                        onClick={() => setTabActivo('semana')}
                                        style={{ color: tabActivo === 'semana' ? "black" : "white" }}
                                    >
                                        <strong>Semana</strong>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link btn rounded-5 mb-1 ${tabActivo === 'mes' ? 'btn-light' : 'btn-outline-light'} ${tabActivo === 'mes' ? 'bg-white' : 'bg-dark'}`}
                                        onClick={() => setTabActivo('mes')}
                                        style={{ color: tabActivo === 'mes' ? "black" : "white" }}
                                    >
                                        <strong>Mes</strong>
                                    </button>
                                </li>

                                <li className=" nav-item ms-auto me-3">
                                    <div className='d-flex'>
                                        <input
                                            className="form-control mr-sm-2 rounded-5"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={busqueda}
                                            onChange={(e) => { setBusqueda(e.target.value) }}
                                            // style={{ height: '38px' }}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Contenido */}
                        <div className="tab-content mt-5">
                            {renderContenido()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};