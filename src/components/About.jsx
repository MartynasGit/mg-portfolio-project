import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ed2835]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right sm:text-4xl font-bold">
            <p>
              Hi, I'm Martynas nice to meet you. Please take a look.
            </p>
            </div>
            <div>
              <p>
                Really interested in technology and, therefore, enjoy working
                with full stack technologies.I am passionate about IT because
                it has so many things to offer, always something new.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About