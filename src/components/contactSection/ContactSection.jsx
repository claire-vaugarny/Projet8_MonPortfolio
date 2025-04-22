import './contactSection.scss';

function ContactSection() {
	return (
		<section id="ContactSection" className="sectionImpaire contactSection">
			<h2>Me contacter</h2>


			<div className="contactItem">
				<i className="fa-brands fa-github"></i>
				<a 
					href="https://github.com/claire-vaugarny" 
					target="_blank" 
					rel="noopener noreferrer"
				>
					Mon profil GitHub
				</a>
			</div>

			<div className="contactItem">
				<i className="fa-solid fa-square-envelope"></i>
				<a href="mailto:claire.vaugarny@laposte.net">
					claire.vaugarny@laposte.net
				</a>
			</div>
			<img 
				src="./images/mon_chat.webp" 
				alt="Photo de mon chat" 
				className="chatImage"
			/>
		</section>
	);
}

export default ContactSection;
