import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar2 = () => {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            dispatch({ type: "set_profile", payload: null });
            navigate("/sing-in")
        } catch (error) {
            console.error("Error al cerrar sesión: ", error)
        }
    };

    return (

        <div className="d-flex flex-column flex-shrink-0 text-white bg-dark rounded-5 pt-5" style={{ width: "280px", height: "95vh" }}>
            <Link to="/landing-n1" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                <div className="ps-5">
                    <img className="mb-1 mx-auto" src="/src/front/assets/img/logo-white.png" alt="logomedAgend" style={{ width: '120px', height: 'auto' }} />
                </div>
            </Link>
            <hr />
            <div className="btn-group-vertical " role="group" aria-label="Vertical button group">
                <ul className="nav nav-pills flex-column mb-auto ">
                    <li className="nav-item ">
                        <Link to="/inicio-home" className="logout-btn " aria-current="page">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#home"></use>
                            </svg>
                            <i className="fa-solid fa-house"></i> Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/pacientes" className="logout-btn">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#speedometer2"></use>
                            </svg>
                            <i className="fa-solid fa-hospital-user"></i> Pacientes
                        </Link>
                    </li>
                    <li>
                        <Link to="/citas" className="logout-btn">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#table"></use>
                            </svg>
                            <i className="fa-regular fa-clock"></i> Citas
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendario" className="logout-btn">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                            <i className="fa-regular fa-calendar-check me-2"></i>Calendario
                        </Link>
                    </li>
                    <li className="my-3">
                        <span className="fs-6 ms-3 ">Opciones</span>
                    </li>
                    <li >
                        <Link to="/agregar-cita" className="logout-btn">
                            <svg className="bi me-2 " width="16" height="16">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                            <i className="fa-solid fa-user-check me-2"></i>Agregar cita
                        </Link>
                    </li>
                    <li>
                        <Link to="/agregar-paciente" className="logout-btn">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                            <i className="fa-solid fa-user-plus me-2"></i>Nuevo paciente
                        </Link>
                    </li>
                    <li>
                        {store.profile && (
                            
                                <div className="logout-btn" style={{ cursor: 'pointer' }} onClick={handleLogout}>
                                    <svg className="bi me-2" width="16" height="16">
                                        <use xlinkHref="#people-circle"></use>
                                    </svg>
                                    <i className="fa-solid fa-right-from-bracket me-2"></i>Log out
                                </div>
                            
                        )}
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}