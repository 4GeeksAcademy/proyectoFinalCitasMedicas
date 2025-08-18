export const Footer = () => (

	<footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top "> 
		<div className="col-md-4 d-flex align-items-center"> 		
			<i class="fa-solid fa-calendar text-white fa-2xl"></i> 
			<span className="mb-3 mb-md-0 text-white ms-3">© 2025 Clinicoo, Inc</span> 
		</div> 
		<div>
			
		</div>
			<ul className="nav col-md-4 justify-content-end list-unstyled d-flex"> 
				<li className="ms-3">
					<a className="text-body-secondary"aria-label="Instagram">
						<i class="fa-brands fa-instagram fa-bounce fa-2xl text-white"></i>
					</a>
				</li> 
				<li className="ms-3">
					<a className="text-body-secondary" aria-label="Facebook">
						<i class="fa-brands fa-facebook fa-bounce fa-2xl text-white"></i>
					</a>
				</li> 
			</ul> 
	</footer>
);
