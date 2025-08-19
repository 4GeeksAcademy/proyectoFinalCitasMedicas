
import React from "react"

const SingIn = () => {
    return (
    <div className="container bg-light rounded-5 pe-5">
        <div className="row">
            <nav className="navbar bg-dark rounded-4 ms-3 me-3 my-3 px-4">
                <div className="container d-flex justify-content-between align-items-center ">
                    <a className="navbar-brand text-white" href="">
                        <h3>Logo</h3>
                    </a>
                    <h3 className="text-white fw-bold">MedicaAgend</h3>
                    <h4 className="text-white"><i>Organizando la salud</i></h4>
                </div>
            </nav>
            <div className="row">
                <div className="container col-5 bg-dark rounded-5 pt-3 pb-2">
                    <div className="Logo text-white d-flex justify-content-center pt-4 pb-4">
                        <h1>Logo</h1>
                    </div>
                    <div className="row d-flex justify-content-center mt-5">
                        <div className=" pe-3 text-white col-7">
                            <div className="input-group flex-nowrap">
                                <span className="col-5 input-group-text bg-dark text-white" id="addon-wrapping">Email</span>
                                <input type="text" className="form-control" placeholder="example@mail.com"
                                    aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                        </div>

                    </div>
                    <div className="row d-flex justify-content-center mt-4">
                        <div className="mb-3 text-white col-7 mb-1">
                            <div className="input-group flex-nowrap">
                                <span className="col-5 p-1 input-group-text bg-dark text-white"
                                    id="addon-wrapping">Password</span>
                                <input type="text" className="form-control" placeholder="Password" aria-label="Username"
                                    aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center text-white col-9 mb-4">
                        <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                        <label className="form-check-label ps-3" for="checkDefault">Recordar usuario</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-2 pb-3 d-flex justify-content-center">
            <button type="button" className="btn btn-dark btn-lg ">Sing In</button>
        </div>
        <div className="pb-4">
            <div className="d-flex justify-content-center text-white col-12 mb-2 fs-5">
                <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                <label className="form-check-label ps-3 text-black" for="checkDefault">Acepto términos, condiciones y
                    políticas de privacidad</label>
            </div>
            <div className="d-flex justify-content-center text-white ms-4 col-10 mb-4 fs-5">
                <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                <label className="form-check-label ps-3 text-black" for="checkDefault">Deseo recibir promociones y ofertas</label>
            </div>
        </div>
        <div className="d-flex justify-content-center text-black fs-5">
            <p>@ 2025</p>
        </div>
    </div>

    )
}

export default SingIn;