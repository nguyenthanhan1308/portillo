import "./App.css";
import { Header, About, Tech, Project } from "./components"
export default function App() {
	// const techContainer = document.getElementById("tech");
	// const scrollContainer = document.getElementById("scroll");
	// const reveal = () => {
	// 	const techY = techContainer?.getBoundingClientRect().top;
	// 	if(techY === 0) {
	// 		techContainer.classList.add("active");
	// 	}
	// 	else{
	// 		techContainer.classList.remove("active");
	// 	}
	// }
	// scrollContainer?.addEventListener("scroll", reveal, true);
	return (
		<div>
			<Header />
			<div id="scroll" className="scroll-container">
				<div id="about" className="scroll-child">
					<About />
				</div>
				<div id="tech" className="scroll-child">
					<Tech />
				</div>
				<div className="scroll-child">
					<Project />
				</div>
			</div>
		</div>
	)
}