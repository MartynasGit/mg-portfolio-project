import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Laravel from '../assets/laravel.svg'
import MySql from '../assets/MySql.svg'
import PHP from '../assets/php.svg'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-black text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#ed2835]">
            Skills
          </p>
          <p className="py-4">These are technologies I've worked with:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className=" hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img
              src={JavaScript}
              alt="JavaScript icon"
              className="w-20 mx-auto"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img src={ReactImg} alt="React icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img src={Laravel} alt="Laravel icon" className="w-20 mx-auto" />
            <p className="my-4">Laravel</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img src={PHP} alt="PHP icon" className="w-20 mx-auto" />
            <p className="my-4">PHP</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img src={MySql} alt="MySql icon" className="w-20 mx-auto" />
            <p className="my-4">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
