import { Link } from "react-router-dom";

export const Navbar = () => {

	const showFeatures = location.pathname === "/" || location.pathname === ""

	return (
		<div className="">
			<nav className="navbar navbar-expand-lg bg-body-tertiary container container-fluid rounded-5 fixed-top mt-2">
				<div className="container-fluid justify-content-between">
					<div className="d-flex">
						<img className="my-3 mx-3" src="/img/logo-black.png" alt="logomedAgend" style={{ width: '50px', height: 'auto' }} />
						
						<Link to="/" className="text-decoration-none text-dark">
							<h3 className="d-flex mt-3 pt-3 mx-3 ">MedAgend</h3>
						</Link>
					</div>
				{ showFeatures && (
					<>
					<h5 className="">
						<a className="nav-link active" aria-current="caracteristicas" href="#caracteristicas">Características</a>
					</h5>
					<h5 className="">
						<a className="nav-link active" aria-current="planes" href="#planes">Planes</a>
					</h5>
					</>
				)}

					<Link to="/inicio-home">
						<button className="btn btn-lg btn-outline-secondary rounded-5 me-3" type="button">
							Solicitar demo
						</button>
					</Link>	
				</div>
			</nav>
		</div>
	);
};

