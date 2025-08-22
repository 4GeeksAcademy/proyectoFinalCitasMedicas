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
           <div className="">
                <div className="">
                                {/* Navbar - Sidebar */}
                    <div className="">
                        <Navbar2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pacientes;