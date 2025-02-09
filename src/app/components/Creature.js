// "use client"

// import { Box } from '@chakra-ui/react';
// import React, { useState } from 'react'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { StarRating } from './StarRatings';

// const Creature = () => {
//   // List of components with their names, images, and JSX elements
//   const components = [
//     { 
//       name: "Frog King",
//       imageBg: { background: "linear-gradient(to bottom, #5FBB98, #2B5545)" },
//       // component: <FrogKing />, 
//       image: '/images/Frog2.png',
//       price: "200k",
//       pwr: "5",
//       // timer: "play",
//       potion: '/images/PotionForest.png',
//       potionName: "potion forest",
//       timerStyle: { backgroundColor: "#F15B06", color: "#FFF", border: "1px solid #FEFEFF" }
//     },
//     { 
//       name: "Fire Creature",
//       imageBg: { background: "linear-gradient(to bottom, #96B4B4, #414E4E)" },
//       // component: <FireCreature />, 
//       image: '/images/Flameexpand2.png',
//       price: "20k",
//       pwr: "0",
//       // timer: "level 10 required",
//       potion: '/images/PotionAerial.png',
//       potionName: "potion aerial",
//       timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "180px" }
//     },
//     { 
//       name: "Water Creature",
//       imageBg: { background: "linear-gradient(to bottom, #6AE5F3, #1D4D53)" },
//       // component: <WaterCreature />, 
//       image: '/images/WaterFairy.png',
//       price: "50k",
//       pwr: "10", 
//       // timer: "you own this creature",
//       potion: '/images/PotionSea.png',
//       potionName: "potion sea",
//       timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "200px" }
//     },
//     { 
//       name: "Earth Creature",
//       imageBg: { background: "linear-gradient(to bottom, #D98480, #734644)" },
//       // component: <EarthCreature />, 
//       image: '/images/antenna.png',
//       price: "20k",
//       pwr: "10",
//       // timer: "you own this creature",
//       potion: '/images/PotionMountain.png',
//       potionName: "potion mountain",
//       timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "200px" }
//     },
//     { 
//       name: "Air Creature",
//       imageBg: { background: "linear-gradient(to bottom, #D98480, #734644)" },
//       // component: <AirCreature />, 
//       image: '/images/seadragon.png',
//       price: "20k",
//       pwr: "0", 
//       // timer: "level 5 required",
//       potion: '/images/PotionMountain.png',
//       potionName: "potion mountain",
//       timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "170px" }
//     },
//     { 
//       name: "Shadow Creature",
//       imageBg: { background: "linear-gradient(to bottom, #96B4B4, #414E4E)" },
//       // component: <ShadowCreature />, 
//       image: '/images/ghost.png',
//       price: "20k",
//       pwr: "6",
//       // timer: "02:39:50",
//       potion: '/images/PotionAerial.png',
//       potionName: "potion aerial",
//       timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF" }
//     },
//     { 
//       name: "Lightning Creature",
//       imageBg: { background: "linear-gradient(to bottom, #96B4B4, #414E4E)" },
//       // component: <LightningCreature />, 
//       image: '/images/sojo.png', 
//       price: "20k",
//       pwr: "1",
//       // timer: "play",
//       potion: '/images/PotionAerial.png',
//       potionName: "potion mountain",
//       timerStyle: { backgroundColor: "#F15B06", color: "#FFF", border: "1px solid #FEFEFF" }
//     },
//     { 
//       name: "Ice Creature",
//       imageBg: { background: "linear-gradient(to bottom, #6AE5F3, #1D4D53)" },
//       // component: <IceCreature />, 
//       image: '/images/wolf.png',
//       price: "100k",
//       pwr: "0",
//       // timer: "level 10 required",
//       potion: '/images/PotionSea.png',
//       potionName: "potion sea",
//       timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "180px" }
//     },
//     { 
//       name: "Nature Creature",
//       imageBg: { background: "linear-gradient(to bottom, #5FBB98, #2B5545)" },
//       // component: <NatureCreature />, 
//       image: '/images/EarthFairy.png', 
//       price: "50k",
//       pwr: "0",
//       // timer: "level 2 required",
//       potion: '/images/PotionForest.png',
//       potionName: "potion forest",
//       timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF", width: "170px" }
//     },
//     { 
//       name: "Metal Creature",
//       imageBg: { background: "linear-gradient(to bottom, #D98480, #734644)" },
//       // component: <MetalCreature />, 
//       image: '/images/batGurl.png',
//       price: "20k",
//       pwr: "4",
//       // timer: "02:39:50",
//       potion: '/images/PotionMountain.png',
//       potionName: "potion mountain",
//       timerStyle: { backgroundColor: "#8E9BB3", color: "#FFF", border: "1px solid #FEFEFF" }
//     },
//   ];

