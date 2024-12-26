"use client";

import React from "react";
import { CreatureCard } from "./CreaturesCard";
import { MdOutlineTimer } from "react-icons/md";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const PlayAll = () => {
  return (
    <div
      className="w-[100%] flex flex-col items-center overflow-y-auto text-white"
      style={{ height: "calc(80vh - 80px)" }}
    >
      <div
        className="flex mt-4 space-x-2 spm:space-x-3 p4m:space-x-3 forest"
      >
        <CreatureCard rating={1} text={"frog"} texting={"king"} image={"/images/Frog2.png"} background={"linear-gradient(to bottom, #5FBB98, #2B5545)"} />
        <CreatureCard rating={1} text={"water"} texting={"creature"} image={"/images/WaterFairy.png"} background={"linear-gradient(to bottom, #6AE5F3, #1D4D53)"} />
      </div>

      <div className="flex mt-2 space-x-2 spm:space-x-3 p4m:space-x-3 forest">
        <CreatureCard rating={1} text={"ice"} texting={"creature"} image={"/images/wolf.png"} background={"linear-gradient(to bottom, #6AE5F3, #1D4D53)"} />
        <CreatureCard rating={2} text={"nature"} texting={"creature"} image={"/images/EarthFairy.png"} background={"linear-gradient(to bottom, #5FBB98, #2B5545)"} />
      </div>

      <div className="flex mt-2 space-x-2 spm:space-x-3 p4m:space-x-3 forest">
        <CreatureCard rating={3} text={"earth"} texting={"creature"} image={"/images/antenna.png"} background={"linear-gradient(to bottom, #D98480, #734644)"} />
        <CreatureCard rating={2} text={"fire"} texting={"creature"} image={"/images/Flameexpand2.png"} background={"linear-gradient(to bottom, #96B4B4, #414E4E)"} />
      </div>

      <div className="flex mt-2 space-x-2 spm:space-x-3 p4m:space-x-3 forest">
        <CreatureCard rating={3} text={"lightning"} texting={"creature"} image={"/images/sojo.png"} background={"linear-gradient(to bottom, #D98480, #734644)"} />
        <CreatureCard rating={0} text={"metal"} texting={"creature"} image={"/images/batGurl.png"} background={"linear-gradient(to bottom, #D98480, #734644)"} />
      </div>

      <div className="flex mt-2 space-x-2 spm:space-x-3 p4m:space-x-3 forest">
        <CreatureCard rating={2} text={"air"} texting={"creature"} image={"/images/seadragon.png"} background={"linear-gradient(to bottom, #D98480, #734644)"} />
        <CreatureCard rating={1} text={"shadow"} texting={"creature"} image={"/images/ghost.png"} background={"linear-gradient(to bottom, #96B4B4, #414E4E)"} />
      </div>
    </div>
  );
};

export default PlayAll;
