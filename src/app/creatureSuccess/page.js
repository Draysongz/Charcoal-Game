import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import Header from '../components/header';
import { StarRating } from '../components/StarRatings';

const CreatureSuccess = () => {
  return (
    <div className="bg-black min-h-screen w-screen text-white">
        <Header />
      <div className="flex flex-col items-center h-[92vh] overflow-y-auto" style={{ height: "calc(98vh - 130px)" }}>
        <StarRating />
        <div
          className="p-3 w-[350px] -mb-10 pmx:-mb-14 pmx:w-[390px] rounded-lg"
          style={{ background: "linear-gradient(to bottom, #5FBB98, #2B5545)" }}
        >
          <div>
            <img
              src="/images/Frog2.png"
              alt="frog king"
              className="w-full h-[350px] rounded-md"
              style={{ backgroundSize: "100% 100%" }}
            />
          </div>
        </div>

        <div className="grid-row-3 w-[350px] pmx:w-[390px] text-[45px] pmx:text-[60px] mt-1 p-1 pmx:p-2 text-center">
          <span className="text-[12px] pmx:text-[13px] uppercase">
            you have successfully ranked up
          </span>
          <p className="grid font-bold -mt-7 pmx:-mt-10 text-orange-600 uppercase">
            frog king
          </p>
          <span className="grid text-[12px] pmx:text-[13px] uppercase -mt-3 pmx:-mt-[19px]">
            creature
          </span>
        </div>

        {/* <div className="w-[350px] pmx:w-[390px] ms-[12px] uppercase mt-2">
          <p className="uppercase text-orange-800 pmx:text-[17px] font-bold mb-2">
            prices
          </p>
          <div className="flex items-center gap-2 pmx:gap-3">
            <div className="flex bg-[#f15b0626] bg-opacity-5 rounded-full p-1 pmx:p-1 px-2 w-[110px] pmx:w-[189px] items-center">
              <div className="ms-2 pmx:ms-3">
                <img
                  src="/images/CoinCNB.png"
                  alt="hour glass"
                  className="w-8 h-7 pmx:w-9 pmx:h-8"
                />
              </div>
              <p className="text-[#F15B06] font-bold text-[13px] pmx:text-[14px]">
                {" "}
                1000+
              </p>
            </div>

            <div className="flex items-center bg-[#f15b0626] bg-opacity-5 rounded-full p-1 pmx:p-2 px-2 w-[110px] pmx:w-[189px]">
              <div className="ms-2 pmx:ms-3">
                <img
                  src="images/CharcoalNB.png"
                  alt="meter"
                  className="w-8 h-7 pmx:w-9 pmx:h-8"
                />
              </div>
              <p className="text-[#F15B06] font-bold text-[13px] pmx:text-[14px]">
                {" "}
                1000+
              </p>
            </div>

            <div className="flex items-center bg-[#f15b0626] bg-opacity-5 rounded-full p-1 pmx:p-2 px-2 w-[110px] pmx:w-[189px]">
              <div className="ms-2 pmx:ms-3">
                <img
                  src="images/EmberNB.png"
                  alt="meter"
                  className="w-8 h-7 pmx:w-9 pmx:h-8"
                />
              </div>
              <p className="text-[#F15B06] font-bold text-[13px] pmx:text-[14px]">
                {" "}
                1000+
              </p>
            </div>
          </div>
        </div> */}

        <div className="bg-[#8E9BB3] w-[150px] rounded-full mt-7">
          <div className="p-2 font-bold text-[12px] text-center uppercase">
            <p>continue</p>
          </div>
        </div>
      </div>

      <div className="bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between">
        <div>
          <Link href="/" className="text-white">
            {" "}
            <GoHome className="text-[20px] ms-3" /> home
          </Link>
        </div>
        <div>
          <Link href="/earn" className="text-white">
            {" "}
            <LiaDollarSignSolid className="text-[20px] ms-3" /> earn
          </Link>
        </div>
        <div className="underline decoration-orange-600 decoration-4 underline-offset-[18px]">
          <Link href="/play" className="text-white">
            {" "}
            <IoGameControllerOutline className="text-[20px] ms-2" /> play
          </Link>
        </div>
        <div>
          <Link href="frens" className="text-white">
            {" "}
            <HiMiniUserGroup className="text-[20px] ms-3" /> frens
          </Link>
        </div>
        <div>
          <Link href="/shop" className="text-white">
            {" "}
            <BsShopWindow className="text-[20px] ms-2" /> shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreatureSuccess