import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';

const CreatureSuccess = () => {
  return (
     <div >
        <div className='flex h-8 justify-around'>
        <Link href="/coin" className='relative'>
            <img src='/images/CoinCNB.png' alt='coin' className='z-1 w-14 absolute pmx:w-16'/>
            <div className='rounded-e-full text-white bg-orange-600 z-10  mt-4 pmx:mt-5
            ms-6 pmx:ms-8 text-[12px] pe-10 ps-6 py-[2px] flex-grow-1'>
                500,000,000
            </div>
        </Link>

        <div className='relative'>
            <img src='/images/CharcoalNB.png' alt='charcoal' className='w-14 absolute pmx:w-16'/>
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-900'>
                1,000+
            </div>
        </div>

        <div className='relative'>
            <img src='/images/EmberNB.png' alt='ember' className='w-14 h-14 absolute pmx:w-16 pmx:h-16'/>
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-900'>
                1,000+
            </div>
        </div>
     </div>

        <div className='p-3 w-[350px] -mb-10 pmx:-mb-14 pmx:w-[390px] ms-[12px] rounded-lg mt-7 pmx:mt-10' style={{ background: "linear-gradient(to bottom, #5FBB98, #2B5545)" }}>
        <div>
            <img src='/images/Frog2.png' alt='frog king' className='w-full h-[250px] pmx:h-[350px] rounded-md' />
        </div>
        </div>

        <div className='grid-row-3 w-[350px] pmx:w-[390px] ms-[12px] text-[45px] pmx:text-[60px] mt-1 p-1 pmx:p-2'>
            <span className='text-[12px] pmx:text-[13px] uppercase ms-[73px] pmx:ms-[74px]'>you have successfully upgraded</span>
            <p className='grid font-bold ms-[50px] -mt-7 pmx:-mt-10 pmx:ms-[24px] pmx:me- text-orange-600 uppercase'>frog king</p>
            <span className='grid text-[12px] pmx:text-[13px] uppercase -mt-3 pmx:-mt-[19px] ms-[140px] pmx:ms-[155px]'>creature</span>
        </div>

        <div className='w-[350px] pmx:w-[390px] ms-[12px] uppercase mt-2'>
            <p className='uppercase text-orange-800 pmx:text-[17px] font-bold mb-2'>prices</p>
            <div className='flex gap-2 pmx:gap-3'>
            <div className='flex bg-orange-600 bg-opacity-5 rounded-full p-1 pmx:p-1 px-2 w-[110px] pmx:w-[189px]'>
                <div className='ms-2 pmx:ms-3 pmx:mt-1'>
                    <img src='/images/CoinCNB.png' alt='hour glass' className='w-8 h-7 pmx:w-9 pmx:h-8' />
                </div>
                <p className='text-orange-800 font-bold text-[13px] pmx:text-[14px] mt-[2px] pmx:mt-[5px]'> 1000+</p>
            </div>
            <div className='flex bg-orange-600 bg-opacity-5 rounded-full p-1 pmx:p-2 px-2 w-[110px] pmx:w-[189px]'>
                <div className='ms-2 pmx:ms-3'>
                    <img src='images/CharcoalNB.png' alt='meter' className='w-8 h-7 pmx:w-9 pmx:h-8' />
                </div>
                <p className='text-orange-800 font-bold text-[13px] pmx:text-[14px] mt-[2px] pmx:mt-[5px]'> 1000+</p>
            </div>
            <div className='flex bg-orange-600 bg-opacity-5 rounded-full p-1 pmx:p-2 px-2 w-[110px] pmx:w-[189px]'>
                <div className='ms-2 pmx:ms-3'>
                    <img src='images/EmberNB.png' alt='meter' className='w-8 h-7 pmx:w-9 pmx:h-8' />
                </div>
                <p className='text-orange-800 font-bold text-[13px] pmx:text-[14px] mt-[2px] pmx:mt-[5px]'> 1000+</p>
            </div>
            </div>
        </div>

        <div className='bg-indigo-300 w-[100px] rounded-full ms-[138px] pmx:ms-[155px] mt-7 pmx:mt-16'>
            <div className='p-2 font-bold text-[12px] text-center uppercase'>
                <p>claim price</p>
            </div>
        </div>

        <div className='bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between'>
       <div>
         <Link href="/" className='text-white'> <GoHome className='text-[20px] ms-3'/> home</Link>
       </div>
       <div >
         <Link href="/earn" className='text-white'> <LiaDollarSignSolid className='text-[20px] ms-3' /> earn</Link>
       </div>
       <div className='underline decoration-orange-600 decoration-4 underline-offset-[18px]'>
         <Link href="/play" className='text-white'> <IoGameControllerOutline className='text-[20px] ms-2' /> play</Link>
       </div>
       <div>
         <Link href="frens" className='text-white'> <HiMiniUserGroup className='text-[20px] ms-3' /> frens</Link>
       </div>
       <div>
         <Link href="/shop" className='text-white'> <BsShopWindow className='text-[20px] ms-2' /> shop</Link>
       </div>
     </div>
     </div>
  )
}

export default CreatureSuccess