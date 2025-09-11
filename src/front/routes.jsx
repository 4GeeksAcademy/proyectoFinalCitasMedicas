// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { LandingN1 } from "./pages/LandingN1";
import PaginaRegistrate from './pages/PaginaRegistrate';
import Calendario from "./pages/Calendario";


import SingIn from "./pages/singIn"
import {Pacientes} from "./pages/Pacientes"
import { InicioHome } from "./pages/InicioHome";
import { AgregarCita } from "./pages/AgregarCita";
import { AgregarPaciente } from "./pages/AgregarPaciente";
import { Citas } from "./pages/Citas";
import { EditarCita } from "./pages/EditarCita";
import { EditarPaciente } from "./pages/EditarPaciente";
import { Finanzas } from "./pages/Finanzas";


export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<LandingN1 />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/register" element={<PaginaRegistrate />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/inicio-home" element={<InicioHome />} />
        <Route path="/agregar-cita" element={<AgregarCita />} />
        <Route path="/agregar-paciente" element={<AgregarPaciente />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/editar-cita/:id" element={<EditarCita />} />
        <Route path="/editar-paciente/:id" element={<EditarPaciente />} />
        <Route path="/finanzas" element={<Finanzas />} />
      </Route>
    )
);