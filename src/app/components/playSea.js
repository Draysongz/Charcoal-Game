import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const PlaySea = () => {
  return (
    <div
      className="w-[100%] mt-4 forest text-white"
    >
      <div className='flex flex-1 items-center justify-center space-x-2 spm:space-x-3 p4m:space-x-3'>
        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #6AE5F3, #1D4D53)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="">
            <img
              src="/images/WaterFairy.png"
              alt="water fairy"
              className="rounded-md h-[95px] w-[150px] pmx:h-[130px] pmx:w-[170px] spm:h-[130px] spm:w-[170px] Imgs"
            />
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>water</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center uppercase bg-gray-500 bg-opacity-45 w-[70px] py-[2px] px-2 rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
            rank up
          </div>
          <div className="flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB justify-center">
            <span className="text-orange-600 me-3 mt-1 pwr">pwr 10 / 10</span>
            <span className="border-e-2 border-white me-4 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px]">50k</span>
          </div>
        </div>

        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #6AE5F3, #1D4D53)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            {/* <FaStar /> */}
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="rounded-md">
            <img
              src="/images/wolf.png"
              alt="wolf"
              className="rounded-md h-[95px] pmx:h-[130px] w-[150px] pmx:w-[170px] spm:h-[130px] spm:w-[170px] Imgs"
            />
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>ice</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[90px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] pmx:w-[110px] spm:w-[110px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
            LVL X Required
          </div>
          <div className="flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB justify-center">
            <span className="text-orange-600 me-3 mt-1 pwr">pwr 0 / 10</span>
            <span className="border-e-2 border-white me-4 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px]">100k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaySea