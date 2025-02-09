import React from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const PlayAerial = () => {
  return (
    <div className="forest text-white overflow-y-auto" style={{ height: "calc(80vh - 93px)" }}>
      <div className='flex w-[100%] flex-col items-center justify-center mt-4'>
        <div className="flex space-x-2 spm:space-x-3 p4m:space-x-3">
          <div
            className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
            style={{
              background: "linear-gradient(to bottom, #96B4B4, #414E4E)",
            }}
          >
            <div className="flex justify-center gap-1 ratings mb-1">
              {/* <FaStar /> */}
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>

            <div className="">
              <img
                src="/images/Flameexpand2.png"
                alt="fire creature"
                className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              />
            </div>
            {/* <div className='absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer'>
                 <CircularProgress value={97} color='yellow' trackColor='#000003' thickness='5px' size='90px' label="30%" >
                 <CircularProgressLabel fontSize="14px">   
                  <MdOutlineTimer className='text-[22px] ms-[34px]' />
                    05:52:30
                 </CircularProgressLabel>
                 </CircularProgress>
            </div> */}
            <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
              <p>fire</p>
              <p className="-mt-[8px]">creature</p>
            </div>
            <div className="text-center bg-gray-500 bg-opacity-45 w-[95px] pmx:w-[110px] spm:w-[110px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
              LVL X Required
            </div>
            <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
              <span className="text-orange-600 me-3 mt-1 span1">pwr 0 / 10</span>
              <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
              <img
                src="/images/targetNB.png"
                alt="target"
                className="w-5 h-5 mt-1 me-1"
              />
              <span className="mt-[5px] ">20k</span>
            </div>
          </div>

          <div
            className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
            style={{
              background: "linear-gradient(to bottom, #96B4B4, #414E4E)",
            }}
          >
            <div className="flex justify-center gap-1 ratings mb-1">
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>

            <div className="rounded-md">
              <img
                src="/images/ghost.png"
                alt="shadow creature"
                className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              />
            </div>
            {/* <div className='absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer'>
                 <CircularProgress value={97} color='yellow' trackColor='#000003' thickness='5px' size='90px' label="30%" >
                 <CircularProgressLabel fontSize="14px">   
                  <MdOutlineTimer className='text-[22px] ms-[34px]' />
                    05:52:30
                 </CircularProgressLabel>
                 </CircularProgress>
              </div> */}
            <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
              <p>shadow</p>
              <p className="-mt-[8px]">creature</p>
            </div>
            <div className="text-center bg-gray-500 bg-opacity-45 w-[90px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] pmx:w-[120px] spm:w-[120px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
              Available for Play
            </div>
            <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
              <span className="text-orange-600 me-3 mt-1 span1">pwr 6 / 10</span>
              <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
              <img
                src="/images/targetNB.png"
                alt="target"
                className="w-5 h-5 mt-1 me-1"
              />
              <span className="mt-[5px] ">20k</span>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] mt-2 spm:w-[175px] self-start"
          id="light"
          style={{ background: "linear-gradient(to bottom, #96B4B4, #414E4E)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="">
            <img
              src="/images/sojo.png"
              alt="lightning creature"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
            />
          </div>
          {/* <div className='absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer'>
                 <CircularProgress value={97} color='yellow' trackColor='#000003' thickness='5px' size='90px' label="30%" >
                 <CircularProgressLabel fontSize="14px">   
                  <MdOutlineTimer className='text-[22px] ms-[34px]' />
                    05:52:30
                 </CircularProgressLabel>
                 </CircularProgress>
            </div> */}
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>lightning</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[90px] pmx:w-[120px] spm:w-[120px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
            Available for Play
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1 span1">pwr 1 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">20k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayAerial