import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const LandingN1 = () => {
    return (
        <div style={{
            backgroundColor: 'black',
            margin: 0,
            padding: 0,
            minHeight: '100vh'
        }}>
            <Navbar />

            <div className="px-4 py-5 my-5 text-center">
                <img className="bg-white mb-3" src="/src/front/assets/img/calendar_5276602.png" alt="logoClinicoo" style={{ width: '40px', height: 'auto' }} />
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 text-white">
                        Elimina el caos de la gestión médica, permitiéndote enfocarte en lo que realmente importa: tus pacientes.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-light btn-lg px-4 gap-3">Iniciar sesión</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Registrarse</button>
                    </div>
                </div>

                <div className="container">
                    <div className="container-fluid d-flex flex-colunm justify-content-evenly my-5 ">
                        <div className="card border border-white" style={{ width: '18rem' }}>
                            <img src="/src/front/assets/img/vistasWeb.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="/src/front/assets/img/vistasWeb.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="/src/front/assets/img/vistasWeb.png" className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider py-3 my-5 position-relative">
                <div
                    className="divider-fill bg-dark opacity-10"
                    style={{ height: "25px" }}
                ></div>
                <div
                    className="divider-shadow"
                    style={{
                        height: "3px",
                        background: "linear-gradient(rgba(0,0,0,0.1), transparent)",
                        marginTop: "-2px"
                    }}
                ></div>
            </div>


            {/* icon grid */}


            <div className="container text-white">
                <h2 className="pb-2 border-bottom text-center">Icon grid</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center py-5 text-center w-auto h-auto">

                    <div className="d-flex flex-column">
                        <div>
                            <i className="fa-solid fa-swatchbook fa-2xl " ></i>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h3 className="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Organiza
                                </h3>
                                <p>Reorganiza citas en segundos, incluso sobre la marcha. Olvídate de perder tiempo reescribiendo horarios.</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div>
                            <i className="fa-solid fa-hospital-user fa-2xl"></i>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h3 className="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Crear pacientes
                                </h3>
                                <p className="my-3">Registra un nuevo paciente en 15 segundos: solo nombre, teléfono y correo. Completa su ficha después si es necesario."</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div>
                            <i className="fa-solid fa-users-viewfinder fa-2xl"></i>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h3 className="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Busqueda al instante
                                </h3>
                                <p>Encuentra cualquier paciente con búsqueda en tiempo real (por nombre, teléfono o diagnóstico). Filtra por últimos atendidos, frecuentes o morosos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div>
                            <i className="fa-solid fa-swatchbook fa-2xl " ></i>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h3 className="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Compara
                                </h3>
                                <p>Compara semana vs semana: pacientes atendidos. Identifica tendencias con gráficos de líneas/barras.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="text-center">
                            <i className="fa-solid fa-swatchbook fa-2xl " ></i>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h3 className="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Organiza
                                </h3>
                                <p>Reorganiza citas en segundos, incluso sobre la marcha. Olvídate de perder tiempo reescribiendo horarios.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <div>
                            <i className="fa-solid fa-swatchbook fa-2xl " ></i>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div>
                                <h3 className="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Organiza
                                </h3>
                                <p>Reorganiza citas en segundos, incluso sobre la marcha. Olvídate de perder tiempo reescribiendo horarios.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="divider py-3 my-5 position-relative">
                <div
                    className="divider-fill bg-dark opacity-10"
                    style={{ height: "25px" }}
                ></div>
                <div
                    className="divider-shadow"
                    style={{
                        height: "3px",
                        background: "linear-gradient(rgba(0,0,0,0.1), transparent)",
                        marginTop: "-2px"
                    }}
                ></div>
            </div>

            {/* Planes */}

            <div className="container opacity-75 bg-black">        

                <div className=" pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal text-white">
                        Pricing
                    </h1>
                    <p className="fs-5 text-white">
                        Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.
                    </p>
                </div>

                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center"> 
                    <div className="col"> 
                        <div className="card mb-4 rounded-3 shadow-sm"> 
                            <div className="card-header py-3"> 
                                <h4 className="my-0 fw-normal">
                                    Free
                                </h4> 
                            </div> 
                            <div className="card-body"> 
                                <h1 className="card-title pricing-card-title">
                                    $0
                                    <small className="text-body-secondary fw-light">
                                        /mo
                                    </small>
                                </h1> 
                                <ul className="list-unstyled mt-3 mb-4"> 
                                    <li>
                                        10 users included
                                    </li> 
                                    <li>
                                        2 GB of storage
                                    </li> 
                                    <li>
                                        Email support
                                    </li> 
                                    <li>
                                        Help center access
                                    </li> 
                                </ul> 
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                    Sign up for free
                                </button> 
                            </div> 
                        </div> 
                    </div> 
                    <div className="col"> 
                        <div className="card mb-4 rounded-3 shadow-sm"> 
                            <div className="card-header py-3"> 
                                <h4 className="my-0 fw-normal">
                                    Pro
                                </h4> 
                            </div> 
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    $15
                                    <small className="text-body-secondary fw-light">
                                        /mo
                                    </small>
                                </h1> 
                                <ul className="list-unstyled mt-3 mb-4"> 
                                    <li>
                                        20 users included
                                    </li> 
                                    <li>
                                        10 GB of storage
                                    </li> 
                                    <li>
                                        Priority email support
                                    </li> 
                                    <li>
                                        Help center access
                                    </li> 
                                </ul> 
                                <button type="button" className="w-100 btn btn-lg btn-primary">
                                    Get started
                                </button> 
                            </div> 
                        </div> 
                    </div> 
                    <div className="col"> 
                        <div className="card mb-4 rounded-3 shadow-sm border-primary"> 
                            <div className="card-header py-3 text-bg-primary border-primary"> 
                                <h4 className="my-0 fw-normal">
                                    Enterprise
                                </h4> 
                            </div> 
                            <div className="card-body"> 
                                <h1 className="card-title pricing-card-title">
                                    $29
                                        <small className="text-body-secondary fw-light">
                                            /mo
                                        </small>
                                </h1> 
                                <ul className="list-unstyled mt-3 mb-4"> 
                                    <li>
                                        30 users included
                                        </li> 
                                    <li>
                                        15 GB of storage
                                    </li> 
                                    <li>
                                        Phone and email support
                                    </li> 
                                    <li>
                                        Help center access
                                    </li> 
                                </ul> 
                                <button type="button" className="w-100 btn btn-lg btn-primary">
                                    Contact us
                                </button> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
                


            </div>

        </div>
    )
}