import { Link } from "react-router-dom";

export const Navbar2 = () => {
    return (
        
        <div className="d-flex flex-column flex-shrink-0 p-3  text-white bg-dark rounded-5 pt-5" style={{ width: "280px", height: "95vh" }}>
            <Link to="/Landing-n1" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap"></use>
                </svg>
                <span className="fs-4">Clinicoo</span>
            </Link>
            <hr />
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="" className="nav-link" aria-current="page">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#home"></use>
                            </svg>
                            <i className="fa-solid fa-house"></i> Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#speedometer2"></use>
                            </svg>
                            <i className="fa-solid fa-hospital-user"></i> Pacientes
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#table"></use>
                            </svg>
                            <i className="fa-regular fa-clock"></i> Citas
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                            <i className="fa-regular fa-calendar-check me-2"></i>Calendario
                        </Link>
                    </li>
                    <span className="fs-5 mt-3">Opciones</span>
                    <li>
                        <Link to="" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                            <i className="fa-solid fa-user-check me-2"></i>Agregar cita
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                            <i className="fa-solid fa-user-plus me-2"></i>Nuevo paciente
                        </Link>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}