import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from 'react';
import { Spaces } from "../components/Spaces";

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
        <div style={{
            backgroundColor: 'black',
            margin: 0,
            padding: 0,
            minHeight: '100vh'
        }}>
            <Navbar />

            <div classNameName="px-4 py-5 my-5 text-center">
                <img classNameName="bg-white mb-3" src="/src/front/assets/img/calendar_5276602.png" alt="logoClinicoo" style={{ width: '40px', height: 'auto' }} />
                <div classNameName="col-lg-6 mx-auto">
                    <p classNameName="lead mb-4 text-white mt-5">
                        {displayedText}
                    </p>
                    <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
                        <button type="button" classNameName="btn btn-light btn-lg px-4 gap-3">Iniciar sesión</button>
                        <button type="button" classNameName="btn btn-outline-secondary btn-lg px-4">Registrarse</button>
                    </div>
                </div>

                <Spaces />



                {/* Vistas web */}

                <div classNameName="container">
                    <div classNameName="container-fluid row row-cols-1 row-cols-md-3 mb-3 d-flex flex-colunm justify-content-evenly my-5 ">

                        <div classNameName="card border border-white" style={{ width: '18rem' }}>
                            <img src="/src/front/assets/img/vistasWeb.png" classNameName="card-img-top" alt="..." />
                        </div>
                        <div classNameName="card" style={{ width: '18rem' }}>
                            <img src="/src/front/assets/img/vistasWeb.png" classNameName="card-img-top" alt="..." />
                        </div>
                        <div classNameName="card" style={{ width: '18rem' }}>
                            <img src="/src/front/assets/img/vistasWeb.png" classNameName="card-img-top" alt="..." />
                        </div>

                    </div>
                </div>
            </div>

            <Spaces />


            {/* icon grid */}


            <div classNameName="container text-white">
                <h2 classNameName="pb-2 border-bottom text-center">Características</h2>
                <div classNameName="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center py-5 text-center w-auto h-auto">

                    <div classNameName="d-flex flex-column">
                        <div>
                            <i classNameName="fa-solid fa-swatchbook fa-2xl " ></i>
                        </div>
                        <div classNameName="col d-flex align-items-start">
                            <div>
                                <h3 classNameName="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Organiza
                                </h3>
                                <p>Reorganiza citas en segundos, incluso sobre la marcha. Olvídate de perder tiempo reescribiendo horarios.</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div classNameName="d-flex flex-column">
                        <div>
                            <i classNameName="fa-solid fa-hospital-user fa-2xl"></i>
                        </div>
                        <div classNameName="col d-flex align-items-start">
                            <div>
                                <h3 classNameName="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Crear pacientes
                                </h3>
                                <p classNameName="my-3">Registra un nuevo paciente en 15 segundos: solo nombre, teléfono y correo. Completa su ficha después si es necesario."</p>
                            </div>
                        </div>
                    </div>
                    <div classNameName="d-flex flex-column">
                        <div>
                            <i classNameName="fa-solid fa-users-viewfinder fa-2xl"></i>
                        </div>
                        <div classNameName="col d-flex align-items-start">
                            <div>
                                <h3 classNameName="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Busqueda al instante
                                </h3>
                                <p>Encuentra cualquier paciente con búsqueda en tiempo real (por nombre, teléfono o diagnóstico). Filtra por últimos atendidos, frecuentes o morosos.</p>
                            </div>
                        </div>
                    </div>
                    <div classNameName="d-flex flex-column">
                        <div>
                            <i classNameName="fa-solid fa-swatchbook fa-2xl " ></i>
                        </div>
                        <div classNameName="col d-flex align-items-start">
                            <div>
                                <h3 classNameName="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Compara
                                </h3>
                                <p>Compara semana vs semana: pacientes atendidos. Identifica tendencias con gráficos de líneas/barras.</p>
                            </div>
                        </div>
                    </div>
                    <div classNameName="d-flex flex-column">
                        <div classNameName="text-center">
                            <i classNameName="fa-solid fa-swatchbook fa-2xl " ></i>
                        </div>
                        <div classNameName="col d-flex align-items-start">
                            <div>
                                <h3 classNameName="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
                                    Organiza
                                </h3>
                                <p>Reorganiza citas en segundos, incluso sobre la marcha. Olvídate de perder tiempo reescribiendo horarios.</p>
                            </div>
                        </div>
                    </div>
                    <div classNameName="d-flex flex-column">
                        <div>
                            <i classNameName="fa-solid fa-swatchbook fa-2xl " ></i>
                        </div>
                        <div classNameName="col d-flex align-items-start">
                            <div>
                                <h3 classNameName="fw-bold mb-0 fs-4 text-body-white mt-3 mb-3">
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

            <div classNameName="container">

                <div classNameName=" pricing-header p-3 pb-md-4 mx-auto text-center ">
                    <h1 classNameName="display-4 fw-normal text-white">
                        Planes disponibles
                    </h1>
                </div>

                <div classNameName="row row-cols-1 row-cols-md-3 mb-3 text-center  d-flex justify-content-center">
                    <div classNameName="col">
                        <div classNameName="card mb-4 rounded-3 shadow-sm">
                            <div classNameName="card-header py-3 bg-dark text-white">
                                <h4 classNameName="my-0 fw-normal">
                                    Free
                                </h4>
                            </div>
                            <div classNameName="card-body">
                                <h1 classNameName="card-title pricing-card-title">
                                    $0
                                    <small classNameName="text-body-secondary fw-light">
                                        /mo
                                    </small>
                                </h1>
                                <ul classNameName="list-unstyled mt-3 mb-4">
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
                                <button type="button" classNameName="w-100 btn btn-lg btn-outline-dark">
                                    Sign up for free
                                </button>
                            </div>
                        </div>
                    </div>
                    <div classNameName="col">
                        <div classNameName="card mb-4 rounded-3 shadow-sm">
                            <div classNameName="card-header bg-dark text-white py-3">
                                <h4 classNameName="my-0 fw-normal">
                                    Pro
                                </h4>
                            </div>
                            <div classNameName="card-body">
                                <h1 classNameName="card-title pricing-card-title">
                                    $15
                                    <small classNameName="text-body-secondary fw-light">
                                        /mo
                                    </small>
                                </h1>
                                <ul classNameName="list-unstyled mt-3 mb-4">
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
                                <button type="button" classNameName="w-100 btn btn-lg btn-outline-dark">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

