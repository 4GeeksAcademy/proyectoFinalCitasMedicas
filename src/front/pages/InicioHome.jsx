import { Navbar2 } from "../components/Navbar2"

export const InicioHome = () => {

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
                paddingTop: '20px',
                minHeight: '100vh'
            }}
        >
            {/* Módulo usuario */}
            <div className="container-fluid vh-100">
                <div className="row h-100 g-3">
                    {/* Navbar - Sidebar */}
                    <div className="col-12 col-md-3 col-lg-2">
                        <Navbar2 />
                    </div> 

                    {/* Contenido Principal */}
                    <div className="col-12 col-md-6 col-lg-8">  
                        <div className="bg-dark rounded-4 h-100 p-3 p-md-4">
                            <div className="row g-0 text-white h-100">
                                {/* Header */}
                                <div className="col-12">
                                    <h2 className="mb-1">Hola, usuario</h2>
                                    <p className="mb-4 text-light">{fechaFormateada}</p>
                                </div>
                                
                                {/* Cards de información */}
                                <div className="col-12">
                                    <div className="row g-3 mb-4">
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <div className="bg-white rounded-4 p-3 text-dark h-100">
                                                <small className="text-muted d-block">Hoy tienes</small>
                                                <h5 className="mb-0 fw-bold">1 cita</h5>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <div className="bg-white rounded-4 p-3 text-dark h-100">
                                                <small className="text-muted d-block">Tu próxima cita</small>
                                                <h5 className="mb-1 fw-bold">24 abr, 9:00am</h5>
                                                <h4 className="mb-0">Samuel</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel lateral - Resumen */}
                    <div className="col-12 col-md-3 col-lg-2">
                        <div className="h-100 d-flex flex-column">
                            <h2 className="text-center text-white mb-3 fs-4 fs-md-3">
                                Resumen de la semana
                            </h2>
                            
                            {/* Contenido del resumen */}
                            <div className="row g-3 flex-grow-1">
                                <div className="col-12">
                                    <div className="bg-white rounded-5 p-3 text-dark h-100 text-center">
                                        <small className="text-muted d-block">Citas esta semana</small>
                                        <h4 className="mb-0 fw-bold text-info">24</h4>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="bg-white rounded-5 p-3 text-dark h-100 text-center">
                                        <small className="text-muted d-block">Semana anterior</small>
                                        <h4 className="mb-0 fw-bold text-warning">15</h4>
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