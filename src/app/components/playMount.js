import React from 'react'
import { CreatureCard } from "./CreaturesCard"
import { MdOutlineTimer } from "react-icons/md";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const PlayMount = () => {
  return (
    <div className="mt-4 forest text-white">
      <div className="w-[100%] flex flex-col items-center justify-center">
        <div className="flex space-x-3 spm:space-x-4 p4m:space-x-5">
          <CreatureCard rating={3} text={"earth"} texting={"creature"} image={"/images/antenna.png"} background={"linear-gradient(to bottom, #D98480, #734644)"} />
          <CreatureCard rating={2} text={"air"} texting={"creature"} image={"/images/seadragon.png"} background={"linear-gradient(to bottom, #D98480, #734644)"} />
        </div>
      </div>
    </div>
  );
}

export default PlayMount