import './competencesSection.scss';

function CompetencesSection() {
	return (
		<section id="CompetencesSection" className="sectionImpaire">
			<h2>Mes compétences</h2>

			<div className="skillsGroup">
				<h3>Frontend</h3>
                <p>
					Pour le front-end, j’utilise principalement <strong>HTML5</strong>, <strong>CSS3</strong> et <strong>JavaScript</strong>, combinés à <strong>React</strong> pour créer des interfaces dynamiques, responsives et performantes.
				</p>
				<ul>
					<li>
						<i className="fa-brands fa-html5"></i> HTML5
					</li>
					<li>
						<i className="fa-brands fa-css3-alt"></i> CSS3
					</li>
					<li>
						<i className="fa-brands fa-js"></i> JavaScript
					</li>
					<li>
						<i className="fa-brands fa-react"></i> React
					</li>
				</ul>
			</div>

			<div className="skillsGroup">
				<h3>Backend</h3>
                <p>
					Côté back-end, je travaille avec <strong>Node.js</strong> et <strong>Express</strong> pour développer des APIs REST, et j’utilise <strong>MongoDB</strong> comme base de données NoSQL pour gérer efficacement les données.
				</p>
				<ul>
					<li>
						<i className="fa-brands fa-node-js"></i> Node.js
					</li>
					<li>
						<i className="fa-solid fa-server"></i> Express
					</li>
					<li>
						<i className="fa-solid fa-database"></i> MongoDB
					</li>
				</ul>
			</div>

			<div className="skillsGroup">
				<h3>Outils & Méthodes</h3>
                <p>
					Pour garantir la qualité et l’accessibilité de mes projets, j’utilise des outils comme <strong>Postman</strong> pour les tests d’API, <strong>Google Analytics</strong> pour le suivi des performances, <strong>Lighthouse</strong> pour l’audit technique, et <strong>Wave</strong> pour l’accessibilité.
				</p>
				<ul>
					<li>
						<i className="fa-solid fa-paper-plane"></i> Postman
					</li>
					<li>
						<i className="fa-brands fa-google"></i> Google Analytics
					</li>
					<li>
						<i className="fa-solid fa-bolt"></i> Lighthouse
					</li>
					<li>
						<i className="fa-solid fa-universal-access"></i> Wave
					</li>
				</ul>
			</div>
		</section>
	);
}

export default CompetencesSection;
