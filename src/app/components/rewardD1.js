import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";

const RewardD1 = () => {
  return (
    <div className='mt-14 pmx:mt-32 spm:mt-36 uppercase spm:ms-2 p4m:mt-40'>
        <div className='flex gap-4'>
            <div className='border-2 border-orange-600 rounded-2xl w-[160px] pmx:w-[180px] p-2 ms-[19.5px] bg-orange-800'>
              <div className='bg-white rounded-2xl text-black font-bold p-2 text-center'>
                  <p className='text-[14px]'>day 01</p>
                      <IoMdCheckmarkCircle className='text-[27px] text-green-800 ms-[47px] pmx:ms-[58px]' />
                  <p className='font-extrabold'>100</p>
              </div>
            </div>
            <div className='border-2 border-orange-600 rounded-2xl w-[160px] pmx:w-[180px] p-2'>
              <div className='bg-white rounded-2xl text-black font-bold p-2 text-center'>
                  <p className='text-[14px]'>day 02</p>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-7 ms-[45px] pmx:ms-[55px]' />
                  <p className='font-extrabold'>120</p>
              </div>
            </div>
        </div>

        <div className='flex gap-4 mt-3'>
            <div className='border-2 border-orange-600 rounded-2xl w-[160px] pmx:w-[180px] p-2 ms-[19.5px]'>
              <div className='bg-white rounded-2xl text-black font-bold p-2 text-center'>
                  <p className='text-[14px]'>day 03</p>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-7 ms-[45px] pmx:ms-[55px]' />
                  <p className='font-extrabold'>140</p>
              </div>
            </div>
            <div className='border-2 border-orange-600 rounded-2xl w-[160px] pmx:w-[180px] p-2'>
              <div className='bg-white rounded-2xl text-black font-bold p-2 text-center'>
                  <p className='text-[14px]'>day 04</p>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-7 ms-[45px] pmx:ms-[55px]' />
                  <p className='font-extrabold'>160</p>
              </div>
            </div>
        </div>

        <div className='flex gap-4 mt-3'>
            <div className='border-2 border-orange-600 rounded-2xl w-[160px] pmx:w-[180px] p-2 ms-[19.5px]'>
              <div className='bg-white rounded-2xl text-black font-bold p-2 text-center'>
                  <p className='text-[14px]'>day 05</p>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-7 ms-[45px] pmx:ms-[55px]' />
                  <p className='font-extrabold'>180</p>
              </div>
            </div>
            <div className='border-2 border-orange-600 rounded-2xl w-[160px] pmx:w-[180px] p-2'>
              <div className='bg-white rounded-2xl text-black font-bold p-2 text-center'>
                  <p className='text-[14px]'>day 06</p>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-7 ms-[45px] pmx:ms-[55px]' />
                  <p className='font-extrabold'>200</p>
              </div>
            </div>
        </div>

        <div className='mt-3'>
            <div className='border-2 border-orange-600 rounded-2xl w-[335px] pmx:w-[375px] p-2 ms-[19.5px]'>
              <div className='bg-white rounded-2xl text-black font-bold p-2 text-center'>
                  <p className='text-[14px]'>day 07</p>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-8 h-7 ms-[133px] pmx:ms-[153px]' />
                  <p className='font-extrabold'>220</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default RewardD1