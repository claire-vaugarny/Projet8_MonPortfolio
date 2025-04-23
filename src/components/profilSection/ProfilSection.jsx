import './ProfilSection.scss';

function ProfilSection() {
    return (
        <section id="ProfilSection" className="sectionPaire">
            <h1>Bienvenue</h1>
            <img 
  src={`${process.env.PUBLIC_URL}/images/photo_profil.webp`} 
  alt="Ma photo de profil" 
/>
            <h2>Mon parcours</h2>
            <p>
                Titulaire d'une licence en mathématiques, j'ai initialement choisi de me tourner vers l'enseignement. Bien que j'ai pris plaisir à enseigner les mathématiques, la gestion de classe en lycée s'est avérée un défi majeur pour moi.
                C'est alors que j'ai pris la décision de réorienter ma carrière vers ma deuxième passion : la programmation.
            </p>
            <p>
                J'ai suivi une formation certifiante de Développeur Web en distanciel, d'une durée de six mois, dispensée par OpenClassrooms. Cette formation m'a permis d'acquérir les compétences essentielles dans le domaine du développement web.
            </p>
            <p>
                Vous pouvez consulter davantage d'informations sur la formation que j'ai suivie en cliquant sur le lien suivant : 
                <a href="https://openclassrooms.com/fr/paths/899-developpeur-web" target="_blank" rel="noopener noreferrer">Formation Développeur Web - OpenClassrooms</a>
            </p>

            <h2>Et maintenant ?</h2>
            <p>
                Mon objectif actuel est de mettre en pratique les compétences acquises au sein d'une entreprise. Travailler en tant que développeuse web me permettrait non seulement de consolider mes connaissances, mais aussi d'enrichir mes compétences par de nouveaux défis.
            </p>
        </section>
    );
}

export default ProfilSection;
