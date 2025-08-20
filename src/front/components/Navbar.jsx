import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<div className="pt-3">
			<nav className="navbar bg-body-tertiary container rounded-5 ">
				<div className="container-fluid justify-content-between">
					<div className="d-flex ">
						<img className="my-3 mx-3" src="/src/front/assets/img/calendar_5276602.png" alt="logoClinicoo" style={{ width: '40px', height: '40px' }} />
						<h3 className="d-flex my-3 mx-3">Clinicoo</h3>
					</div>	
					<button className="btn btn-sm btn-outline-secondary rounded-5 me-3" type="button">Solicitar demo</button>
				</div>
			</nav>
		</div>
	);
};

