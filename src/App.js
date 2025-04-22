import './App.scss'
import Navbar from './components/Navbar';
import ProjectSection from './components/projectSection/ProjectSection';
import ProfilSection from './components/profilSection/ProfilSection';
import ContactSection from './components/contactSection/ContactSection';
import CompetencesSection from './components/competencesSection/CompetencesSection';

function App() {
	return (
		<div id="bodyContainer">
			<Navbar />
			<main className="main">
				{/* <ProfilSection /> */}
				<CompetencesSection />
				{/* <ProjectSection /> */}
				{/* <ContactSection /> */}
			</main>
		</div>
	);
}

export default App;
