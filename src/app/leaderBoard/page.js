"use client"

import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import { FaMedal } from "react-icons/fa";
import { useState } from "react";
import LevelOne from '../components/levelOne';
import LevelTwo from '../components/levelTwo';
import LevelThree from '../components/levelThree';
import LevelFour from '../components/levelFour';
import LevelFive from '../components/levelFive';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LevelSix from '../components/levelSix';
import LevelSeven from '../components/levelSeven';
import LevelEight from '../components/levelEight';
import LevelNine from '../components/levelNine';
import LevelTen from '../components/levelTen';
import LevelEleven from '../components/levelEleven';
import LevelTwelve from '../components/levelTwelve';
import LevelThirteen from '../components/levelThirteen';
import LevelFifteen from '../components/levelFifteen';
import LevelFourteen from '../components/levelFourteen';

const LeaderBoard = () => {
  const components = [
    { name: "Level One", component: <LevelOne /> },
    { name: "Level Two", component: <LevelTwo /> },
    { name: "Level Three", component: <LevelThree /> },
    { name: "Level Four", component: <LevelFour /> },
    { name: "Level Five", component: <LevelFive /> },
    { name: "Level Six", component: <LevelSix /> },
    { name: "Level Seven", component: <LevelSeven /> },
    { name: "Level Eight", component: <LevelEight /> },
    { name: "Level Nine", component: <LevelNine /> },
    { name: "Level Ten", component: <LevelTen /> },
    { name: "Level Eleven", component: <LevelEleven /> },
    { name: "Level Twelve", component: <LevelTwelve /> },
    { name: "Level Thirteen", component: <LevelThirteen /> },
    { name: "Level Fourteen", component: <LevelFourteen /> },
    { name: "Level Fifteen", component: <LevelFifteen /> },
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
    <div className='min-h-screen bg-black'>
     <div className='mt- flex h-8 justify-around'>
        <Link href="/coin" className='relative'>
            <img src='/images/CoinCNB.png' alt='coin' className='z-1 w-14 absolute pmx:w-16'/>
            <div className='rounded-e-full text-white bg-orange-600 z-10  mt-4 pmx:mt-5
            ms-6 pmx:ms-8 text-[12px] pe-10 ps-6 py-[2px] flex-grow-1'>
                500,000,000
            </div>
        </Link>

        <div className='relative'>
            <img src='/images/CharcoalNB.png' alt='charcoal' className='w-14 absolute pmx:w-16'/>
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600'>
                1,000+
            </div>
        </div>

        <div className='relative'>
            <img src='/images/EmberNB.png' alt='ember' className='w-14 h-14 absolute pmx:w-16 pmx:h-16'/>
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600'>
                1,000+
            </div>
        </div>
      </div>

      <div className=" transition-all duration-300 ease-in-out">
        <div>{renderComponent()}</div>
      </div>

      <div className="flex justify-center items-center gap-36 pmx:gap-72 -mt-[460px] pmx:-mt-[600px] spm:-mt-[530px] spm:gap-[270px]">
        {/* Left Arrow (only clickable when not on the first component) */}
        <button
          onClick={handleLeftArrowClick}
          disabled={activeIndex === 0} // Disable if on the first component
          className={`cursor-pointer p-4  rounded-full hover:text-gray-600 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Arrow (only clickable when not on the last component) */}
        <button
          onClick={handleRightArrowClick}
          disabled={activeIndex === components.length - 1} // Disable if on the last component
          className={`cursor-pointer p-4 rounded-full hover:text-gray-600 ${activeIndex === components.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className='bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between'>
       <div className='underline decoration-orange-600 decoration-4 underline-offset-[18px]'>
         <Link href="/" className='text-white'> <GoHome className='text-[20px] ms-3'/> home</Link>
       </div>
       <div>
         <Link href="/earn" className='text-white'> <LiaDollarSignSolid className='text-[20px] ms-3' /> earn</Link>
       </div>
       <div>
         <Link href="/play" className='text-white'> <IoGameControllerOutline className='text-[20px] ms-2' /> play</Link>
       </div>
       <div>
         <Link href="frens" className='text-white'> <HiMiniUserGroup className='text-[20px] ms-3' /> frens</Link>
       </div>
       <div>
         <Link href="/shop" className='text-white'> <BsShopWindow className='text-[20px] ms-2' /> shop</Link>
       </div>
    </div>
    </div>
  )
}

export default LeaderBoard