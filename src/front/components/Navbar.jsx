import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<div classNameName="pt-3">
			<nav classNameName="navbar bg-body-tertiary container rounded-5 ">
				<div classNameName="container-fluid justify-content-between">
					<div classNameName="d-flex ">
						<img classNameName="my-3 mx-3" src="/src/front/assets/img/calendar_5276602.png" alt="logoClinicoo" style={{ width: '40px', height: '40px' }} />
						<h3 classNameName="d-flex my-3 mx-3">Clinicoo</h3>
					</div>
					<button classNameName="btn btn-sm btn-outline-secondary rounded-5 me-3" type="button">Solicitar demo</button>
				</div>
			</nav>
		</div>
	);
};