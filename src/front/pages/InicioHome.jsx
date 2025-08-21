import { Navbar2 } from "../components/Navbar2"


export const InicioHome = () => {

    const fecha = new Date()
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });





    return (
        
            <div
                style={{
                    backgroundColor: 'black',
                    margin: 0,
                    paddingTop: '20px',
                    minHeight: '100vh'
                }}
            >

                < Navbar2 />

                {/* módulo usuario */}

                <div className="container bg-black rounded-5 text-center d-flex justify-content-center align-items-stretch">
                    
                    <div className="row g-0 text-center text-white">
                        <h1 className="">Hola, usuario</h1>
                        <p>{fechaFormateada}</p>
                        <div className="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                    </div>
                </div>

            </div>
    )
}