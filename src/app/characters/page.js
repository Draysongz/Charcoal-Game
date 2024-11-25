"use client"

import React from 'react'
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FireCreature from '../components/FireCreature';
import FrogKing from '../components/FrogKing';
import WaterCreature from '../components/waterCreature';
import EarthCreature from '../components/earthCreature';
import AirCreature from '../components/airCreature';
import ShadowCreature from '../components/shadowCreature';
import LightningCreature from '../components/lightningCreature';
import IceCreature from '../components/iceCreature';
import NatureCreature from '../components/natureCreature';
import MetalCreature from '../components/metalCreature';

const Characters = () => {
    const components = [
        { name: "Frog KIng", component: <FrogKing /> },
        { name: "Fire Creature", component: <FireCreature /> },
        { name: "Water Creature", component: <WaterCreature /> },
        { name: "Earth Creature", component: <EarthCreature /> },
        { name: "Air Creature", component: <AirCreature /> },
        { name: "Shadow Creature", component: <ShadowCreature /> },
        { name: "Lightning Creature", component: <LightningCreature /> },
        { name: "Ice Creature", component: <IceCreature /> },
        { name: "Nature Creature", component: <NatureCreature /> },
        { name: "Metal Creature", component: <MetalCreature /> },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

  const renderComponent = () => {
    return components[activeIndex].component;
  };

  const handleLeftArrowClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (activeIndex < components.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div>
        <div className=" transition-all duration-300 ease-in-out">
        <div>{renderComponent()}</div>
      </div>

      <div className="flex justify-center items-center gap-[280px] pmx:gap-[310px] -mt-[315.5px] pmx:-mt-[410px] ">
        {/* Left Arrow (only clickable when not on the first component) */}
        <button
          onClick={handleLeftArrowClick}
          disabled={activeIndex === 0} // Disable if on the first component
          className={`cursor-pointer p-1 bg-orange-600 rounded-full hover:text-gray-700 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <FaChevronLeft size={16} />
        </button>

        {/* Right Arrow (only clickable when not on the last component) */}
        <button
          onClick={handleRightArrowClick}
          disabled={activeIndex === components.length - 1} // Disable if on the last component
          className={`cursor-pointer p-1 bg-orange-600 rounded-full hover:text-gray-700 ${activeIndex === components.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <FaChevronRight size={16} />
        </button>
      </div>
     </div>
  )
}

export default Characters