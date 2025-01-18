"use client";

import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import { FaMedal } from "react-icons/fa";
import React, { useState } from "react";
 import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../components/header";

const levels = [
  { name: "fire ascent", image: "/images/Level4.png", number: "1" },
  { name: "ember cup", image: "/images/Level2.png", number: "2" },
  { name: "charcoal citadel", image: "/images/Level3.png", number: "3" },
  { name: "goblet of flame", image: "/images/Level1.png", number: "4" },
  { name: "blaze of glory", image: "/images/Level1.png", number: "5" },
  { name: "ashen crown", image: "/images/Level1.png", number: "6" },
  { name: "burning sanctuary", image: "/images/Level1.png", number: "7" },
  { name: "searing shadow", image: "/images/Level1.png", number: "8" },
  { name: "crymson pyre", image: "/images/Level1.png", number: "9" },
  { name: "molten pathway", image: "/images/Level1.png", number: "10" },
  { name: "charred ruins", image: "/images/Level1.png", number: "11" },
  { name: "phoenix chalice", image: "/images/Level1.png", number: "12" },
  { name: "flame bound fortress", image: "/images/Level1.png", number: "13" },
  { name: "diamond ember", image: "/images/Level1.png", number: "14" },
  { name: "goblet of eternal fire", image: "/images/Level1.png", number: "15" },
];

const leaderBoard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirstLevel = currentIndex === 0;
  const isLastLevel = currentIndex === levels.length - 1;

  const handlePrevious = () => {
    if (!isFirstLevel) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLastLevel) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const currentLevel = levels[currentIndex];

  return (
    <div className="w-[100%] min-h-screen lvs bg-black text-white ">
      <Header />
      <div
        className="flex flex-col items-center overflow-y-auto text-white"
        style={{ height: "calc(90vh - 80px)" }}
      >
        <h3 className="uppercase font-bold mb-1">
          level {currentLevel.number}
        </h3>

        {/* Level Navigation Arrows And Image */}
        <div className="flex justify-between w-[300px] mb-2 items-center">
          <button
            onClick={handlePrevious}
            disabled={isFirstLevel}
            className={`text-3xl ${
              isFirstLevel ? "text-gray-500" : "text-white"
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* LEVEL IMAGE */}
          <div className="bg-[#F15B06] w-40 rounded-[40px] p-2 pmx:w-[300px] spm:w-[290px] borImg">
            <img
              src={currentLevel.image}
              alt={`level ${currentLevel.number}`}
              className="w-38 rounded-[40px] pmx:w-[290px] spm:w-[280px]"
            />
          </div>

          <button
            onClick={handleNext}
            disabled={isLastLevel}
            className={`text-3xl ${
              isLastLevel ? "text-gray-500" : "text-white"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Level Price */}
        <div className="flex items-center gap-2 justify-center bg-[#666666] mt-3 w-[330px] rounded-full p-2 pmx:mt-5 pmx:p-3 pmx:w-[370px] spm:w-[345px] mb-2">
          <span className="">
            <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6" />
          </span>
          <span className="text-[12px]">100 / 2000</span>
        </div>

        {/* Level Name */}
        <div className="mb-2 flex flex-col items-center w-[100%]">
          <div className="text-center">
            <h3 className="uppercase font-bold pmx:mb-1 spm:mb-1">
              {currentLevel.name}
            </h3>
          </div>
          <div className="bg-[#F15B06] mt-3 w-[90%] rounded-full border-2 border-white flex items-center px-5 justify-between">
            <div className="p-[7px]">
              <p className="text-[13px] pmx:text-[14px]">
                You Currently rank at
              </p>
              <div className="flex items-center">
                <img
                  src="/images/CoinCNB.png"
                  alt="coin"
                  className="w-5 h-5 pmx:w-6 pmx:h-5"
                />
                <span className="coinBal text-[12px] pmx:text-[12px]">100 coin</span>
              </div>
            </div>
            <span className="text-[12px] font-bold coinBal2">120</span>
          </div>

          <div className="bg-[#FFFFFF1A] mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
            <div className="flex items-center justify-between w-[100%]">
              <div className="flex items-center">
                <FaMedal className="text-orange-400 me-4 mt-[2px]" />
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 bg-white rounded-full p-2 "></span>
                  <p className="text-[12px] pmx:text-[14px] pmx:leading-4">
                    Behrooz
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-[12px] me-2">20.3M</p>
                <span>
                  <img
                    src="/images/CoinCNB.png"
                    alt="coin"
                    className="w-5 h-4"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
            <div className="flex items-center justify-between w-[100%]">
              <div className="flex items-center">
                <FaMedal className="text-blue-400 me-4" />
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 bg-white rounded-full p-2 "></span>
                  <p className="text-[12px] pmx:text-[14px] pmx:leading-4">
                    Behrooz
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-[12px] me-2">20.3M</p>
                <span>
                  <img
                    src="/images/CoinCNB.png"
                    alt="coin"
                    className="w-5 h-4"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
            <div className="flex items-center justify-between w-[100%]">
              <div className="flex items-center">
                <FaMedal className="text-orange-900 me-4" />
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 bg-white rounded-full p-2 "></span>
                  <p className="text-[12px] pmx:text-[14px] pmx:leading-4">
                    Behrooz
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-[12px] me-2">20.3M</p>
                <span>
                  <img
                    src="/images/CoinCNB.png"
                    alt="coin"
                    className="w-5 h-4"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
            <div className="flex items-center justify-between w-[100%]">
              <div className="flex items-center">
                <p className="me-4 text-[12px]">#4</p>
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 bg-white rounded-full p-2 "></span>
                  <p className="text-[12px] pmx:text-[14px] pmx:leading-4">
                    Behrooz
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-[12px] me-2">20.3M</p>
                <span>
                  <img
                    src="/images/CoinCNB.png"
                    alt="coin"
                    className="w-5 h-4"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
            <div className="flex items-center justify-between w-[100%]">
              <div className="flex items-center">
                <p className="me-4 text-[12px]">#5</p>
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 bg-white rounded-full p-2 "></span>
                  <p className="text-[12px] pmx:text-[14px] pmx:leading-4">
                    Behrooz
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-[12px] me-2">20.3M</p>
                <span>
                  <img
                    src="/images/CoinCNB.png"
                    alt="coin"
                    className="w-5 h-4"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between">
        <div className="underline decoration-orange-600 decoration-4 underline-offset-[18px]">
          <Link href="/" className="text-white">
            <GoHome className="text-[20px] ms-3" /> home
          </Link>
        </div>
        <div>
          <Link href="/earn" className="text-white">
            <LiaDollarSignSolid className="text-[20px] ms-3" /> earn
          </Link>
        </div>
        <div>
          <Link href="/play" className="text-white">
            <IoGameControllerOutline className="text-[20px] ms-2" /> play
          </Link>
        </div>
        <div>
          <Link href="frens" className="text-white">
            <HiMiniUserGroup className="text-[20px] ms-3" /> frens
          </Link>
        </div>
        <div>
          <Link href="/shop" className="text-white">
            <BsShopWindow className="text-[20px] ms-2" /> shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default leaderBoard;