//   // State to track the selected component index
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Function to handle left button click (decrease index)
//   const handleLeftClick = () => {
//     setSelectedIndex((prevIndex) => (prevIndex === 0 ? components.length - 1 : prevIndex - 1));
//   };

//   // Function to handle right button click (increase index)
//   const handleRightClick = () => {
//     setSelectedIndex((prevIndex) => (prevIndex === components.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div
//       className="play h-screen w-screen overflow-y-auto"
//        style={{ height: "calc(98vh - 130px)" }}
//     >
//       <div className="h-[100vh] w-[100%] bg-red flex flex-col items-center -mt-12">
//         <div
//           className="p-3 w-[90%] rounded-lg mt-16"
//           style={components[selectedIndex].imageBg}
//         >
//           <StarRating />

//           <div className="flex uppercase text-[14px] pmx:text-[15px] font-bold bg-orange-600 p-[1px] spm:text-[15px] text-white justify-between">
//             <div className='flex ms-6'>
//               <img
//                 src="/images/targetNB.png"
//                 alt="target"
//                 className="w-6 h-6 mt-1 "
//               />
//               <p className="mt-[4.7px]">{components[selectedIndex].price}</p>
//             </div>
//             <p className="mt-1 me-6 pwr">PWR {components[selectedIndex].pwr} / 10</p>
//           </div>

//           <Box
//             bgImage={components[selectedIndex].image}
//             bgRepeat={"no-repeat"}
//             bgSize={"100% 100%"}
//             w={"100%"}
//             h={"300px"}
//             sx={{
//               // "@media (min-height: 780px) and (max-height: 852px)": {
//               //   h: "195px",
//               // },
//               // "@media (min-height: 812px) and (max-height: 820px)": {
//               //   h: "250px",
//               // },
//               // "@media (min-height: 840px) and (max-height: 844px)": {
//               //   h: "300px",
//               // },
//               // "@media (min-height: 926px) and (max-height: 932px)": {
//               //   h: "360px",
//               // },
//               "@media (min-height: 1040px) and (max-height: 1180px)": {
//                 h: "370px",
//               },
//             }}
//           />
//         </div>

//         {/* Navigation Section */}
//         <div className="flex justify-between w-[90%] bg-gray-700 mt-2 rounded-full p-1 pmx:p-2">
//           {/* Left Arrow - Disable when at the first creature */}
//           <button
//             className={`cursor-pointer p-1 bg-orange-600 rounded-full hover:text-gray-700 ${
//               selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             onClick={handleLeftClick}
//             disabled={selectedIndex === 0}
//           >
//             <FaChevronLeft size={16} />
//           </button>

//           <p className="font-bold ms-[30px] me-[30px] pmx:ms-[30px] pmx:me-[30px] text-orange-600 uppercase">
//             {components[selectedIndex].name}
//           </p>

//           {/* Right Arrow - Disable when at the last creature */}
//           <button
//             className={`cursor-pointer p-1 bg-orange-600 rounded-full hover:text-gray-700 ${
//               selectedIndex === components.length - 1
//                 ? "opacity-50 cursor-not-allowed"
//                 : ""
//             }`}
//             onClick={handleRightClick}
//             disabled={selectedIndex === components.length - 1}
//           >
//             <FaChevronRight size={16} />
//           </button>
//         </div>

