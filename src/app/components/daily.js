import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Daily = () => {
  return (
    <div className="mt-5 p-4 w-[100%] uppercase text-[14px] font-semibold flex flex-col gap-5 text-white">
      <div className="bg-gray-800 rounded-full border-2 border-orange-600 py-2 px-5  flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="text-[25px]">
            <BsYoutube className="fill-red-600" />
          </div>
          <div className="w-[200px] flex flex-col">
            <p className="text-orange-600 text-[12px] no-wrap">
              follow our youtube
            </p>
            <div className="flex items-center gap-1">
              <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
              <span className="text-[13px]">20k</span>
            </div>
          </div>
        </div>
        <MdKeyboardArrowRight className="text-[20px] text-white" />
      </div>
      <div className="bg-gray-800 rounded-full border-2 border-orange-600 py-2 px-5  flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-[25px]">
            <FaTwitter className="text-blue-600" />
          </div>
          <div className="w-[200px] flex flex-col">
            <p className="text-orange-600 text-[12px] no-wrap">
              follow our twitter
            </p>
            <div className="flex items-center gap-1">
              <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
              <span className="text-[13px]">20k</span>
            </div>
          </div>
        </div>
        <MdKeyboardArrowRight className="text-[20px] text-white" />
      </div>
      <div className="bg-gray-800 rounded-full border-2 border-orange-600 py-2 px-5  flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="text-[25px]">
            <FaTelegramPlane className="bg-blue-500 rounded-full p-[3px]" />
          </div>
          <div className="w-[200px] flex flex-col">
            <p className="text-orange-600 text-[12px] no-wrap">
              follow our telegram
            </p>
            <div className="flex items-center gap-1">
              <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
              <span className="text-[13px]">20k</span>
            </div>
          </div>
        </div>
        <MdKeyboardArrowRight className="text-[20px] text-white" />
      </div>
    </div>
  );
}

export default Daily