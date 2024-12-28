"use client"

import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { StarRating } from "./StarRatings"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Creature = ({rating}) => {
  // List of components with their names, images, and JSX elements
  const components = [
    { 
      name: "Frog King", 
      icon: "/images/PotionForest.png",
      // component: <FrogKing />, 
      image: '/images/Frog2.png', 
      timer: "Rank Up",
      timerStyle: { backgroundColor: "#F15B06", color: "#FFF", border: "1px solid #FEFEFF" }
    },
    { 
      name: "Fire Creature",
      icon: "/images/PotionAerial.png", 
      // component: <FireCreature />, 
      image: '/images/Flameexpand2.png', 
      timer: "level 10 required",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "180px" }
    },
    { 
      name: "Water Creature", 
      icon: "/images/PotionSea.png",
      // component: <WaterCreature />, 
      image: '/images/WaterFairy.png', 
      timer: "you own this creature",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "200px" }
    },
    { 
      name: "Earth Creature", 
      icon: "/images/PotionMountain.png",
      // component: <EarthCreature />, 
      image: '/images/antenna.png', 
      timer: "you own this creature",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "200px" }
    },
    { 
      name: "Air Creature", 
      icon: "/images/PotionMountain.png",
      // component: <AirCreature />, 
      image: '/images/seadragon.png', 
      timer: "level 5 required",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "170px" }
    },
    { 
      name: "Shadow Creature", 
      icon: "/images/PotionAerial.png",
      // component: <ShadowCreature />, 
      image: '/images/ghost.png', 
      timer: "02:39:50",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF" }
    },
    { 
      name: "Lightning Creature", 
      icon: "/images/PotionAerial.png",
      // component: <LightningCreature />, 
      image: '/images/sojo.png', 
      timer: "play",
      timerStyle: { backgroundColor: "#F15B06", color: "#FFF", border: "1px solid #FEFEFF" }
    },
    { 
      name: "Ice Creature", 
      icon: "/images/PotionSea.png",
      // component: <IceCreature />, 
      image: '/images/wolf.png', 
      timer: "level 10 required",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "180px" }
    },
    { 
      name: "Nature Creature",
      icon: "/images/PotionForest.png", 
      // component: <NatureCreature />, 
      image: '/images/EarthFairy.png', 
      timer: "level 2 required",
      timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "170px" }
    },
    { 
      name: "Metal Creature", 
      icon: "/images/PotionMountain.png",
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
    <div
      className="play h-screen w-screen"
      // style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="h-[100vh] w-[95%] mx-auto bg-red -mt-12">
        <div className='flex flex-col items-center'>
        <div
          className="p-2.5 w-[90%] rounded-lg mt-16"
          style={{ background: "linear-gradient(to bottom, #5FBB98, #2B5545)" }}
        >
          <div className='flex justify-center'>
            <StarRating rating={2} maxRating={3} />
          </div>
          <div className="flex uppercase text-[14px] pmx:text-[15px] font-bold bg-orange-600 p-[1px] spm:text-[15px] text-white justify-between">
            <div className='flex ms-6'>
              <img
                src="/images/targetNB.png"
                alt="target"
                className="w-6 h-6 mt-1 "
              />
              <p className="mt-[4.7px] ">20k</p>
            </div>
            <p className="mt-1 me-6">pwr 1/ 10</p>
          </div>

          <Box
            bgImage={components[selectedIndex].image}
            bgRepeat={"no-repeat"}
            bgSize={"100% 100%"}
            w={"100%"}
            h={"100px"}
            sx={{
              "@media (min-height: 780px) and (max-height: 852px)": {
                h: "195px",
              },
              "@media (min-height: 812px) and (max-height: 820px)": {
                h: "250px",
              },
              "@media (min-height: 840px) and (max-height: 844px)": {
                h: "300px",
              },
              "@media (min-height: 926px) and (max-height: 932px)": {
                h: "360px",
              },
              "@media (min-height: 1040px) and (max-height: 1180px)": {
                h: "460px",
              },
            }}
          />

          {/* </Box> */}
        </div>

        {/* Navigation Section */}
        <div className="flex justify-between w-[90%] bg-gray-700 mt-2 rounded-full p-1 pmx:p-2">
          {/* Left Arrow - Disable when at the first creature */}
          <button
            className={`cursor-pointer p-1 bg-orange-600 rounded-full hover:text-gray-700 ${
              selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleLeftClick}
            disabled={selectedIndex === 0}
          >
            <FaChevronLeft size={16} />
          </button>

          <p className="font-bold ms-[30px] me-[30px] pmx:ms-[30px] pmx:me-[30px] text-orange-600 uppercase">
            {components[selectedIndex].name}
          </p>

          {/* Right Arrow - Disable when at the last creature */}
          <button
            className={`cursor-pointer p-1 bg-orange-600 rounded-full hover:text-gray-700 ${
              selectedIndex === components.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleRightClick}
            disabled={selectedIndex === components.length - 1}
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* Timer and Resource Section */}
        <div className="flex items-center w-[90%] uppercase gap-7 pmx:gap-3 mt-2">
          <div className="flex border-2 border-orange-600 rounded-full p-1 pmx:p-2 px-2 w-[50%]">
            <div className="flex flex-1 items-center justify-center px-1">
              <img
                src="/images/hourglassNB.png"
                alt="hour glass"
                className="w-6 h-6 pmx:w-7 pmx:h-7"
              />
              <p className="text-orange-600 font-bold text-[12px]"> = 4hrs</p>
            </div>
          </div>

          <div className="flex border-2 border-orange-600 rounded-full p-1 pmx:p-2 px-2 w-[50%]">
            <div className="flex flex-1 items-center justify-center px-1">
              <img
                src="images/MeterNB.png"
                alt="meter"
                className="w-6 h-6 pmx:w-7 pmx:h-7"
              />
              <p className="text-orange-600 font-bold text-[12px] mt-[2px]">
                {" "}
                = regular
              </p>
            </div>
          </div>
        </div>

        {/* Creature Info Section */}
        <div className="w-[90%]  bg-gray-700 mt-2 rounded-full pmx:p-1">
          <div className="flex justify-center items-center">
            <img
              src="/images/presentNB.png"
              alt="present"
              className="w-6 h-7 pmx:w-7 pmx:h-8"
            />
            <p className="ms-1 me-1">=</p>
            <img
              src="/images/CoinCNB.png"
              alt="coin"
              className="w-6 h-6 pmx:w-7 pmx:h-7"
            />
            <img
              src="/images/CharcoalNB.png"
              alt="charcoal"
              className="w-6 h-6 pmx:w-7 pmx:h-7"
            />
            <img
              src="/images/EmberNb.png"
              alt="ember"
              className="w-6 h-6 pmx:w-7 pmx:h-7"
            />
          </div>
        </div>

        {/* Description Section */}
        <Box className="w-[90%] border-2 border-orange-600 rounded-xl p-2 mt-2">
          <p className="text-orange-600 uppercase font-bold text-[15px]">
            description
          </p>
          <div>
            <p className="text-[13px] text-white">
              {components[selectedIndex].name} is a mighty creature, full of
              power and potential. This creature thrives in its environment and
              brings forth elemental magic. Legends say that these creatures can
              manipulate the forces of nature with ease, bringing forth
              devastation or protection depending on the user’s will.
            </p>
          </div>
        </Box>
        </div>

        {/* Timer Section */}
        <div className="flex">
          <img src={components[selectedIndex].icon} width={29} height={29} alt='image' className='' />
          <div
            className={`w-[80px] rounded-md mt-3 pmx:mt-4 uppercase mx-auto timer-container ${
              selectedIndex === 1 ? "level-timer" : ""
            } ${selectedIndex === 2 ? "own-timer" : ""} ${
              selectedIndex === 3 ? "own-timer" : ""
            } ${selectedIndex === 4 ? "level-timer" : ""} ${
              selectedIndex === 7 ? "level-timer" : ""
            } ${selectedIndex === 8 ? "level-timer" : ""}`}
            style={components[selectedIndex].timerStyle}
          >
            <div className="p-2 font-bold text-[12px] text-center">
              <p>{components[selectedIndex].timer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creature;

