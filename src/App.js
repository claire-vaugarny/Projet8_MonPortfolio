import Navbar from './components/Navbar';
import ProjectSection from './components/projectSection/ProjectSection';
// import ProfilSection from './components/profilSection/ProfilSection';
import './App.scss'

function App() {
	return (
		<div id="bodyContainer">
			<Navbar />
			<main className="main">
				{/* <ProfilSection /> */}
				<ProjectSection />
			</main>
		</div>
	);
}

export default App;
