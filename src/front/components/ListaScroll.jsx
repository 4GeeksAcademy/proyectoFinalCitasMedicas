import { Link } from "react-router-dom";
export const ListaScroll = () => {
    return (

        <div className="bg-white rounded-3 p-3 mt-5 mx-auto" style={{ maxWidth: "750px", maxHeight: "500px", overflowY: "auto", border: "3px solid #ccc" }}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                    <span style={{ fontSize: "20px", height: "60px" }}>Andrés</span>
                    <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                        Activo
                    </button>
                </li>
                <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                    <span style={{ fontSize: "20px", height: "60px" }}>Corinto</span>
                    <button type="button" className="btn btn-danger rounded-5 btn-sm align-self-start">
                        Inactivo
                    </button>
                </li>
                <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                    <span style={{ fontSize: "20px", height: "60px" }}>Maria</span>
                    <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                        Activo
                    </button>
                </li>
                <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                    <span style={{ fontSize: "20px", height: "60px" }}>Cornelio</span>
                    <button type="button" className="btn btn-danger rounded-5 btn-sm align-self-start">
                        Inactivo
                    </button>
                </li>
                <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                    <span style={{ fontSize: "20px", height: "60px" }}>Toluco</span>
                    <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                        Activo
                    </button>
                </li>
                <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                    <span style={{ fontSize: "20px", height: "60px" }}>Ignacia</span>
                    <button type="button" className="btn btn-danger rounded-5 btn-sm align-self-start">
                        Inactivo
                    </button>
                </li>
                <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                    <span style={{ fontSize: "20px", height: "60px" }}>Rodriga</span>
                    <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                        Activo
                    </button>
                </li>
                <li className="list-group-item bg-dark text-white rounded-5 mb-2 p-3 d-flex flex-column">
                    <span style={{ fontSize: "20px", height: "60px" }}>Felipa</span>
                    <button type="button" className="btn btn-success rounded-5 btn-sm align-self-start">
                        Activo
                    </button>
                </li>
            </ul>
        </div>
    )
}