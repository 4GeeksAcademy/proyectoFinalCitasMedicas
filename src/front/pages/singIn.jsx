
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
                        <div className="Logo text-black d-flex justify-content-center pt-4 pb-4">
                            <h1>Logo</h1>
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
                <button type="button" className="btn btn-light btn-lg w-50 rounded-5">Sing In</button>
            </div>

            <div className="pb-4">
                <div className="d-flex justify-content-center text-white col-12 mb-2 fs-5">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                    <label className="form-check-label ps-3 text-white" htmlFor="checkDefault">Acepto términos, condiciones y
                        políticas de privacidad</label>
                </div>
                <div className="d-flex justify-content-center text-white ms-4 col-10 mb-4 fs-5">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                    <label className="form-check-label ps-3 text-white" htmlFor="checkDefault">Deseo recibir promociones y ofertas</label>
                </div>
            </div>
        </div>
    </div>


    )
}

export default SingIn;