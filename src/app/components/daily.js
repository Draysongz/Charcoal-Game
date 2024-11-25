import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Daily = () => {
  return (
    <div className='mt-5 p-4 w-[375px] pmx:w-[410px] pmx:ms-[3px] uppercase text-[14px] font-semibold spm:ms-2 p4m:ms-[12px]'>
        <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex'>
          <div className='me-1 text-[25px]'>
          <BsYoutube className='fill-red-600 mt-2 pmx:me-2 pmx:ms-2' />
          </div>
          <div>
            <span className='text-orange-600 text-[14px]'>follow our youtube</span>
            <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
            <span className='absolute left-[75px] top-[124px] text-[13px] pmx:left-[95px] pmx:top-[126px]'>20k</span>
          </div>
          <MdKeyboardArrowRight className='ms-[107px] mt-2 text-[20px]' />
        </div>

        <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3'>
          <div className='me-1 text-[25px]'>
          <FaTwitter className='text-blue-600 mt-2 pmx:me-2 pmx:ms-2' />
          </div>
          <div>
            <span className='text-orange-600 text-[14px]'>follow our twitter</span>
            <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
            <span className='absolute left-[75px] top-[194px] text-[13px] pmx:left-[95px] pmx:top-[194px]'>20k</span>
        </div>
          <MdKeyboardArrowRight className='ms-28 mt-2 text-[20px]' />
        </div>

        <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3'>
          <div className='me-1 text-[25px]'>
          <FaTelegramPlane className='bg-blue-500 rounded-full p-[3px] w-6 h-6 mt-2 pmx:me-2 pmx:ms-2' />
          </div>
          <div>
            <span className='text-orange-600 text-[14px]'>follow our telegram</span>
            <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
            <span className='absolute left-[75px] top-[263px] text-[13px] pmx:left-[95px] pmx:top-[262px]'>20k</span>
        </div>
          <MdKeyboardArrowRight className='ms-[100px] mt-2 text-[20px]' />
        </div>
    </div>
  )
}

export default Daily