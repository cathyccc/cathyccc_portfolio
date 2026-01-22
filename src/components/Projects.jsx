import ProjectCard from "./ProjectCard"
import TravelMockImg from '../assets/travel-mockapp-screenshot.png'

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-8 md:px-2 lg:max-w-7xl md:max-w-3xl lg:px-30">
      <h1 className="text-3xl font-bold mb-3 lg:">Featured Projects</h1>
      <ProjectCard
        img={TravelMockImg}
        alt="travel-app-screenshot"
        title="Travel Deal Finder"
        desc="This React app was made with Next.js, Javascript, Tailwind CSS, React. It includes the use of xxx,xxx,xxx."
        techUsed="React and xxx API"
        />
      <ProjectCard
        img={TravelMockImg}
        alt="travel-app-screenshot"
        title="Travel Deal Finder"
        desc="This React app was made with Next.js, Javascript, Tailwind CSS, React. It includes the use of xxx,xxx,xxx."
        techUsed="React and xxx API"
        />
    </section>
  )
}