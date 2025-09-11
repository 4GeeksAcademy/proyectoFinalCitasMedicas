import React, { useState, useEffect } from 'react';
import { Navbar2 } from "../components/Navbar2";

const Calendario = () => {
    const [mesActual, setMesActual] = useState(new Date().getMonth());
    const [añoActual, setAñoActual] = useState(new Date().getFullYear());
    const [citas, setCitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [diaSeleccionado, setDiaSeleccionado] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    // Función para obtener fecha local sin problemas de zona horaria
    const obtenerFechaLocal = (year, month, day) => {
        return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };

    // Cargar citas de la API
    useEffect(() => {
        const cargarCitas = async () => {
            try {
                const token = localStorage.getItem('token');
                const [citasResponse, pacientesResponse] = await Promise.all([
                    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cita`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }),
                    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paciente`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    })
                ]);

                if (citasResponse.ok && pacientesResponse.ok) {
                    const citasData = await citasResponse.json();
                    const pacientesData = await pacientesResponse.json();
                    
                    // Crear un mapa de pacientes por ID
                    const pacientesMap = pacientesData.reduce((acc, paciente) => {
                        acc[paciente.id] = paciente;
                        return acc;
                    }, {});
                    
                    // Agregar información del paciente a cada cita
                    const citasConPacientes = citasData.map(cita => ({
                        ...cita,
                        paciente: pacientesMap[cita.paciente_id] || null
                    }));
                    
                    setCitas(citasConPacientes);
                }
            } catch (error) {
                console.error('Error cargando citas:', error);
            } finally {
                setLoading(false);
            }
        };

        cargarCitas();
    }, []);

    // Obtener días del mes actual
    const obtenerDiasDelMes = () => {
        const primerDia = new Date(añoActual, mesActual, 1);
        const ultimoDia = new Date(añoActual, mesActual + 1, 0);
        const diasEnMes = ultimoDia.getDate();
        const diaSemanaInicio = primerDia.getDay();

        // Días del mes anterior para llenar el inicio
        const diasMesAnterior = [];
        const ultimoDiaMesAnterior = new Date(añoActual, mesActual, 0).getDate();
        for (let i = diaSemanaInicio - 1; i >= 0; i--) {
            diasMesAnterior.push({
                dia: ultimoDiaMesAnterior - i,
                esOtroMes: true,
                fecha: obtenerFechaLocal(
                    mesActual === 0 ? añoActual - 1 : añoActual,
                    mesActual === 0 ? 11 : mesActual - 1,
                    ultimoDiaMesAnterior - i
                )
            });
        }

        // Días del mes actual
        const diasMesActual = [];
        for (let dia = 1; dia <= diasEnMes; dia++) {
            diasMesActual.push({
                dia: dia,
                esOtroMes: false,
                fecha: obtenerFechaLocal(añoActual, mesActual, dia)
            });
        }

        // Días del próximo mes para completar la cuadrícula
        const diasMesProximo = [];
        const totalCasillas = 42; // 6 semanas × 7 días
        const diasRestantes = totalCasillas - diasMesAnterior.length - diasMesActual.length;
        for (let dia = 1; dia <= diasRestantes; dia++) {
            diasMesProximo.push({
                dia: dia,
                esOtroMes: true,
                fecha: obtenerFechaLocal(
                    mesActual === 11 ? añoActual + 1 : añoActual,
                    mesActual === 11 ? 0 : mesActual + 1,
                    dia
                )
            });
        }

        return [...diasMesAnterior, ...diasMesActual, ...diasMesProximo];
    };

    // Obtener citas para una fecha específica
    const obtenerCitasDelDia = (fecha) => {
        return citas.filter(cita => cita.fecha === fecha);
    };

    // Manejar clic en un día
    const manejarClicDia = (diaInfo) => {
        setDiaSeleccionado(diaInfo);
        setMostrarModal(true);
    };

    // Formatear hora
    const formatearHora = (hora) => {
        return hora.slice(0, 5); // HH:MM
    };

    const dias = obtenerDiasDelMes();
    const fechaHoy = obtenerFechaLocal(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

    return (
        <div className="bg-black" style={{ margin: 0, paddingTop: '15px', minHeight: '100vh' }}>
            <div className="d-flex">
                <Navbar2 />
                <div className="col bg-dark rounded-5 mx-3 p-4">
                    
                    {/* Header del calendario */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-white mb-0">Calendario de Citas</h2>
                        <div className="d-flex gap-2">
                            <select 
                                className="form-select rounded-5" 
                                value={mesActual}
                                onChange={(e) => setMesActual(parseInt(e.target.value))}
                            >
                                {meses.map((mes, index) => (
                                    <option key={index} value={index}>{mes}</option>
                                ))}
                            </select>
                            <select 
                                className="form-select rounded-5"
                                value={añoActual}
                                onChange={(e) => setAñoActual(parseInt(e.target.value))}
                            >
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                                <option value={2026}>2026</option>
                            </select>
                        </div>
                    </div>

                    {/* Días de la semana */}
                    <div className="row g-2 mb-3">
                        {diasSemana.map(dia => (
                            <div key={dia} className="col">
                                <div className="bg-white rounded-5 text-center py-2">
                                    <strong className="text-muted">{dia}</strong>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Grid del calendario */}
                    {loading ? (
                        <div className="text-center text-white py-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridTemplateRows: 'repeat(6, 1fr)', gap: '8px', height: '500px' }}>
                            {dias.map((diaInfo, index) => {
                                const citasDelDia = obtenerCitasDelDia(diaInfo.fecha);
                                const esHoy = diaInfo.fecha === fechaHoy;
                                
                                return (
                                    <div key={index}>
                                        <div
                                            onClick={() => manejarClicDia(diaInfo)}
                                            className={`bg-white rounded-5 p-2 h-100 cursor-pointer ${esHoy ? 'border border-info border-2' : ''} ${diaInfo.esOtroMes ? 'opacity-50' : ''}`}
                                            role="button"
                                            style={{ 
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                minHeight: '100px',
                                                maxHeight: '80px',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <div className={`fw-bold ${esHoy ? 'text-primary' : 'text-dark'} mb-1`}>
                                                {diaInfo.dia}
                                            </div>
                                            
                                            {/* Mostrar hasta 2 citas para evitar overflow */}
                                            {citasDelDia.slice(0, 2).map((cita, citaIndex) => (
                                                <div key={citaIndex} className={`badge rounded-5 d-block text-truncate mb-1 ${cita.estado_pago === 'Cancelado' ? 'bg-success' : 'bg-warning'}`} style={{ fontSize: '9px' }}>
                                                    {formatearHora(cita.hora)} {(cita.paciente?.nombre || cita.paciente_nombre).split(' ')[0]}
                                                </div>
                                            ))}
                                            
                                            {/* Indicador de más citas */}
                                            {citasDelDia.length > 2 && (
                                                <div className="text-muted text-center" style={{ fontSize: '9px' }}>
                                                    +{citasDelDia.length - 2} más
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Modal lateral */}
            {mostrarModal && diaSeleccionado && (
                <div 
                    className="modal fade show" 
                    style={{ display: 'block' }}
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="modalLabel"
                    aria-describedby="modalDesc"
                    role="dialog"
                >
                    <div 
                        className="modal-dialog modal-dialog-centered modal-lg h-100 position-fixed end-0 top-0 m-0"
                        style={{ width: '600px', maxWidth: '600px' }}
                    >
                        <div className="modal-content rounded-5 d-flex flex-column" style={{ height: '100%', borderRadius: '0' }}>
                            <div className="modal-header rounded-5">
                                <h1 className="modal-title fs-5" id="modalLabel">
                                    <strong>Citas del {diaSeleccionado.dia} de {meses[mesActual]}</strong>
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close rounded-5"
                                    aria-label="Close"
                                    onClick={() => setMostrarModal(false)}
                                >
                                </button>
                            </div>

                            {/* Contenido del modal */}
                            <div className="container flex-grow-1 overflow-auto" id="modalDesc">
                                <div className="mt-3">
                                    {obtenerCitasDelDia(diaSeleccionado.fecha).length === 0 ? (
                                        <div className="text-center py-5">
                                            <i className="fa-regular fa-calendar-xmark fs-1 text-muted mb-3"></i>
                                            <h5 className="text-muted">No hay citas programadas</h5>
                                            <p className="text-muted">para este día</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="row mb-3">
                                                <div className="col-md-4">
                                                    <div className="bg-light rounded-5 p-2 text-center">
                                                        <small className="text-muted">Total Citas</small>
                                                        <div className="fw-bold text-primary">{obtenerCitasDelDia(diaSeleccionado.fecha).length}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="bg-light rounded-5 p-2 text-center">
                                                        <small className="text-muted">Canceladas</small>
                                                        <div className="fw-bold text-success">{obtenerCitasDelDia(diaSeleccionado.fecha).filter(c => c.estado_pago === 'Cancelado').length}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="bg-light rounded-5 p-2 text-center">
                                                        <small className="text-muted">Ingresos</small>
                                                        <div className="fw-bold text-dark small">${obtenerCitasDelDia(diaSeleccionado.fecha).reduce((total, cita) => total + parseInt(cita.precio), 0).toLocaleString()}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="p-2">
                                                <ul className="list-group list-group-flush">
                                                    {obtenerCitasDelDia(diaSeleccionado.fecha)
                                                        .sort((a, b) => a.hora.localeCompare(b.hora))
                                                        .map(cita => (
                                                            <li key={cita.id} className="list-group-item bg-dark text-white rounded-5 mb-2 p-2">
                                                                <div className="row align-items-center">
                                                                    <div className="col-8">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="me-3">
                                                                                <i className="fa-solid fa-clock text-primary me-1"></i>
                                                                                <small className="fw-bold">{formatearHora(cita.hora)}</small>
                                                                            </div>
                                                                            <div>
                                                                                <div className="fw-bold mb-1" style={{ fontSize: '14px' }}>
                                                                                    {cita.paciente?.nombre || cita.paciente_nombre}
                                                                                </div>
                                                                                <div className="d-flex gap-2">
                                                                                    <span className={`badge rounded-5 ${cita.modalidad === 'Virtual' ? 'bg-info' : 'bg-secondary'}`} style={{ fontSize: '10px' }}>
                                                                                        <i className={`fa-solid ${cita.modalidad === 'Virtual' ? 'fa-video' : 'fa-location-dot'} me-1`}></i>
                                                                                        {cita.modalidad}
                                                                                    </span>
                                                                                    <span className={`badge rounded-5 ${cita.estado_pago === 'Cancelado' ? 'bg-success' : 'bg-secondary text-dark'}`} style={{ fontSize: '10px' }}>
                                                                                        {cita.estado_pago}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-4 text-end">
                                                                        <div className="badge bg-light text-dark rounded-5 mb-1">
                                                                            <i className="fa-solid fa-dollar-sign me-1"></i>
                                                                            {parseInt(cita.precio).toLocaleString()}
                                                                        </div>
                                                                        {cita.paciente?.telefono && (
                                                                            <div>
                                                                                <small className="text-muted">
                                                                                    <i className="fa-solid fa-phone me-1"></i>
                                                                                    {cita.paciente.telefono}
                                                                                </small>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                
                                                                {cita.nota && (
                                                                    <div className="mt-2 p-2 bg-secondary rounded-5">
                                                                        <small>
                                                                            <i className="fa-solid fa-note-sticky me-2"></i>
                                                                            <strong>Nota:</strong> {cita.nota}
                                                                        </small>
                                                                    </div>
                                                                )}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="modal-footer rounded-5">
                                <button 
                                    type="button" 
                                    className="btn btn-dark rounded-5"
                                    onClick={() => setMostrarModal(false)}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay para el modal */}
            {mostrarModal && (
                <div 
                    className="modal-backdrop fade show"
                    onClick={() => setMostrarModal(false)}
                />
            )}
        </div>
    );
};

export default Calendario;