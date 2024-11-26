import Link from 'next/link';
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaMedal } from "react-icons/fa";

const LevelThirteen = () => {
  return (
    <div className='mt-5 pmx:mt-10 spm:mt-10 p4m:ms-2 lvs'>
    <div className='mb-2'>
        <div className='text-center'>
            <h3 className='uppercase font-bold pmx:mb-1 spm:mb-1'>level 13</h3>
            <div className='bg-orange-600 w-40 rounded-[40px] p-2 ms-[108px] pmx:w-[300px] pmx:ms-[58px] spm:w-[290px] spm:ms-[50px] borImg'>
                     <img src='/images/level1.png' alt='level one' className='w-36 rounded-[40px] pmx:w-[290px] spm:w-[280px]' />
               </div>
            </div>
            <div className='flex justify-center bg-gray-500 mt-3 w-[330px] rounded-full ms-6 p-2 pmx:mt-5 pmx:p-3 pmx:ms-6 pmx:w-[370px] spm:w-[345px]'>
                <span className='me-4 spm:-ms-3'>
                    <img src='/images/CoinCNB.png' alt='coin' className='w-7 h-5' />
                </span>
                <span className='text-[12px]'>100 / 2000</span>
            </div>
        </div>

        <div>
            <h3 className='uppercase text-center font-bold'>flame bound fortress</h3>
            <div className='bg-orange-600 mt-3 w-[330px] rounded-full ms-6 border-2 border-white flex pmx:w-[370px] pmx:py-1 spm:w-[345px]'>
                <div className='ms-3 p-[3px]'>
                    <p className='text-[14px] pmx:text-[16px]'>you currently rank at</p>
                    <img src='/images/CoinCNB.png' alt='coin' className='w-5 h-4 pmx:w-6 pmx:h-5' />
                    <span className='absolute left-[70px] top-[342px] text-[12px] pmx:top-[520px] spm:top-[490px] p4m:top-[525px] p4m:left-[85px] coinBal3'>100 coin</span>
                    <span className='text-[12px] font-bold ms-[270px] absolute top-[330px] pmx:top-[509px] pmx:ms-[300px] spm:top-[480px] p4m:top-[515px] coinBal4'>120</span>
                </div>
            </div>

            <div className='bg-gray-800 mt-3 w-[330px] rounded-full ms-6 p-2 pmx:w-[370px] pmx:py-3 spm:w-[345px]'>
              <div className='flex ms-3'>
                <FaMedal className='text-orange-400 me-4 mt-[2px]' />
                <span className='w-5 h-5 bg-white rounded-full p-2 me-2 -mt-[1px]'></span>
                <p className='text-[12px] pmx:text-[14px] pmx:leading-4'>Behrooz</p>
                <div className='flex ms-[130px] pmx:ms-[170px] spm:ms-[146px]'>
                    <p className='text-[12px] me-2'>20.3M</p>
                    <span>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-5 h-4' />
                    </span>
                </div>
              </div>
            </div>

            <div className='bg-gray-800 mt-2 w-[330px] rounded-full ms-6 p-2 pmx:w-[370px] pmx:py-3 spm:w-[345px]'>
            <div className='flex ms-3'>
                <FaMedal className='text-blue-500 me-4 mt-[2px]' />
                <span className='w-5 h-5 bg-white rounded-full p-2 me-2 -mt-[1px]'></span>
                <p className='text-[12px] pmx:text-[14px] pmx:leading-4'>Behrooz</p>
                <div className='flex ms-[130px] pmx:ms-[170px] spm:ms-[145px]'>
                    <p className='text-[12px] me-2'>20.3M</p>
                    <span>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-5 h-4' />
                    </span>
                </div>
              </div>
            </div>

            <div className='bg-gray-800 mt-2 w-[330px] rounded-full ms-6 p-2 pmx:w-[370px] pmx:py-3 spm:w-[345px]'>
            <div className='flex ms-3'>
                <FaMedal className='text-orange-900 me-4 mt-[2px]' />
                <span className='w-5 h-5 bg-white rounded-full p-2 me-2 -mt-[1px]'></span>
                <p className='text-[12px] pmx:text-[14px] pmx:leading-4'>Behrooz</p>
                <div className='flex ms-[130px] pmx:ms-[170px] spm:ms-[145px]'>
                    <p className='text-[12px] me-2'>20.3M</p>
                    <span>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-5 h-4' />
                    </span>
                </div>
              </div>
            </div>

            <div className='bg-gray-800 mt-2 w-[330px] rounded-full ms-6 p-2 pmx:w-[370px] pmx:py-3 spm:w-[345px]'>
            <div className='flex ms-3'>
                <p className='me-2 text-[12px]'>#4</p>
                <span className='w-5 h-5 bg-white rounded-full p-2 me-2 -mt-[1px]'></span>
                <p className='text-[12px] pmx:text-[14px] pmx:leading-4'>Behrooz</p>
                <div className='flex ms-[140px] pmx:ms-[180px] spm:ms-[155px]'>
                    <p className='text-[12px] me-2'>20.3M</p>
                    <span>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-5 h-4' />
                    </span>
                </div>
              </div>
            </div>

            <div className='bg-gray-800 mt-2 w-[330px] rounded-full ms-6 p-2 pmx:w-[370px] pmx:py-3 spm:w-[345px]'>
            <div className='flex ms-3'>
                <p className='me-2 text-[12px]'>#5</p>
                <span className='w-5 h-5 bg-white rounded-full p-2 me-2 -mt-[1px]'></span>
                <p className='text-[12px] pmx:text-[14px] pmx:leading-4'>Behrooz</p>
                <div className='flex ms-[140px] pmx:ms-[180px] spm:ms-[155px]'>
                    <p className='text-[12px] me-2'>20.3M</p>
                    <span>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-5 h-4' />
                    </span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default LevelThirteen