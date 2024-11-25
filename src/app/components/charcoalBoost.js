import React from 'react'
import { PiHandTap } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FcChargeBattery } from "react-icons/fc";

export const Boostr = () => {
  return (
    <div className='mt-10 uppercase font-semibold'>
        <h3 className='text-center font-bold text-[20px]'>free dialy boost</h3>
        <div className='p-4 w-[375px] text-[14px] flex gap-8'>
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-3 flex w-40'>
            <div className='me-1 text-[25px]'>
              <img src='/images/CharcoalNB.png' className=' w-9 h-10 ' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>charcoal</span><br />
              <span className='text-[13px]'>50/3</span>
            </div>
          </div>
  
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-3 flex w-40'>
            <div className='me-1 text-[25px]'>
              <img src='/images/NewLightningNB.png' className=' w-11 h-10 ' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>energy</span><br />
              <span className='text-[13px]'>3/3</span>
            </div>
          </div> 
        </div>

        <div className='w-[375px] p-4'>
          <h3 className='text-center text-[20px] font-bold'>boosters</h3>
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3'>
            <div className='me-4 text-[30px]'>
              <PiHandTap className='p-[3px] w-8 h-8 mt-2 text-[50px]' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>multi tap</span>
              <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
              <span className='absolute left-[110px] top-[294px] text-[13px]'>20k</span>
            </div>
              <div className='ms-[120px] mt-3 text-[14px]'>
                 <span className='ms-[px] mt- text-[px] text-orange-600'>level 1</span>
                 <MdKeyboardArrowRight className='-mt-6 ms-14 text-[25px]' />
              </div>
          </div>
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3'>
            <div className='me-4 text-[30px]'>
              <BsFillLightningChargeFill className=' text-indigo-400 p-[3px] w-8 h-8 mt-2' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>energy limit</span>
              <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
              <span className='absolute left-[110px] top-[366px] text-[13px]'>20k</span>
            </div>
              <div className='ms-[100px] mt-3 text-[14px] '>
                 <span className='ms-[px] mt- text-[px] text-orange-600'>level 1</span>
                 <MdKeyboardArrowRight className='-mt-6 ms-14 text-[25px]' />
              </div>
          </div>
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3'>
            <div className='me-4 text-[30px]'>
              <FcChargeBattery className='p-[3px] w-8 h-8 mt-2' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>recharge</span>
              <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
              <span className='absolute left-[110px] top-[437px] text-[13px]'>20k</span>
            </div>
              <div className='ms-[120px] mt-3 text-[14px]'>
                 <span className='ms-[px] mt- text-[px] text-orange-600'>level 1</span>
                 <MdKeyboardArrowRight className='-mt-6 ms-14 text-[25px]' />
              </div>
          </div>
        </div>


    </div>
  )
}