//         {/* Timer and Resource Section */}
//         <div className="flex items-center w-[90%] uppercase gap-7 pmx:gap-3 mt-2">
//           <div className="flex border-2 border-orange-600 rounded-full p-1 pmx:p-2 px-2 w-[50%]">
//             <div className="flex flex-1 items-center justify-center px-1">
//               <img
//                 src="/images/hourglassNB.png"
//                 alt="hour glass"
//                 className="w-6 h-6 pmx:w-7 pmx:h-7"
//               />
//               <p className="text-orange-600 font-bold text-[12px]"> = 4hrs</p>
//             </div>
//           </div>

//           <div className="flex border-2 border-orange-600 rounded-full p-1 pmx:p-2 px-2 w-[50%]">
//             <div className="flex flex-1 items-center justify-center px-1">
//               <img
//                 src="images/MeterNB.png"
//                 alt="meter"
//                 className="w-6 h-6 pmx:w-7 pmx:h-7"
//               />
//               <p className="text-orange-600 font-bold text-[12px] mt-[2px]">
//                 {" "}
//                 = regular
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Creature Info Section */}
//         <div className="w-[90%]  bg-gray-700 mt-2 rounded-full pmx:p-1">
//           <div className="flex justify-center items-center">
//             <img
//               src="/images/presentNB.png"
//               alt="present"
//               className="w-6 h-7 pmx:w-7 pmx:h-8"
//             />
//             <p className="ms-1 me-1">=</p>
//             <img
//               src="/images/CoinCNB.png"
//               alt="coin"
//               className="w-6 h-6 pmx:w-7 pmx:h-7"
//             />
//             <img
//               src="/images/CharcoalNB.png"
//               alt="charcoal"
//               className="w-6 h-6 pmx:w-7 pmx:h-7"
//             />
//             <img
//               src="/images/EmberNb.png"
//               alt="ember"
//               className="w-6 h-6 pmx:w-7 pmx:h-7"
//             />
//           </div>
//         </div>

//         {/* Description Section */}
//         <Box className="w-[90%] border-2 border-orange-600 rounded-xl p-2 mt-2">
//           <p className="text-orange-600 uppercase font-bold text-[15px]">
//             description
//           </p>
//           <div>
//             <p className="text-[15px] text-white">
//               {components[selectedIndex].name} is a mighty creature, full of
//               power and potential. This creature thrives in its environment and
//               brings forth elemental magic. Legends say that these creatures can
//               manipulate the forces of nature with ease, bringing forth
//               devastation or protection depending on the user’s will.
//             </p>
//           </div>
//         </Box>

//         {/* Potion & Rank up Section */}
//         <Box
//           className={`potion-container relative flex flex-col items-center w-[100%] mt-3 pmx:mt-4 ${
//             selectedIndex === 1 ? "level-timer" : ""
//           } ${selectedIndex === 2 ? "own-timer" : ""} ${
//             selectedIndex === 3 ? "own-timer" : ""
//           } ${selectedIndex === 4 ? "level-timer" : ""} ${
//             selectedIndex === 7 ? "level-timer" : ""
//           } ${selectedIndex === 8 ? "level-timer" : ""}`}
//           // style={components[selectedIndex].timerStyle}
//         >
//          <img
//            src={components[selectedIndex].potion}
//            alt={components[selectedIndex].potionName}
//            aria-label={components[selectedIndex].potionName}
//            className="w-12 h-9 flex-1 self-start absolute left-4"
//          />
//          <div className='rounded-md absolute bg-[#8E9BB3] py-[0.5px] px-[3px] text-white font-semibold text-[13px] left-[50px] top-6' id='amount-counter'>1000+</div>
//          <div className="p-2 font-bold text-[14px] text-center w-[95px] rounded-full bg-[#F15B06] border-white border-2 text-white">
//            <p>Rank Up</p>
//          </div>
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default Creature;


