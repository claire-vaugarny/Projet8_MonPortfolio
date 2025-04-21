import "./projectCard.scss";

function ProjectCard({project}) {
    const coverImage = project.images && project.images.length > 0 ? project.images[0] : null;

	return (
		<div 
        className="projectCard" 
        style={{
            backgroundImage: coverImage ? `url(${coverImage})` : 'none'}}
        >
			<div className="projectCardShaddow">
				<h3>{project.nom}</h3>
			</div>
		</div>
	);
}

export default ProjectCard;
