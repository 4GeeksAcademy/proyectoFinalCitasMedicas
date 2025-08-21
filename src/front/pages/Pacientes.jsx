import React from "react";
import { Navbar2 } from "../components/Navbar2";

const Pacientes = () =>
{
    return(
        <div
            style={{
                backgroundColor: 'black',
                margin: 0,
                paddingTop: '15px',
                minHeight: '100vh'
            }}
        > {/*Sidebar*/} 
           <div className="container-fluid vh-100 p-0 pe-3">
                <div className="row h-50 g-3 ">
                                {/* Navbar - Sidebar */}
                    <div className="col-12 col-md-3 col-lg-2 ps-0 ms-0">
                        <Navbar2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pacientes;