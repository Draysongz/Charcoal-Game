import React from 'react'
import { CreatureCard } from "./CreaturesCard"

const PlaySea = () => {
  return (
    <div
      className="w-[100%] mt-4 forest text-white"
    >
      <div className='flex flex-1 items-center justify-center space-x-2 spm:space-x-3 p4m:space-x-3'>
        <CreatureCard rating={3} text={"ice"} texting={"creature"} image={"/images/wolf.png"} background={"linear-gradient(to bottom, #6AE5F3, #1D4D53)"} />
        <CreatureCard rating={1} text={"water"} texting={"creature"} image={"/images/WaterFairy.png"} background={"linear-gradient(to bottom, #6AE5F3, #1D4D53)"} />
      </div>
    </div>
  );
}

export default PlaySea