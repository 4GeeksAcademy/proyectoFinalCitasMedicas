import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<div className="pt-3">
			<nav className="navbar bg-body-tertiary container rounded-5 ">
				<div className="container-fluid justify-content-around">
					<div className="d-flex ">
						<img className="my-3 mx-3" src="/src/front/assets/img/calendar_5276602.png" alt="logoClinicoo" style={{ width: '40px', height: '40px' }} />
						<h3 className="d-flex my-3 mx-3">Clinicoo</h3>
					</div>
				
					<h5 className="me-3">
						<a className="nav-link active" aria-current="caracteristicas" href="#">Características</a>
					</h5>
					<h5 className="">
						<a className="nav-link active" aria-current="planes" href="#">Planes</a>
					</h5>
				
					<button className="btn btn-lg btn-outline-secondary rounded-3 me-3" type="button">
						Solicitar demo
					</button>
				</div>
			</nav>
		</div>
	);
};