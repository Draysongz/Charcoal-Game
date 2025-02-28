import React from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const PlayForest = () => {
  return (
    <div className="flex mt-4 space-x-2 spm:space-x-3 p4m:space-x-3 forest w-[100%] flex-auto justify-center text-white">
      <div
        className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
        style={{ background: "linear-gradient(to bottom, #5FBB98, #2B5545)" }}
      >
        <div className="flex justify-center gap-1 ratings mb-1">
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>

        <div className="">
          <img
            src="/images/Frog2.png"
            alt="frog king"
            className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px] Imgs"
            style={{ backgroundSize: "100% 100%" }}
          />
        </div>
        <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
          <p>frog</p>
          <p className="-mt-[8px]">king</p>
        </div>
        <div className="text-center bg-gray-500 bg-opacity-45 w-[95px] pmx:w-[120px] spm:w-[120px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
          Available for Play
        </div>
        <div className="flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB justify-center">
          <span className="text-orange-600 me-3 mt-1">pwr 5 / 10</span>
          <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
          <img
            src="/images/targetNB.png"
            alt="target"
            className="w-5 h-5 mt-1 me-1"
          />
          <span className="mt-[5px]">200k</span>
        </div>
      </div>

      <div
        className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
        style={{ background: "linear-gradient(to bottom, #5FBB98, #2B5545)" }}
      >
        <div className="flex justify-center gap-1 ratings mb-1">
          {/* <FaStar /> */}
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>

        <div className="rounded-md">
          <img
            src="/images/EarthFairy.png"
            alt="earth fairy"
            className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px] Imgs"
            style={{ backgroundSize: "100% 100%" }}
          />
        </div>
        {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
          <CircularProgress
            value={97}
            color="yellow"
            trackColor="#000003"
            thickness="5px"
            size="90px"
            label="30%"
          >
            <CircularProgressLabel fontSize="14px">
              <MdOutlineTimer className="text-[22px] ms-[34px]" />
              05:52:30
            </CircularProgressLabel>
          </CircularProgress>
        </div> */}
        <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
          <p>nature</p>
          <p className="-mt-[8px]">creature</p>
        </div>
        <div className="text-center bg-gray-500 bg-opacity-45 w-[95px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] pmx:w-[110px] spm:w-[110px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
          LVL X Required
        </div>
        <div className="flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white justify-center">
          <span className="text-orange-600 me-3 mt-1 span1">pwr 0 / 10</span>
          <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
          <img
            src="/images/targetNB.png"
            alt="target"
            className="w-5 h-5 mt-1 me-1"
          />
          <span className="mt-[5px]">50k</span>
        </div>
      </div>
    </div>
  );
};

export default PlayForest;
