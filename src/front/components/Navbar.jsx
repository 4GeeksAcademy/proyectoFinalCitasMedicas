import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<div className="">
			<nav className="navbar navbar-expand-lg bg-body-tertiary container container-fluid rounded-5 fixed-top mt-2">
				<div className="container-fluid justify-content-around">
					<div className="d-flex">
						<img className="my-3 mx-3" src="/src/front/assets/img/logo-black.png" alt="logomedAgend" style={{ width: '50px', height: 'auto' }} />
						
						<Link to="/Landing-n1" className="text-decoration-none text-dark">
							<h3 className="d-flex mt-3 pt-3 mx-3 ">MedAgend</h3>
						</Link>
					</div>
				
					<h5 className="">
						<a className="nav-link active" aria-current="caracteristicas" href="#caracteristicas">Características</a>
					</h5>
					<h5 className="">
						<a className="nav-link active" aria-current="planes" href="#planes">Planes</a>
					</h5>
				
					<button className="btn btn-lg btn-outline-secondary rounded-5 me-3" type="button">
						Solicitar demo
					</button>
				</div>
			</nav>
		</div>
	);
};

