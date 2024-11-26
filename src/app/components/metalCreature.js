import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';

const MetalCreature = () => {
  return (
     <div className='play'>
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

        <div className='p-3 w-[350px] pmx:w-[390px] ms-[12px] rounded-lg mt-7 pmx:mt-10 p4m:ms-5 p4m:mt-14 spm:mt-14 spm:ms-5 pmx:ms-[12px]' style={{ background: "linear-gradient(to bottom, #D98480, #734644)" }}>
        <div className='flex uppercase text-[14px] pmx:text-[15px] font-bold bg-orange-600 p-[1px] spm:text-[15px]'>
            <img src='/images/targetNB.png' alt='target' className='w-6 h-6 mt-1 me-1 ms-4 pmx:ms-7' />
            <p className='mt-[4.7px] '>
                20k
            </p> 
            <p className=' ms-40 pmx:ms-44 mt-1'>pwr 1/ 10</p> 
        </div>
        <div className='Img'>
            <img src='/images/batGurl.png' alt='metal creature' className='w-full h-[140px] pmx:h-[250px] spm:h-[250px] rounded-b-md' />
        </div>
        </div>

        <div className='flex w-[350px] pmx:w-[390px] ms-[12px] bg-gray-700 mt-2 rounded-full p-1 pmx:p-2 p4m:ms-5 spm:ms-5 pmx:ms-[12px]'>
            <p className='font-bold ms-[100px] me-20 pmx:ms-[120px] pmx:me-28 text-orange-600 uppercase'>metal creature</p>
        </div>

        <div className='flex w-[350px] pmx:w-[390px] ms-[12px] uppercase gap-7 pmx:gap-3 mt-2 p4m:ms-5 spm:ms-5 pmx:ms-[12px]'>
            <div className='flex border-2 border-orange-600 rounded-full p-1 pmx:p-2 px-2 w-[160px] pmx:w-[189px]'>
                <div className='ms-6 px-1 pmx:ms-10'>
                    <img src='/images/hourglassNB.png' alt='hour glass' className='w-6 h-6 pmx:w-7 pmx:h-7' />
                </div>
                <p className='text-orange-600 font-bold text-[12px] mt-[2px]'> = 4hrs</p>
            </div>
            <div className='flex border-2 border-orange-600 rounded-full p-1 pmx:p-2 px-2 w-[160px] pmx:w-[189px]'>
                <div className='ms-5 px-1 pmx:ms-7'>
                    <img src='images/MeterNB.png' alt='meter' className='w-6 h-6 pmx:w-7 pmx:h-7' />
                </div>
                <p className='text-orange-600 font-bold text-[12px] mt-[2px]'> = regular</p>
            </div>
        </div>

        <div className='w-[350px] pmx:w-[390px] ms-[12px]  bg-gray-700 mt-2 rounded-full pmx:p-1 p4m:ms-5 spm:ms-5 pmx:ms-[12px]'>
            <div className='flex justify-center items-center'>
                <img src='/images/presentNB.png' alt='present' className='w-6 h-7 pmx:w-7 pmx:h-8' />
                <p className='ms-1 me-1'>=</p>
                <img src='/images/CoinCNB.png' alt='coin' className='w-6 h-6 pmx:w-7 pmx:h-7' />
                <img src='/images/CharcoalNB.png' alt='charcoal' className='w-6 h-6 pmx:w-7 pmx:h-7' />
                <img src='/images/EmberNb.png' alt='ember' className='w-6 h-6 pmx:w-7 pmx:h-7' />
            </div>
        </div>

        <div className='w-[350px] pmx:w-[390px] ms-[12px] border-2 border-orange-600 rounded-xl p-2 mt-2 p4m:ms-5 spm:ms-5 pmx:ms-[12px]'>
            <p className='text-orange-600 uppercase font-bold text-[12px] pmx:text-[18px]'>description</p>
            <div>
                <p className='text-[11px] pmx:text-[14px]'>
                  The Fire Creature is a majestic being adorned with fiery scales that flicker like flames. It thrives in volcanic regions, drawing strength from the heat of lava. Known for its fierce temperament, this creature can unleash devastating fire blasts that incinerate anything in their path. Legends say that when it roars, the ground shakes, and the skies turn red. The Fire Creature is fiercely loyal to its allies but will unleash its wrath on anyone who threatens its territory.
                </p>
            </div>
        </div>

        <div className='bg-orange-600 w-[80px] rounded-full ms-[145px] pmx:ms-[165px] mt-[10px] pmx:mt-4 border-[1px] border-white spm:ms-[155px] p4m:ms-[175px]'>
            <div className='p-2 font-bold text-[12px] text-center uppercase'>
                <p>play</p>
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

export default MetalCreature