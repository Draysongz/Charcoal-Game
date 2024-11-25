import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';

const PageFour = () => {
  return (
    <div className='min-h-screen' style={{backgroundImage: "url('/images/Flameexpand1.png')", objectFit: "cover", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>


     <div>
       <div className='mt- flex h-12 pmx:h-16 justify-start'>
          <div className='relative'>
              <img src='/images/CoinCNB.png' alt='coin' className='z-1 w-12 absolute'/>
              <div className='rounded-e-full text-white bg-orange-600 z-10 top-5 mt-3
              ml-6 text-[12px] pe-11 ps-6 py-[2px] flex-grow-1'>
                  500,000,000
              </div>
          </div>
       </div>
  
       <div className='flex uppercase gap-28 justify-around mt-5'>
          <div className='bg-white text-orange-700 text-[20px] py-3 px-4 rounded-xl font-bold'>
              frog<br />
              king
          </div>
          <div className=''>
              <div className='flex bg-white rounded-full px-2 py-1'>
                  <img src='/images/NewLightningNB.png' alt='lightning' className='w-8 h-6' />
                  <span className='ps-5 text-orange-700 font-bold'>500/1,000</span>
              </div>
              <div className='flex bg-white mt-3 rounded-full px-2 py-1'>
                  <img src='/images/targetNB.png' alt='target' className='w-7 h-6' />
                  <span className='ps-5 text-orange-700 font-bold'>20,000,000</span>
              </div>
          </div>
       </div>
  
       <div className='flex mt-[305px]'>
          <div>
              <img src='/images/NewLightningNB.png' alt='lightning' className='w-12' />
          </div>
          
          <div className='relative mt-2'>
             <div className='bg-white bg-opacity-35 rounded-full w-72 h-5'></div>
             <div className='bg-orange-600 absolute rounded-full z-20 top-0 left-0 h-5 
             text-[12px] px-5  '>
                <span className='-ps-5 text-white'>175,000/200,000</span>
             </div>
          </div>
       </div>
  
  
  
       <div className='mt-3'>
          <img src='/images/Inventory.png' alt='inventory' className='border-2 border-orange-800 rounded-full 
          p-2 ' />
       </div>
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
         <Link href="friend" className='text-white'> <HiMiniUserGroup className='text-[20px] ms-5' /> friends</Link>
       </div>
       <div>
         <Link href="/shop" className='text-white'> <BsShopWindow className='text-[20px] ms-2' /> shop</Link>
       </div>
     </div>
    </div>
  )
}

export default PageFour