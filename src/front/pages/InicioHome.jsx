import { useEffect, useState } from "react";
import { Navbar2 } from "../components/Navbar2";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Navigate, useNavigate } from "react-router-dom";

export const InicioHome = () => {
    const navigate = useNavigate();
    const { store } = useGlobalReducer();
    
    // Estados para los datos del dashboard
    const [citasHoy, setCitasHoy] = useState(0);
    const [proximaCita, setProximaCita] = useState(null);
    const [citasSemana, setCitasSemana] = useState([]);
    const [estadisticasSemana, setEstadisticasSemana] = useState({
        citasEstaSemanaTotales: 0,
        citasSemanaAnterior: 0,
        diferencia: 0
    });
    const [loading, setLoading] = useState(true);

    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const hoy = new Date();
    const fechaHoy = hoy.toISOString().split('T')[0]; // YYYY-MM-DD

    // Función para obtener el lunes de la semana actual
    const obtenerLunesSemana = (fecha) => {
        const dia = new Date(fecha);
        const diaSemana = dia.getDay();
        const diasHastaLunes = diaSemana === 0 ? -6 : 1 - diaSemana;
        dia.setDate(dia.getDate() + diasHastaLunes);
        return dia;
    };

    // Función para obtener datos de citas y pacientes
    const obtenerCitas = async () => {
        try {
            const token = localStorage.getItem('token');
            
            // Obtener citas y pacientes en paralelo
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
                const citas = await citasResponse.json();
                const pacientes = await pacientesResponse.json();
                
                // Crear un mapa de pacientes por ID para búsqueda rápida
                const pacientesMap = pacientes.reduce((acc, paciente) => {
                    acc[paciente.id] = paciente;
                    return acc;
                }, {});
                
                // Agregar información del paciente a cada cita
                const citasConPacientes = citas.map(cita => ({
                    ...cita,
                    paciente: pacientesMap[cita.paciente_id] || null
                }));
                
                procesarDatosCitas(citasConPacientes);
            }
        } catch (error) {
            console.error('Error al obtener citas:', error);
        } finally {
            setLoading(false);
        }
    };

    // Función helper para crear fecha en zona horaria local
const crearFechaLocal = (fechaString, horaString = null) => {
    const [year, month, day] = fechaString.split('-').map(Number);
    
    if (horaString) {
        const [hour, minute] = horaString.split(':').map(Number);
        return new Date(year, month - 1, day, hour, minute);
    }
    
    return new Date(year, month - 1, day);
};

// Función para procesar los datos de las citas
const procesarDatosCitas = (citas) => {
    const ahora = new Date();
    const lunesSemanaActual = obtenerLunesSemana(ahora);
    const lunesSemanaAnterior = new Date(lunesSemanaActual);
    lunesSemanaAnterior.setDate(lunesSemanaActual.getDate() - 7);

    // Filtrar citas de hoy
    const citasDeHoy = citas.filter(cita => cita.fecha === fechaHoy);
    setCitasHoy(citasDeHoy.length);

    // Encontrar próxima cita
    const citasFuturas = citas
        .filter(cita => {
            const fechaCita = crearFechaLocal(cita.fecha, cita.hora); // ✅ Usar función helper
            return fechaCita > ahora;
        })
        .sort((a, b) => {
            const fechaA = crearFechaLocal(a.fecha, a.hora); // ✅ Usar función helper
            const fechaB = crearFechaLocal(b.fecha, b.hora); // ✅ Usar función helper
            return fechaA - fechaB;
        });

    if (citasFuturas.length > 0) {
        setProximaCita(citasFuturas[0]);
    }

    // Procesar citas de la semana actual
    const citasSemanaActual = [];
    const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    
    for (let i = 0; i < 7; i++) {
        const fecha = new Date(lunesSemanaActual);
        fecha.setDate(lunesSemanaActual.getDate() + i);
        const fechaStr = fecha.toISOString().split('T')[0];
        
        const citasDelDia = citas.filter(cita => cita.fecha === fechaStr).length;
        
        citasSemanaActual.push({
            day: diasSemana[i],
            value: citasDelDia,
            label: diasSemana[i][0]
        });
    }
    
    setCitasSemana(citasSemanaActual);

    // Calcular estadísticas
    const totalSemanaActual = citasSemanaActual.reduce((total, dia) => total + dia.value, 0);
    
    const citasSemanaAnterior = citas.filter(cita => {
        const fechaCita = crearFechaLocal(cita.fecha); // Usar función helper
        const finSemanaAnterior = new Date(lunesSemanaActual);
        finSemanaAnterior.setDate(lunesSemanaActual.getDate() - 1);
        
        return fechaCita >= lunesSemanaAnterior && fechaCita <= finSemanaAnterior;
    }).length;

    setEstadisticasSemana({
        citasEstaSemanaTotales: totalSemanaActual,
        citasSemanaAnterior: citasSemanaAnterior,
        diferencia: totalSemanaActual - citasSemanaAnterior
    });
};

