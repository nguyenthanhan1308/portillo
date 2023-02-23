import "./App.css";
import {Header, About, Tech, Project} from "./components"
export default function App() {
	const techContainer = document.getElementById("tech");
	const scrollContainer = document.getElementById("scroll");
	const reveal = () => {
		const techY = techContainer?.getBoundingClientRect().top;
		if(techY === 0) {
			techContainer.classList.add("active");
		}
		else{
			techContainer.classList.remove("active");
		}
	}
	scrollContainer?.addEventListener("scroll", reveal, true);
	return (
		<div id="scroll" className="scroll-container">
			<Header/>
			<div id="about" className="scroll-child">
				<About/>
			</div>
			<div id="tech" className="scroll-child reveal">
				<Tech/>
			</div>
			<div className="scroll-child">
				<Project/>
			</div>
			<h1 className="scroll-child">1</h1>
			<h1 className="scroll-child">2</h1>
			<h1 className="scroll-child">3</h1>
			<h1 className="scroll-child">4</h1>
		</div>
	)
}