import { useEffect, useState } from 'react';
import './navbar.scss';

function Navbar() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let current = "";

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (window.scrollY >= sectionTop - sectionHeight / 3) {
					current = section.getAttribute("id");
				}
			});

			setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav id="navbar">
			<ul>
				<li>
					<a
						href="#ProfilSection"
						className={`linkNavbar ${activeSection === "ProfilSection" ? "active" : ""}`}
					>
						Profil
					</a>
				</li>
				<li>
					<a
						href="#CompetencesSection"
						className={`linkNavbar ${activeSection === "CompetencesSection" ? "active" : ""}`}
					>
						Compétences
					</a>
				</li>
				<li>
					<a
						href="#ProjectSection"
						className={`linkNavbar ${activeSection === "ProjectSection" ? "active" : ""}`}
					>
						Projets
					</a>
				</li>
				<li>
					<a
						href="#ContactSection"
						className={`linkNavbar ${activeSection === "ContactSection" ? "active" : ""}`}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
