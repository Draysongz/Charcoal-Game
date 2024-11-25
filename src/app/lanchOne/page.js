import React from 'react'
import { PiTelegramLogoLight } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const LanchOne = () => {
  return (
    <div className='min-h-screen' style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('/images/Flameexpand1.png')", backgroundSize: "100% 100%" }}>
        <div className='text-center grid-rows-6 fixed bottom-8 justify-center items-center ms-[75px] pmx:ms-[100px]'>
            <p className='text-[20px] font-bold uppercase text-center'>charcoal game</p>
            <p className='-mt-1'>lanching very soon on</p>
            <p className='text-shadow-charcoal uppercase text-[100px] font-extrabold -mt-8'>ton</p>
            <p className='-mt-6 uppercase font-semibold'>blockchain</p>
            <p>be on the lookout for updates</p>
            <div className='flex space-x-6 text-[20px] mt-1 ms-12'>
              <PiTelegramLogoLight className='border-[1px] border-white rounded-full p-[2px]' />
              <AiOutlineYoutube className='text-[25px] -mt-[3px]' />
              <FaXTwitter className='border-[1px] border-white rounded-md p-[1px]' />
            </div>
        </div>
    </div>
  )
}

export default LanchOne