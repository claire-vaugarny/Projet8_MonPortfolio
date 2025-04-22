import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ModaleProject from "./ModaleProject";
import './projectSection.scss';

function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('./datas.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du fetch');
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erreur attrapée :', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="ProjectSection" className="sectionPaire">
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul className="projectsList">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </ul>
      )}
      {selectedProject && <ModaleProject project={selectedProject} onClose={() => setSelectedProject(null)}/>}
    </section>
  );
}

export default ProjectSection;
