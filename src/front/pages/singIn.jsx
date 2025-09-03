
import React from "react"
import { Link } from "react-router-dom";

const SingIn = () => {
    return (
        <div 
                style={{
                backgroundColor: 'black',
                margin: 0,
                padding: "150px",
                minHeight: '100vh'
            }}
        >
    <div className="container bg-dark rounded-5" style={{marginTop: "20px",}}>
        <div className="row">
                <div className="row">
                    <div className="container col-5 bg-white rounded-5 mt-5 pb-2 ">
                        <div className="text-black d-flex justify-content-center flex-column pt-4 pb-4">
                            <div className="d-flex justify-content-center">
                                <img className="my-3 mx-3" src="/src/front/assets/img/logo-black.png" alt="logomedAgend" style={{ width: '50px', height: 'auto', }} />
                            </div>
                            <div className="text-center"> 
                                <h1><strong>Bienvenido</strong></h1>
                                <h4 className="pt-1">Log in</h4>
                            </div>
                        </div>
                        
                        <div className="row d-flex justify-content-center ">
                            <div className=" pe-3 text-white col-8 ">
                                <div className="input-group flex-nowrap">
                                    <span className="col-4 input-group-text bg-dark text-white rounded-start-pill" id="addon-wrapping">Email</span>
                                    <input type="text" className="form-control rounded-end-pill" placeholder="example@mail.com"
                                        aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mt-4">
                            <div className="mb-3 text-white col-8 mb-1">
                                <div className="input-group flex-nowrap">
                                    <span className="col-4 p-1 ps-3 input-group-text bg-dark text-white rounded-start-pill"
                                        id="addon-wrapping">Password</span>
                                    <input type="password" className="form-control rounded-end-pill" placeholder="Password" aria-label="Username"
                                        aria-describedby="addon-wrapping" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column  text-black my-4">
                            <div className="d flex justify-content-center">
                                <input className="form-check-input border-black ms-3" type="checkbox" value="" id="checkDefault"  />
                                <label className="form-check-label ps-3" htmlFor="checkDefault">Recordar usuario</label>
                            </div>
                            <button type="button" className="btn btn-outline-dark rounded-5 mt-4" >Sing In</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 pb-3 d-flex justify-content-center">
            </div>

            <div className="pb-4">
                <div className="d-flex justify-content-center text-white col-12 mb-2 fs-5 ">
                    <p className="me-2 ">¿Olvidaste tu contraseña?</p>
                    <Link to="" className="text-decoration-none text-black">
                        <p className="bg-white rounded-5 px-2">Da click aquí</p>
                    </Link>
                </div>
                <div className="d-flex justify-content-center text-white col-12 mb-2 fs-5">
                    <p className="me-2 ">¿Eres nuevo?</p>
                    <Link to="/register" className="text-decoration-none text-black">
                        <p className="bg-white rounded-5 px-2">Registrate aquí</p>
                    </Link>
                </div>
               
            </div>
        </div>
    </div>


    )
}

export default SingIn;