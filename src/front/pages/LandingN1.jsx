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
                <img className="bg-white mb-3" src="/src/front/assets/img/calendar_5276602.png" alt="logoClinicoo" style={{ width: '40px', height: 'auto' }}/>
                <div className="col-lg-6 mx-auto"> 
                    <p className="lead mb-4 text-white">
                        Elimina el caos de la gestión médica, permitiéndote enfocarte en lo que realmente importa: tus pacientes.
                    </p> 
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                        <button type="button" className="btn btn-light btn-lg px-4 gap-3">Iniciar sesión</button> 
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Registrarse</button> 
                    </div> 
                </div> 
            </div>


        </div>
    )
}