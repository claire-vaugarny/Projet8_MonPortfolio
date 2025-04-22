import './navbar.scss'

function Navbar() {
	return (
			<nav id="navbar">
				<ul>
					<li>
						<a href="#ProfilSection" className="linkNavbar" >
							Profil
						</a>
					</li>
					<li>
						<a href="#" className="linkNavbar" >
							Compétences
						</a>
					</li>
					<li>
						<a href="#ProjectSection" className="linkNavbar" >
							Projets
						</a>
					</li>
					<li>
						<a href="#ContactSection" className="linkNavbar" >
							Contact
						</a>
					</li>
				</ul>
			</nav>
	);
}

export default Navbar;