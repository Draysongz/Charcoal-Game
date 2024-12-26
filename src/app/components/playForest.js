import React from 'react'
import { CreatureCard } from "./CreaturesCard"
import { MdOutlineTimer } from "react-icons/md";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const PlayForest = () => {
  return (
    <div className="flex mt-4 space-x-3 spm:space-x-4 p4m:space-x-5 forest w-[100%] flex-auto justify-center text-white">
      <CreatureCard rating={3} text={"frog"} texting={"king"} image={"/images/Frog2.png"} background={"linear-gradient(to bottom, #5FBB98, #2B5545)"} />
      <CreatureCard rating={2} text={"nature"} texting={"creature"} image={"/images/EarthFairy.png"} background={"linear-gradient(to bottom, #5FBB98, #2B5545)"} />
    </div>
  );
}

export default PlayForest