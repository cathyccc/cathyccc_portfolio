import ProfilePic from '../assets/cathy-profile.png'
export default function About() {
  return (
    <section className="container mx-auto max-w-7xl">
      <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="w-full p-7 md:w-1/2">
          <h1 className="font-bold leading-normal text-4xl py-5 sm:text-6xl md:text-4xl lg:text-5xl">Bridging the gap between <span className="bg-purple-300 px-2 py-1">pixel-perfect design</span> and <span className="bg-purple-300 px-2 py-1">high performance code</span></h1>
          <div className="pb-5">
            <span className="font-bold">The Background:</span> I started in Graphic Design, obsessed with visual info. I soon realized UX isn't just looks—it’s speed, accessibility, and intuition.
          </div>
          <div className="pb-5">
            <span className="font-bold">The Philosophy:</span> I’m a firm believer that AI is a superpower that lets us focus on creative architecture over repetitive syntax.
          </div>
          <div className="pb-5">
            <span className="font-bold">The Life:</span> When I’m not coding, I’m navigating the beautiful chaos of life with my 1.5 and 4-year-old. Being a toddler mom has made me a master of multitasking and a calm problem-solver.
          </div>
          <div className="pb-5">
            <span className="font-bold">The Fun:</span> On the rare occasion the house is quiet? I’m likely losing a board game, but having a great time doing it.
          </div>
        </div>
        <div className="w-full px-15 pt-15 md:p-10 md:w-1/2 lg:pl-30">
          <img src={ProfilePic} alt="profile-picture" className="w-100"/>
        </div>
      </div>
    </section>
  )
}