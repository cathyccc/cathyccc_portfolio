export default function ProjectCard(props) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto my-8 md:h-85">
      <div className="flex w-full md:w-1/2 bg-gray-200">
        <img 
          src={props.img}
          alt={props.alt} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full md:w-1/2 p-13">
      <div>
        <h3 className="text-xl font-bold mb-3">{props.title}</h3>
        
        <p className="text-gray-600 mb-4 text-sm">
          {props.desc}
        </p>
        
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-bold">Built with: {props.techUsed}</span>
        </p>
        
        <div className="flex gap-4">
          <a href={props.gitLink} className="bg-purple-800 text-white font-semibold text-xs px-6 py-2 rounded hover:bg-purple-900 hover:shadow-lg hover:scale-105 transition-all duration-200">
            Visit Website
          </a>
          <a href={props.gitLink} className="border-2 border-purple-800 text-purple-800 font-semibold text-xs px-6 py-2 rounded hover:bg-purple-800 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-200">
            View Code
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}