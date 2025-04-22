import {useEffect} from 'react';
import './modaleProject.scss';
import ImageGallery from './ImageGallery';

function ModaleProject({project, onClose}) {
	useEffect(() => {
		// Ajouter la classe quand la modale s'affiche
		document.body.classList.add('body-no-scroll');

		// Supprimer la classe quand la modale se ferme ou que le composant est démonté
		return () => {
			document.body.classList.remove('body-no-scroll');
		};
	}, []);

	return (
		<div className="ModaleProject">
			<div className="leftContainer">
				<i className="fa-solid fa-circle-xmark" onClick={onClose}></i>
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
				<a href={project.lienURL} target="_blank" rel="noopener noreferrer">
					{project.lienURL}
				</a>
			</div>
		</div>
	);
}

export default ModaleProject;
