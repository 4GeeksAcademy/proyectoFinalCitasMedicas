import { Navbar2 } from "../components/Navbar2"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const InicioHome = () => {

    const { store } = useGlobalReducer()

    const fecha = new Date()
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

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
                <div className="row h-50 g-3 ">
                    {/* Navbar - Sidebar */}
                    <div className="col-12 col-md-3 col-lg-2 ps-0 ms-0">
                        <Navbar2 />
                    </div>

                    {/* Contenido Principal */}
                    <div className="col-12 col-md-6 col-lg-8 ps-5 ">
                        <div className="bg-dark rounded-5 h-100 p-3 p-md-4">
                            <div className="row g-0 text-white h-100">
                                {/* Header */}
                                <div className="col-12" style={{ height: '10%' }}>
                                    <h2 className="mb-1">
                                        {store.profile ? `Hola, ${store.profile.email}` : 'Hola, Invitado'}
                                    </h2>
                                    <p className="text-light">{fechaFormateada}</p>
                                </div>

                                {/* Cards de información */}
                                <div className="col-12 mt-0" style={{ height: '20%' }}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <div className="bg-white rounded-5 p-3 text-dark h-100">
                                                <small className="text-muted d-block">Hoy tienes</small>
                                                <h5 className="mb-0 fw-bold">1 cita</h5>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <div className="bg-white rounded-5 p-3 text-dark h-100">
                                                <small className="text-muted d-block">Tu próxima cita</small>
                                                <h5 className="mb-1 fw-bold">24 abr, 9:00am</h5>
                                                <h4 className="mb-0">Samuel</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Gráfica */}
                                <div className="col-12 d-flex flex-column" style={{ height: '70%' }}>
                                    <div className="bg-white rounded-5 p-4 text-dark h-100 d-flex flex-column">
                                        <h6 className="mb-3 fw-bold">Citas de la semana</h6>
                                        <div className="row g-2 flex-grow-1 align-items-end">
                                            {[
                                                { day: 'Lun', value: 5, label: 'L' },
                                                { day: 'Mar', value: 8, label: 'M' },
                                                { day: 'Mié', value: 3, label: 'X' },
                                                { day: 'Jue', value: 6, label: 'J' },
                                                { day: 'Vie', value: 9, label: 'V' },
                                                { day: 'Sáb', value: 2, label: 'S' },
                                                { day: 'Dom', value: 1, label: 'D' }
                                            ].map((item, index) => (
                                                <div key={index} className="col text-center h-100 d-flex align-items-end">
                                                    <div className="d-flex flex-column align-items-center justify-content-end w-100 h-100">
                                                        <small className="text-black fw-bold mb-1">{item.value}</small>
                                                        <div
                                                            className="bg-dark rounded-5 w-100 mb-2"
                                                            style={{ height: `${(item.value / 10) * 80}%`, minHeight: '8px' }}
                                                        ></div>
                                                        <small className="text-muted fw-bold">{item.label}</small>
                                                    </div>
                                                </div>
                                            ))}
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
                                        <h4 className="mb-0 fw-bold text-info">36</h4>
                                        <small className="text-end">+9</small>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="bg-white rounded-5 p-3 text-dark h-75 text-center">
                                        <small className="text-muted d-block">Semana anterior</small>
                                        <h4 className="mb-0 fw-bold text-warning">27</h4>
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