// Función para formatear fecha y hora de la próxima cita
const formatearProximaCita = (cita) => {
    if (!cita) return { fecha: '--', hora: '--', paciente: '--' };
    
    const fecha = crearFechaLocal(cita.fecha); // función helper
    
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short'
    });
    
    const hora = cita.hora.slice(0, 5); // HH:MM
    
    return {
        fecha: fechaFormateada,
        hora: hora,
        paciente: cita.paciente?.nombre || 'Paciente'
    };
};

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/sing-in');
        } else {
            obtenerCitas();
        }
    }, [navigate]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    const proximaCitaInfo = formatearProximaCita(proximaCita);

    return (
        <div
            style={{
                backgroundColor: 'black',
                margin: 0,
                paddingTop: '15px',
                minHeight: '100vh'
            }}
        >
            <div className="container-fluid vh-100 ps-1 ms-1 pe-3">
                <div className="row h-50 g-3">
                    {/* Navbar - Sidebar */}
                    <div className="col-12 col-md-3 col-lg-2 ps-0 ms-0">
                        <Navbar2 />
                    </div>

                    {/* Contenido Principal */}
                    <div className="col-12 col-md-6 col-lg-8 ps-5">
                        <div className="bg-dark rounded-5 h-100 p-3 p-md-4">
                            <div className="row g-0 text-white h-100">
                                {/* Header */}
                                <div className="col-12" style={{ height: '10%' }}>
                                    <h2 className="mb-1">
                                        {store.profile ? `Hola, ${store.profile.name}` : 'Hola, Invitado'}
                                    </h2>
                                    <p className="text-light">{fechaFormateada}</p>
                                </div>

                                {/* Cards de información */}
                                <div className="col-12 mt-0" style={{ height: '20%' }}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <div className="bg-white rounded-5 p-3 text-dark h-100">
                                                <small className="text-muted d-block">Hoy tienes</small>
                                                <h5 className="mb-0 fw-bold">
                                                    {citasHoy} {citasHoy === 1 ? 'cita' : 'citas'}
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <div className="bg-white rounded-5 p-3 text-dark h-100">
                                                <small className="text-muted d-block">Tu próxima cita</small>
                                                <h5 className="mb-1 fw-bold">
                                                    {proximaCitaInfo.fecha}, {proximaCitaInfo.hora}
                                                </h5>
                                                <h4 className="mb-0">{proximaCitaInfo.paciente}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gráfica */}
                                <div className="col-12 d-flex flex-column" style={{ height: '70%' }}>
                                    <div className="bg-white rounded-5 p-4 text-dark h-100 d-flex flex-column">
                                        <h6 className="mb-3 fw-bold">Citas de la semana</h6>
                                        <div className="row g-2 flex-grow-1 align-items-end">
                                            {citasSemana.map((item, index) => {
                                                const maxValue = Math.max(...citasSemana.map(d => d.value), 1);
                                                const heightPercentage = maxValue > 0 ? (item.value / maxValue) * 80 : 0;
                                                
                                                return (
                                                    <div key={index} className="col text-center h-100 d-flex align-items-end">
                                                        <div className="d-flex flex-column align-items-center justify-content-end w-100 h-100">
                                                            <small className="text-black fw-bold mb-1">{item.value}</small>
                                                            <div
                                                                className="bg-dark rounded-5 w-100 mb-2"
                                                                style={{ 
                                                                    height: `${heightPercentage}%`, 
                                                                    minHeight: item.value > 0 ? '12px' : '4px',
                                                                    opacity: item.value > 0 ? 1 : 0.3
                                                                }}
                                                            ></div>
                                                            <small className="text-muted fw-bold">{item.label}</small>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel lateral - Resumen */}
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="h-50 d-flex flex-column">
                            <h2 className="text-center text-white mb-3 fs-4 fs-md-3 pt-3 pb-3">
                                Resumen de la semana
                            </h2>

                            {/* Contenido del resumen */}
                            <div className="row g-3 flex-grow-1">
                                <div className="col-12">
                                    <div className="bg-white rounded-5 p-3 text-dark h-75 text-center">
                                        <small className="text-muted d-block">Citas esta semana</small>
                                        <h4 className="mb-0 fw-bold text-info">
                                            {estadisticasSemana.citasEstaSemanaTotales}
                                        </h4>
                                        <small className={`text-end ${estadisticasSemana.diferencia >= 0 ? 'text-success' : 'text-danger'}`}>
                                            {estadisticasSemana.diferencia >= 0 ? '+' : ''}{estadisticasSemana.diferencia}
                                        </small>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="bg-white rounded-5 p-3 text-dark h-75 text-center">
                                        <small className="text-muted d-block">Semana anterior</small>
                                        <h4 className="mb-0 fw-bold text-warning">
                                            {estadisticasSemana.citasSemanaAnterior}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};