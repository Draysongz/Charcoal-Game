import Link from 'next/link';
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaMedal } from "react-icons/fa";

const LevelFive = () => {
  return (
    <div
      className="flex flex-col items-center mt-5 pmx:mt-10 spm:mt-10 lvs overflow-y-auto"
      style={{ height: "calc(90vh - 80px)" }}
    >
      <div className="mb-2 flex flex-col items-center">
        <div className="text-center">
          <h3 className="uppercase font-bold pmx:mb-1 spm:mb-1">level 5</h3>
          <div className="bg-orange-600 w-40 rounded-[40px] p-2 pmx:w-[300px] spm:w-[290px] borImg">
            <img
              src="/images/Level1.png"
              alt="level one"
              className="w-38 rounded-[40px] pmx:w-[290px] spm:w-[280px]"
            />
          </div>
        </div>
        <div className="flex items-center  gap-2 justify-center bg-gray-500 mt-3 w-[330px] rounded-full p-2 pmx:mt-5 pmx:p-3 pmx:w-[370px] spm:w-[345px]">
          <span className="">
            <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-5" />
          </span>
          <span className="text-[12px]">100 / 2000</span>
        </div>
      </div>

      <div className="flex flex-col items-center w-[100%]">
        <h3 className="uppercase text-center font-bold">blaze of glory</h3>
        <div className="bg-orange-600 mt-3 w-[90%] rounded-full border-2 border-white flex items-center px-5 justify-between">
          <div className="p-[3px]">
            <p className="text-[14px] pmx:text-[16px]">you currently rank at</p>
            <div className="flex items-center">
              <img
                src="/images/CoinCNB.png"
                alt="coin"
                className="w-5 h-4 pmx:w-6 pmx:h-5"
              />
              <span className="coinBal">100 coin</span>
            </div>
          </div>
          <span className="text-[12px] font-bold coinBal2">120</span>
        </div>

        <div className="bg-gray-800 mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
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
                <img src="/images/CoinCNB.png" alt="coin" className="w-5 h-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
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
                <img src="/images/CoinCNB.png" alt="coin" className="w-5 h-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
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
                <img src="/images/CoinCNB.png" alt="coin" className="w-5 h-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
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
                <img src="/images/CoinCNB.png" alt="coin" className="w-5 h-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 mt-3 w-[90%] rounded-full py-2 px-5 items-center flex">
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
                <img src="/images/CoinCNB.png" alt="coin" className="w-5 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelFive