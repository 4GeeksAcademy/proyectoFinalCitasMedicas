
import React from "react"

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

                            <div style={{textAlign: "center", fontSize:"28px", fontFamily:"cursive"}}> <strong>Bienvenido/a</strong></div>
                            <div style={{textAlign: "center", fontSize:"28px"}}> <strong>Inciar Sesión</strong></div>
                        </div>
                        
                        <div className="row d-flex justify-content-center mt-5">
                            <div className=" pe-3 text-white col-8">
                                <div className="input-group flex-nowrap">
                                    <span className="col-4 input-group-text bg-dark text-white" id="addon-wrapping">Email</span>
                                    <input type="text" className="form-control" placeholder="example@mail.com"
                                        aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                            </div>

                        </div>
                        <div className="row d-flex justify-content-center mt-4">
                            <div className="mb-3 text-white col-8 mb-1">
                                <div className="input-group flex-nowrap">
                                    <span className="col-4 p-1 input-group-text bg-dark text-white"
                                        id="addon-wrapping">Password</span>
                                    <input type="password" className="form-control" placeholder="Password" aria-label="Username"
                                        aria-describedby="addon-wrapping" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center text-black col-9 mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                            <label className="form-check-label ps-3" htmlFor="checkDefault">Recordar usuario</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 pb-3 d-flex justify-content-center">
                <button type="button" className="btn btn-light rounded-5" style={{width:"350px"}}>Sing In</button>
            </div>

            <div className="pb-4">
                <div className="d-flex justify-content-center text-white col-12 mb-2 fs-5">
                <p className="me-2">¿Olvidaste tu contraseña?</p>
                <p><a href="#" style={{color:"#7bacffff"}}>Da click aquí</a></p>
                </div>
                <div className="d-flex justify-content-center text-white col-12 mb-2 fs-5">
                <p className="me-2">¿Eres nuevo/a?</p>
                <p><a href="/register" style={{color:"#7bacffff"}}>Registrate aquí</a></p>
                </div>
            </div>
        </div>
    </div>


    )
}

export default SingIn;