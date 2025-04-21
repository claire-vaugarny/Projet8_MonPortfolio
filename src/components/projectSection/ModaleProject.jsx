import './modaleProject.scss';
import ImageGallery from './ImageGallery';

function ModaleProject({project}) {
	return (
		<div className="ModaleProject">
			<div className="leftContainer">
				<i class="fa-solid fa-circle-xmark"></i>
				<ImageGallery images={project.images} />
				<h2>{project.nom}</h2>
			</div>
			<div className="rightContainer">
				<h3>Objectif du projet :</h3>
				<p>{project.objectif}</p>

				<h3>Les problématiques abordées :</h3>
				<p>
					{Array.isArray(project.problématiques)
						? project.problématiques.map((item, index) => (
								<span key={index}>
									{item}
									<br />
								</span>
						  ))
						: project.problématiques}
				</p>

				<h3>Les solutions apportées :</h3>
				<p>
					{Array.isArray(project.solutions)
						? project.solutions.map((item, index) => (
								<span key={index}>
									{item}
									<br />
								</span>
						  ))
						: project.solutions}
				</p>

				<h3>Les points abordés lors de la présentation orale :</h3>
				<p>
					{Array.isArray(project.soutenance)
						? project.soutenance.map((item, index) => (
								<span key={index}>
									{item}
									<br />
								</span>
						  ))
						: project.soutenance}
				</p>

				<h3>Lien vers le code :</h3>
				<p>{project.lienURL}</p>
			</div>
		</div>
	);
}

export default ModaleProject;
