import React from 'react'
import { IoMdLink } from "react-icons/io";


const Frends = () => {
  return (
    <div
      className="uppercase p4m:ms-2 flex flex-col items-center"
      id="frens"
    >
      <div className="text-center text-white">
        <h3 className="text-orange-600 pmx:text-[30px] spm:text-[30px]">
          frens
        </h3>
        <p className="text-[50px] pmx:text-[80px] spm:text-[80px]" id="nums">
          35
        </p>
        <p className="text-orange-600 pmx:text-[20px] spm:text-[20px]">
          +50,000 coins for invite
        </p>
        <p className="text-[11px] mt-1 pmx:text-[13px] spm:text-[13px]">
          you and your friends will earn 50,000 coins each
          <br /> upon successful registrtion.
        </p>
        <p className="text-[11px] mt-1 pmx:text-[13px] spm:text-[13px]">
          win prizes every time your referral upgrades
          <br /> their creatures.
        </p>
      </div>

      <div className="mt-2 text-[14px] pmx:text-[17px] spm:text-[17px] font-semibold flex flex-col items-center ">
        <div className="flex border-2 border-orange-600 rounded-full p-2 w-[340px] mt-2 pmx:w-[377px] pmx:p-3 spm:w-[350px] spm:p-3 items-center">
          <p className="text-[16px] text-orange-600 font-bold ms-2">
            user a
          </p>
          <div className="ms-[195px] pmx:ms-[220px] spm:ms-[190px]">
            <img src="/images/CoinCNB.png" alt="coin" className="w-8 h-6" />
          </div>
          <span className="text-[13px] text-white">20k</span>
        </div>

        <div className="flex border-2 border-orange-600 rounded-full p-2 w-[340px] mt-2 pmx:w-[377px] pmx:p-3 spm:w-[350px] spm:p-3 items-center">
          <p className="text-[16px] text-orange-600 font-bold ms-2">
            user b
          </p>
          <div className="ms-[195px] pmx:ms-[220px] spm:ms-[190px]">
            <img src="/images/CoinCNB.png" alt="coin" className="w-8 h-6" />
          </div>
          <span className="text-[13px] text-white">20k</span>
        </div>

        <div className="flex border-2 border-orange-600 rounded-full p-2 w-[340px] mt-2 pmx:w-[377px] pmx:p-3 spm:w-[350px] spm:p-3 items-center">
          <p className="text-[16px] text-orange-600 font-bold ms-2">
            user c
          </p>
          <div className="ms-[195px] pmx:ms-[220px] spm:[190px]">
            <img src="/images/CoinCNB.png" alt="coin" className="w-8 h-6" />
          </div>
          <span className="text-[13px] text-white">20k</span>
        </div>

        <div className="flex border-2 border-orange-600 rounded-full p-2 w-[340px] mt-2 pmx:w-[377px] pmx:p-3 spm:w-[350px] spm:p-3 items-center">
          <p className="text-[16px] text-orange-600 font-bold ms-2">
            user d
          </p>
          <div className="ms-[195px] pmx:ms-[220px] spm:ms-[190px]">
            <img src="/images/CoinCNB.png" alt="coin" className="w-8 h-6" />
          </div>
          <span className="text-[13px] text-white">20k</span>
        </div>

        <div className="flex">
          <div className="bg-orange-600 border-2 border-white uppercase rounded-full w-[250px] mt-2 py-3 pmx:mt-5 pmx:w-[290px] pmx:py-3 spm:mt-5 spm:py-3 spm:w-[270px]">
            <span className="text-center font-bold text-[13px] pmx:text-[14px] spm:text-[14px] flex flex-col items-center text-white">
              invite friends
            </span>
          </div>

          <div className="border-2 border-white rounded-full text-[30px] pmx:text-[35px] w-20 mt-2 pmx:mt-4 ms-2 pmx:w-20 spm:mt-4 spm:ms-2 spm:w-[70px] spm:text-[35px] flex flex-col items-center">
            <IoMdLink className="flex flex-1 items-center text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frends