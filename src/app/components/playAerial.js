import React from 'react'
import { CreatureCard } from "./CreaturesCard"
import { MdOutlineTimer } from "react-icons/md";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const PlayAerial = () => {
  return (
    <div className="mt-4 forest flex text-white">
      <div className='flex w-[100%] flex-col items-center justify-center'>
        <div className="flex space-x-3 spm:space-x-4 p4m:space-x-5">
          <CreatureCard rating={2} text={"fire"} texting={"creature"} image={"/images/Flameexpand2.png"} background={"linear-gradient(to bottom, #96B4B4, #414E4E)"} />
          <CreatureCard rating={1} text={"shadow"} texting={"creature"} image={"/images/ghost.png"} background={"linear-gradient(to bottom, #96B4B4, #414E4E)"} />
        </div>
      </div>
    </div>
  );
}

export default PlayAerial