"use client"

import { Box } from "@chakra-ui/react";
import React, { useReducer } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { StarRating } from "./StarRatings";

const components = [
  {
    name: "Frog King",
    imageBg: "linear-gradient(to bottom, #5FBB98, #2B5545)",
    image: "/images/Frog2.png",
    price: "200k",
    pwr: "5",
    potion: "/images/PotionForest.png",
    potionName: "potion forest",
    status: "Rank Up"
  },
  {
    name: "Fire Creature",
    imageBg: "linear-gradient(to bottom, #96B4B4, #414E4E)",
    image: "/images/Flameexpand2.png",
    price: "20k",
    pwr: "0",
    potion: "/images/PotionAerial.png",
    potionName: "potion aerial",
    status: "Level X Required"
  },
  { 
    name: "Water Creature",
    imageBg: "linear-gradient(to bottom, #6AE5F3, #1D4D53)",
    image: '/images/WaterFairy.png',
    price: "50k",
    pwr: "10",
    potion: '/images/PotionSea.png',
    potionName: "potion sea",
    status: "You own this creature"
  },
  { 
    name: "Earth Creature",
    imageBg: "linear-gradient(to bottom, #D98480, #734644)",
    image: '/images/antenna.png',
    price: "20k",
    pwr: "10",
    potion: '/images/PotionMountain.png',
    potionName: "potion mountain",
    status: "You own this creature"
  },
  { 
    name: "Air Creature",
    imageBg: "linear-gradient(to bottom, #D98480, #734644)",
    image: '/images/seadragon.png',
    price: "20k",
    pwr: "0",
    potion: '/images/PotionMountain.png',
    potionName: "potion mountain",
    status: "Level X Required"
  },
  { 
    name: "Shadow Creature",
    imageBg: "linear-gradient(to bottom, #96B4B4, #414E4E)",
    image: '/images/ghost.png',
    price: "20k",
    pwr: "6",
    potion: '/images/PotionAerial.png',
    potionName: "potion aerial",
    status: "02:39:50"
  },
  { 
    name: "Lightning Creature",
    imageBg: "linear-gradient(to bottom, #96B4B4, #414E4E)",
    image: '/images/sojo.png', 
    price: "20k",
    pwr: "1",
    potion: '/images/PotionAerial.png',
    potionName: "potion mountain",
    status: "Rank Up"
  },
  { 
    name: "Ice Creature",
    imageBg: "linear-gradient(to bottom, #6AE5F3, #1D4D53)",
    image: '/images/wolf.png',
    price: "100k",
    pwr: "0",
    potion: '/images/PotionSea.png',
    potionName: "potion sea",
    status: "Level X Required"
  },
  { 
    name: "Nature Creature",
    imageBg: "linear-gradient(to bottom, #5FBB98, #2B5545)",
    image: '/images/EarthFairy.png', 
    price: "50k",
    pwr: "0",
    potion: '/images/PotionForest.png',
    potionName: "potion forest",
    status: "Level X Required"
  },
  { 
    name: "Metal Creature",
    imageBg: "linear-gradient(to bottom, #D98480, #734644)",
    image: '/images/batGurl.png',
    price: "20k",
    pwr: "4",
    potion: '/images/PotionMountain.png',
    potionName: "potion mountain",
    status: "02:39:50"
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return state.index < components.length - 1 ? { index: state.index + 1 } : state;
    case "PREV":
      return state.index > 0 ? { index: state.index - 1 } : state;
    default:
      return state;
  }
};

const Creature = () => {
  const [state, dispatch] = useReducer(reducer, { index: 0 });
  const currentCreature = components[state.index];

  return (
    <div className="play h-screen w-screen overflow-y-auto" style={{ height: "calc(98vh - 130px)" }}>
      <div className="h-[100vh] w-[100%] flex flex-col items-center">
          <StarRating />
        <div className="p-3 w-[90%] rounded-lg" style={{ background: currentCreature.imageBg }}>
          <CreatureDetails creature={currentCreature} />
        </div>

        <NavigationButtons dispatch={dispatch} index={state.index} />

        <TimerResources creature={currentCreature} />

        <IconsInfo creature={currentCreature} />

        <Description creature={currentCreature} />

        <PotionSection creature={currentCreature} />
      </div>
    </div>
  );
};

