import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name="skills" className="bg-black">
      {/* Container */}
      <div>
        <div>
          <p>Expirience</p>
          <p>These are technologies I've worked with:</p>
        </div>
        <div className="text-white">
          <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
          <p>HTML</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
