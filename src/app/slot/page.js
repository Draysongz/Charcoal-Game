import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import Header from '../components/header';

const Slot = () => {
  return (
    <div className='min-h-screen' style={{backgroundImage: "url('/images/SlotMachine.png')", objectFit: "cover", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>


         <>
           <Header />
         </>

         <div className='fixed bottom-24 left-28 pmx:left-[135px]'>
            <img src='/images/SLIN-remove.png' alt='slin' />
         </div>

         <div className='bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between'>
          <div className='underline decoration-orange-600 decoration-4 underline-offset-[18px]'>
            <Link href="/" className='text-white'> <GoHome className='text-[20px] ms-3'/> home</Link>
          </div>
          <div>
            <Link href="/earn" className='text-white'> <LiaDollarSignSolid className='text-[20px] ms-3' /> earn</Link>
          </div>
          <div>
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

export default Slot