"use client"

import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Creature = () => {
  // List of components with their names, images, and JSX elements
  const components = [
    { 
      name: "Frog King", 
      // component: <FrogKing />, 
      image: '/images/Frog2.png', 
      timer: "play",
      timerStyle: { backgroundColor: "#F15B06", color: "#FFF", border: "1px solid #FEFEFF" }
    },
    { 
      name: "Fire Creature", 
      // component: <FireCreature />, 
      image: '/images/Flameexpand2.png', 
      timer: "level 10 required",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "180px", marginLeft: "97px" }
    },
    { 
      name: "Water Creature", 
      // component: <WaterCreature />, 
      image: '/images/WaterFairy.png', 
      timer: "you own this creature",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "200px", marginLeft: "88px" }
    },
    { 
      name: "Earth Creature", 
      // component: <EarthCreature />, 
      image: '/images/antenna.png', 
      timer: "you own this creature",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "200px", marginLeft: "88px" }
    },
    { 
      name: "Air Creature", 
      // component: <AirCreature />, 
      image: '/images/seadragon.png', 
      timer: "level 5 required",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "170px", marginLeft: "105px" }
    },
    { 
      name: "Shadow Creature", 
      // component: <ShadowCreature />, 
      image: '/images/ghost.png', 
      timer: "02:39:50",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF" }
    },
    { 
      name: "Lightning Creature", 
      // component: <LightningCreature />, 
      image: '/images/sojo.png', 
      timer: "play",
      timerStyle: { backgroundColor: "#F15B06", color: "#FFF", border: "1px solid #FEFEFF" }
    },
    { 
      name: "Ice Creature", 
      // component: <IceCreature />, 
      image: '/images/wolf.png', 
      timer: "level 10 required",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "180px", marginLeft: "100px" }
    },
    { 
      name: "Nature Creature", 
      // component: <NatureCreature />, 
      image: '/images/EarthFairy.png', 
      timer: "level 2 required",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "170px", marginLeft: "105px" }
    },
    { 
      name: "Metal Creature", 
      // component: <MetalCreature />, 
      image: '/images/batGurl.png', 
      timer: "02:39:50",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF" }
    },
  ];

  // State to track the selected component index
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle left button click (decrease index)
  const handleLeftClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? components.length - 1 : prevIndex - 1));
  };

  // Function to handle right button click (increase index)
  const handleRightClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex === components.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='play scrollable-page h-screen overflow-y-auto'>
      <div className='h-[615px] pmx:h-[770px]'>
        <div className='p-3 w-[350px] pmx:w-[390px] ms-[12px] rounded-lg mt-7 pmx:mt-10 pmx:ms-[12px] p4m:ms-5 p4m:mt-14 spm:mt-14 spm:ms-5' 
          style={{ background: "linear-gradient(to bottom, #5FBB98, #2B5545)" }}>
          
          <div className='flex uppercase text-[14px] pmx:text-[15px] font-bold bg-orange-600 p-[1px] spm:text-[15px]'>
            <img src='/images/targetNB.png' alt='target' className='w-6 h-6 mt-1 me-1 ms-4 pmx:ms-7' />
            <p className='mt-[4.7px] '>20k</p> 
            <p className=' ms-40 pmx:ms-44 mt-1'>pwr 1/ 10</p> 
          </div>

          {/* Dynamically display the image based on selected index */}
          <div className='Img'>
            <img src={components[selectedIndex].image} alt={components[selectedIndex].name} className='w-full h-[140px] pmx:h-[250px] spm:h-[250px] rounded-b-md' />
          </div>
        </div>

        {/* Navigation Section */}
        <div className='flex justify-between w-[350px] pmx:w-[390px] ms-[12px] bg-gray-700 mt-2 rounded-full p-1 pmx:p-2 p4m:ms-5 spm:ms-5 pmx:ms-[12px]'>
          {/* Left Arrow - Disable when at the first creature */}
          <button
            className={`cursor-pointer p-1 bg-orange-600 rounded-full hover:text-gray-700 ${selectedIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleLeftClick}
            disabled={selectedIndex === 0}
          >
            <FaChevronLeft size={16} />
          </button>
          
          <p className='font-bold ms-[30px] me-[30px] pmx:ms-[30px] pmx:me-[30px] text-orange-600 uppercase'>
            {components[selectedIndex].name}
          </p>
          
          {/* Right Arrow - Disable when at the last creature */}
          <button
            className={`cursor-pointer p-1 bg-orange-600 rounded-full hover:text-gray-700 ${selectedIndex === components.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleRightClick}
            disabled={selectedIndex === components.length - 1}
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* Timer and Resource Section */}
        <div className='flex w-[350px] pmx:w-[390px] ms-[12px] uppercase gap-7 pmx:gap-3 mt-2 p4m:ms-5 spm:ms-5 pmx:ms-[12px]'>
          <div className='flex border-2 border-orange-600 rounded-full p-1 pmx:p-2 px-2 w-[160px] pmx:w-[189px]'>
            <div className='ms-6 px-1 pmx:ms-10'>
              <img src='/images/hourglassNB.png' alt='hour glass' className='w-6 h-6 pmx:w-7 pmx:h-7' />
            </div>
            <p className='text-orange-600 font-bold text-[12px] mt-[2px] p4m:mt-[4px]'> = 4hrs</p>
          </div>
          <div className='flex border-2 border-orange-600 rounded-full p-1 pmx:p-2 px-2 w-[160px] pmx:w-[189px]'>
            <div className='ms-5 px-1 pmx:ms-7'>
              <img src='images/MeterNB.png' alt='meter' className='w-6 h-6 pmx:w-7 pmx:h-7' />
            </div>
            <p className='text-orange-600 font-bold text-[12px] mt-[2px] p4m:mt-[4px]'> = regular</p>
          </div>
        </div>

        {/* Creature Info Section */}
        <div className='w-[350px] pmx:w-[390px] ms-[12px]  bg-gray-700 mt-2 rounded-full pmx:p-1 p4m:ms-5 spm:ms-5 pmx:ms-[12px]'>
          <div className='flex justify-center items-center'>
            <img src='/images/presentNB.png' alt='present' className='w-6 h-7 pmx:w-7 pmx:h-8' />
            <p className='ms-1 me-1'>=</p>
            <img src='/images/CoinCNB.png' alt='coin' className='w-6 h-6 pmx:w-7 pmx:h-7' />
            <img src='/images/CharcoalNB.png' alt='charcoal' className='w-6 h-6 pmx:w-7 pmx:h-7' />
            <img src='/images/EmberNb.png' alt='ember' className='w-6 h-6 pmx:w-7 pmx:h-7' />
          </div>
        </div>

        {/* Description Section */}
        <div className='w-[350px] pmx:w-[390px] ms-[12px] border-2 border-orange-600 rounded-xl p-2 mt-2 p4m:ms-5 spm:ms-5 pmx:ms-[12px]'>
          <p className='text-orange-600 uppercase font-bold text-[12px] pmx:text-[18px] depH'>description</p>
          <div>
            <p className='text-[11px] pmx:text-[16.5px] p4m:text-[18px] depT'>
              {components[selectedIndex].name} is a mighty creature, full of power and potential. This creature thrives in its environment and brings forth elemental magic. Legends say that these creatures can manipulate the forces of nature with ease, bringing forth devastation or protection depending on the user’s will.
            </p>
          </div>
        </div>

       {/* Timer Section */}
       <div 
          className={`w-[80px] rounded-full ms-[145px] pmx:ms-[165px] mt-3 pmx:mt-4 p4m:ms-[175px] spm:ms-[155px] uppercase timer-container ${
          selectedIndex === 1 ? "level-timer" : ""
        } ${selectedIndex === 2 ? "own-timer" : ""} ${selectedIndex === 3 ? "own-timer" : ""} ${selectedIndex === 4 ? "level-timer" : ""} ${selectedIndex === 7 ? "level-timer" : ""} ${selectedIndex === 8 ? "level-timer" : ""}`}
          style={components[selectedIndex].timerStyle}
        >
          <div className='p-2 font-bold text-[12px] text-center'>
            <p>{components[selectedIndex].timer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creature;

