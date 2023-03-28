import React from 'react'
import Admin from '../assets/projects/admin.png'
import Kvadratai from '../assets/projects/Kvadratai.png'
import Todo from '../assets/projects/Todo.png'

const Work = () => {
  return (
    <div name="work" className="bg-black w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ed2835]">
            Work
          </p>
          <p className="py-4">// Check out some of my created projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project Item */}
          <div
            style={{ backgroundImage: `url(${Admin})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  PHP CMS application
                </span>
                <div className="pt-8 text-center">
                  <a href="/" className="hidden">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/MartynasGit/cms" target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Item */}
          <div
            style={{ backgroundImage: `url(${Kvadratai})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  Square Game
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://martynasgit.github.io/kvadratai_game/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/MartynasGit/kvadratai_game"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project Item */}
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div>
                <span className="text-2xl font-bold text-white tracking-wider">
                  To-Do-List
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://martynasgit.github.io/to-do-app/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/MartynasGit/to-do-app"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