const CreatureDetails = ({ creature }) => (
  <>
    <div className="flex uppercase text-[14px] font-bold bg-orange-600 p-[1px] text-white justify-between">
      <div className="flex ms-6">
        <img src="/images/targetNB.png" alt="target" className="w-6 h-6 mt-1" />
        <p className="mt-[4.7px]">{creature.price}</p>
      </div>
      <p className="mt-1 me-6">PWR {creature.pwr} / 10</p>
    </div>
    <Box bgImage={creature.image} bgSize="100% 100%" w="100%" h="300px" sx={{ "@media (min-height: 1040px) and (max-height: 1180px)": { h: "370px" } }} />
  </>
);

const NavigationButtons = ({ dispatch, index }) => (
  <div className="flex justify-between w-[90%] bg-gray-800 mt-2 rounded-full p-1">
    <button
      className={`p-1 bg-orange-600 rounded-full ${index === 0 ? 'opacity-50' : ''}`}
      onClick={() => dispatch({ type: "PREV" })}
      disabled={index === 0}
    >
      <FaChevronLeft size={16} />
    </button>
    <p className="font-bold text-orange-600 uppercase">{components[index].name}</p>
    <button
      className={`p-1 bg-orange-600 rounded-full ${index === components.length - 1 ? 'opacity-50' : ''}`}
      onClick={() => dispatch({ type: "NEXT" })}
      disabled={index === components.length - 1}
    >
      <FaChevronRight size={16} />
    </button>
  </div>
);

const TimerResources = ({ creature }) => (
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
);

const IconsInfo = ({ creature }) => (
  <div className="w-[90%] border-2 border-orange-600 mt-2 rounded-full pmx:p-1">
   <div className="flex justify-center items-center text-orange-600">
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
       src="/images/EmberNB.png"
       alt="ember"
       className="w-6 h-6 pmx:w-7 pmx:h-7"
     />
   </div>
 </div>
);

const Description = ({ creature }) => (
  <Box className="w-[90%] border-2 border-orange-600 rounded-xl p-2 mt-2">
    <p className="text-orange-600 uppercase font-bold text-[15px]">
      description
    </p>
    <div>
      <p className="text-[15px] text-white">
        {creature.name} is a mighty creature, full of
        power and potential. This creature thrives in its environment and
        brings forth elemental magic. Legends say that these creatures can
        manipulate the forces of nature with ease, bringing forth
        devastation or protection depending on the user’s will.
      </p>
    </div>
  </Box>
);

const PotionSection = ({ creature }) => (
  <Box className="potion-container relative flex flex-col items-center w-[100%] mt-3">
    {creature.status === "Rank Up" && (
      <>
        <img src={creature.potion} alt={creature.potionName} className="w-12 h-9 absolute left-2" />
        <div className="rounded-md bg-[#8E9BB3] py-[0.5px] px-[3px] text-white font-semibold text-[13px] absolute left-11 top-5">1000+</div>
      </>
    )}
    <div
      className={`p-2 font-bold text-[14px] text-center uppercase rounded-full border-2 text-white
        ${creature.status === "You own this creature" ? "bg-[#8E9BB3] border-white w-[250px]" : ""}
        ${creature.status === "Available for Play" ? "bg-[#8E9BB3] border-white w-[250px]" : ""}
        ${creature.status === "Rank Up" ? "bg-[#F15B06] border-white w-[120px]" : ""}
        ${creature.status.includes("02:39:50") ? "bg-[#8E9BB3] border-white w-[250px]" : ""}
        ${creature.status.includes("Level") ? "bg-[#8E9BB3] border-white w-[250px]" : ""}`}
    >
      {creature.status}
    </div>
  </Box>
);

export default Creature;
