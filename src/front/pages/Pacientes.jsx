import React from "react";
import { Navbar2 } from "../components/Navbar2";

const Pacientes = () =>
{
    return(
        <div
            style={{
                backgroundColor: 'black',
                margin: 0,
                padding: 0,
                minHeight: '100vh'
            }}
        > {/*Sidebar*/} 
            <div className="container">
                <div className="row">
                    <Navbar2/>
                </div>
                
            </div>
        </div>
    )
}

export default Pacientes;