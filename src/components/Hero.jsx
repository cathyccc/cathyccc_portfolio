import Doodle from '../assets/doodle_girl_desk.png'

export default function Hero() {
  return (
    <section className="container mx-auto p8 max-w-7xl">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 lg:flex-1 p-7 md:pl-20">
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold sm:text-6xl mb-4 leading-normal">
            <span className="bg-purple-300 px-2 py-1">
              Engineering
            </span>
            &nbsp;with a&nbsp;
            <span className="bg-purple-300 px-2 py-1">
              <span className="italic">Designer's Eye</span>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            I specialize in the “messy middle” where design meets code—building accessible, high-performance apps with <span className="font-bold">React, Next.js, and AI-augmented workflows</span>.
    I solve complex technical problems with a designer’s intuition and the calm efficiency of a <span className="font-bold">mom of two</span>.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:flex-1 hidden md:block md:pr-5">
          <img src={Doodle} className="w-full h-auto p-3"/>
        </div>
      </div>
    </section>
  )
}