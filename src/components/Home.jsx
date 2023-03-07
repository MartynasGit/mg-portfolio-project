import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
      <div name="home" className=" w-full h-screen bg-black">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-[#ed2835]">Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Martynas Gumuliauskas</h1>
          <h2>I'm a Full Stack developer. </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            doloribus porro possimus corporis non obcaecati, at veniam quos
            sequi consequatur ipsam saepe voluptates magnam dignissimos
            reiciendis? Molestias obcaecati officiis odio.
          </p>
          <div>
            <button>
              View Work <HiArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    )
};

export default Home;