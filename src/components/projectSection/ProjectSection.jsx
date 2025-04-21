import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/datas.json')
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
    <section id="ProjectSection">
      {isLoading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ProjectSection;
