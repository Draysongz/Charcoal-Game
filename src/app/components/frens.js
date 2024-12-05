import React from 'react'
import { IoMdLink } from "react-icons/io";


const Frends = () => {
  return (
    <div className='mt-20 uppercase p4m:ms-2' id='frens'>
        <div className='text-center text-white'>
            <h3 className='text-orange-600 pmx:text-[30px] spm:text-[30px]'>frens</h3>
            <p className='text-[45px] pmx:text-[80px] spm:text-[80px]' id='nums'>35</p>
            <p className='text-orange-600 pmx:text-[20px] spm:text-[20px]'>+50,000 coins for invite</p>
            <p className='text-[11px] mt-1 pmx:text-[13px] spm:text-[13px]'>you and your friends will earn 50,000 coins each<br /> upon successful registrtion.</p>
            <p className='text-[11px] mt-1 pmx:text-[13px] spm:text-[13px]'>win prizes every time your referral upgrades<br /> their creatures.</p>
        </div>

        <div className='mt-5 items-center text-[14px] pmx:text-[17px] spm:text-[17px] font-semibold'>
          <div className='flex border-2 border-orange-600 rounded-full p-1 w-[340px] ms-[19px] mt-2 pmx:w-[377px] pmx:p-3 spm:w-[350px] spm:p-3'>
            <p className='text-[16px] text-orange-600 font-bold leading-7 ms-2'>user a</p>
            <div className='ms-[195px] pmx:ms-[220px] spm:ms-[190px]'>
                <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-6' />
            </div>
            <span className='text-[13px] leading-6'>20k</span>
          </div>

          <div className='flex border-2 border-orange-600 rounded-full p-1 w-[340px] ms-[19px] mt-2 pmx:w-[377px] pmx:p-3 spm:w-[350px] spm:p-3'>
            <p className='text-[16px] text-orange-600 font-bold leading-7 ms-2'>user b</p>
            <div className='ms-[195px] pmx:ms-[220px] spm:ms-[190px]'>
               <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-6' />
            </div>
            <span className='text-[13px] leading-6'>20k</span>
          </div>

          <div className='flex border-2 border-orange-600 rounded-full p-1 w-[340px] ms-[19px] mt-2 pmx:w-[377px] pmx:p-3 spm:w-[350px] spm:p-3'>
            <p className='text-[16px] text-orange-600 font-bold leading-7 ms-2'>user c</p>
            <div className='ms-[195px] pmx:ms-[220px] spm:[190px]'>
               <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-6' />
            </div>
            <span className='text-[13px] leading-6'>20k</span>
          </div>

          <div className='flex border-2 border-orange-600 rounded-full p-1 w-[340px] ms-[19px] mt-2 pmx:w-[377px] pmx:p-3 spm:w-[350px] spm:p-3'>
            <p className='text-[16px] text-orange-600 font-bold leading-7 ms-2'>user d</p>
            <div className='ms-[195px] pmx:ms-[220px] spm:ms-[190px]'>
               <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-6' />
            </div>
            <span className='text-[13px] leading-6'>20k</span>
          </div>

          <div className='flex'>
            <div className='bg-orange-600 border-2 border-white uppercase rounded-full w-[292px] ms-[13px] mt-2 pmx:mt-5 pmx:w-[300px] pmx:py-2 spm:mt-5 spm:py-2 spm:w-[280px]'>
                <span className='p- ms-[100px] text-center font-bold text-[13px] pmx:text-[14px] spm:text-[14px]'>invite friends</span>
            </div>

            <div className='border-2 border-white rounded-full p- text-[20px] pmx:text-[35px] w-12 mt-2 pmx:mt-4 ms-2 pmx:w-20 spm:mt-4 spm:ms-2 spm:w-[70px] spm:text-[35px]'>
              <IoMdLink className='ms-3 pmx:ms-5 pmx:mt-1 spm:ms-4 spm:mt-1'/>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Frends