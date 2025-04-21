import './projectCard.scss';

function ProjectCard({project}) {
	return (
		<div className="projectCardContainer">
			<div className="projectCard" style={{backgroundImage: `url(${project.cover})`}}>
				<div className="projectCardShaddow">
					<h3>{project.nom}</h3>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
