import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from 'react';
import { Spaces } from "../components/Spaces";
import { Footer } from "../components/Footer";

export const LandingN1 = () => {


    const fullText = "Elimina el caos de la gestión médica, permitiéndote enfocarte en lo que realmente importa: TUS PACIENTES.";
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 40); // Velocidad de escritura (50ms por carácter)

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);



    return (
        <div 
            style={{
                backgroundColor: 'black',
                margin: 0,
                padding: 0,
                minHeight: '100vh'
            }}
            >
            <Navbar />
            
            <div className="container px-4 py-5 my-5 text-center">
                 <div className="rounded-5 bg-dark py-5">   
                    <img className="bg-white mb-3" src="/src/front/assets/img/calendar_5276602.png" alt="logoClinicoo" style={{ width: '40px', height: 'auto' }} />
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 text-white mt-5">
                            {displayedText}
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
                            <button type="button" className="btn btn-light btn-lg px-4 gap-3">Iniciar sesión</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Registrarse</button>
                        </div>
                    </div>
                </div>
                    <Spaces />
           


                {/* Vistas web */}

                <div className="container">
                    <div className="container-fluid row row-cols-1 row-cols-md-3 mb-3 d-flex flex-colunm justify-content-evenly my-5 ">
                        
                        <div className="card border border-white" style={{ width: '58rem' }}>
                            <img src="/src/front/assets/img/vistasWeb.png" className="card-img-top" alt="..." />
                        </div>
                        
                    </div>
                </div>
            </div>

           <Spaces />


            {/* icon grid */}


            <div id="caracteristicas" className=" mx-4 py-5 text-white  bg-dark rounded-5">
                <h2  className="pb-2 border-bottom text-center">Características</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center pt-5 text-center w-auto h-auto">

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

            <Spaces />

            {/* Planes */}

            <div className="container">

                <div  className=" pricing-header p-3 pb-md-4 mx-auto text-center ">
                    <h1 id="planes" className="display-4 fw-normal text-white">
                        Planes disponibles
                    </h1>
                </div>

                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center  d-flex justify-content-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3 bg-dark text-white">
                                <h4 className="my-0 fw-normal">
                                    Clinicoo Pro
                                </h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    $10
                                    <small className="text-body-secondary fw-light">
                                        /mo
                                    </small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>
                                        <i className="fa-regular fa-calendar-check me-2"></i>Calendario con tus citas organizadas
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-hospital-user me-2"></i> Perfiles de pacientes
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-user-plus me-2"></i>Creación de pacientes 
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-user-check me-2"></i>Creación y edición de citas
                                    </li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-dark">
                                    Empezar gratis
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header bg-dark text-white py-3">
                                <h4 className="my-0 fw-normal">
                                    Clinicoo hospitales
                                </h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    $10
                                    <small className="text-body-secondary fw-light">
                                        /mo
                                    </small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>
                                        <i className="fa-solid fa-user-group me-2"></i>Múltiples usuarios 
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-book-medical me-2"></i>Agenda compartida
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-coins me-2"></i>Reporte financiero
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-user-shield me-2"></i>Control de permisos
                                    </li>
                                </ul>
                                <button type="button" disabled className="w-100 btn btn-lg btn-outline-dark">
                                    Próximamente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>

        </div>
    )
}

