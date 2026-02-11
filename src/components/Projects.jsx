import ProjectCard from "./ProjectCard"
import TravelMockImg from '../assets/travel-mockapp-screenshot.jpg'
import RecipeMockImg from '../assets/recipe-mockapp-screenshot.png'

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-8 md:px-2 lg:max-w-7xl md:max-w-3xl lg:px-30">
      <h1 className="text-3xl font-bold mb-3 lg:">Featured Projects</h1>
      <ProjectCard
        img={TravelMockImg}
        gitLink={"https://github.com/cathyccc/vantage-travel-deal-tracker"}
        vercelLink={"https://vantage-travel-deal-tracker.vercel.app/"}
        alt="travel-app-screenshot"
        title="Travel Deal Finder"
        desc="This React app was made with Next.js, Supabase, Tailwind CSS. It includes the use of Amadeus Flight Offers Search API to track global airfares."
        techUsed="React and Amadeus API"
        />
      <ProjectCard
        img={RecipeMockImg}
        gitLink={"https://github.com/cathyccc/chef-gemini"}
        vercelLink={"https://chef-gemini-41pnhbhik-cathys-projects-d2ff594f.vercel.app/"}
        alt="gemini-app-screenshot"
        title="Gemini AI Recipe Generator"
        desc="This React app was made with Node.js and Tailwind CSS. It includes the use of Gemini 3.0 Flash to generate recipes based on ingredient inputs."
        techUsed="React and Generative AI Integration (Gemini 3.0 Flash)"
        />
    </section>
  )
}