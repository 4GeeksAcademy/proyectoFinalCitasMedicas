import { Navbar2 } from "../components/Navbar2"

export const AgregarCita = () => {
    return (
        <div
            style={{
                backgroundColor: 'black',
                margin: 0,
                paddingTop: '15px',
                minHeight: '100vh'
            }}
        >
            <div className="container-fluid vh-100 p-0 pe-3">
                <div className="row h-50 g-3 ">
                    {/* Navbar - Sidebar */}
                    <div className="col-12 col-md-3 col-lg-2 ps-0 ms-0">
                        <Navbar2 />
                    </div>
                </div>
            </div>
            {/* Contenido Principal */}
            <div className="col-12 col-md-6 col-lg-8 ps-5">
                <div className="bg-dark rounded-5 h-100 p-3 p-md-4">
                    <div className="row g-0 text-white h-100">
                        {/* Header */}
                        <div className="col-12" style={{ height: '10%' }}>
                            <h2 className="mb-1">Agregar cita</h2>
                            <p className="text-light"></p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}