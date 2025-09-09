import { Navbar2 } from "../components/Navbar2"

export const Finanzas = () => {


    return (
        <div
            style={{
                backgroundColor: 'black',
                margin: 0,
                paddingTop: '15px',
                minHeight: '100vh'
            }}
        >
            <div className="d-flex">
                <Navbar2 />
                <div className="col bg-dark rounded-5 mx-3 ">
                    <div className="text-white">
                        <h1 className="text-white ms-4 mt-3"> Dashboard Financiero</h1>
                        <p className="ms-5 mt-3">Análisis de ingresos y gestión de pagos</p>
                    </div>
                    <div className="d-flex justify-content-start mt-3 mx-5">
                        <ul className="nav nav-tabs rounded-5 boder-2">
                            <li className="nav-item ">
                                <a className="nav-link rounded-5 text-white ntn btn-outline-dark" aria-current="page" href="#">Día</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link rounded-5 text-white" href="#">Semana</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link rounded-5 text-white" href="#">Mes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}