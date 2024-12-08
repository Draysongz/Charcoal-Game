import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';

const Coin = () => {
  return (
    <div className='min-h-screen' style={{backgroundImage: "url('/images/Flameexpand1.png')", objectFit: "cover", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>


         <div className='mt-1 flex h-12 pmx:h-16 flex-auto justify-between'>
           <Link href="/coin" className='relative'>
               <img src='/images/CoinCNB.png' alt='coin' className='z-1 w-[90px] absolute pmx:w-[90px] pmx:h-20'/>
               <div className='rounded-e-full text-white z-10 top-5 mt-6
               ms-14 text-[12px] pmx:text-[17px] pe-11 ps-6 py-[5px] pmx:py-[7px] pmx:top-7 pmx:ms-16 pmx:mt-6 flex-grow-1' style={{ background: "linear-gradient(to right, #470B04, #000000)" }}>
                   500,000,000
               </div>
           </Link>

           <div className='mt-1 me-3'>
               <div className='flex rounded-full px-2 py-1' style={{ background: "linear-gradient(to right, #470B04, #000000)" }}>
                   <img src='/images/NewLightningNB.png' alt='lightning' className='w-8 h-6' />
                   <span className='font-bold pmx:text-[18px] text-white'>500/1,000</span>
               </div>
               <div className='flex mt-3 rounded-full px-2 py-1' style={{ background: "linear-gradient(to right, #470B04, #000000)" }}>
                   <img src='/images/targetNB.png' alt='target' className='w-7 h-6' />
                   <span className='font-bold pmx:text-[18px] text-white'>20,000,000</span>
               </div>
           </div>
         </div>
   
         <div className='uppercase mt-10 pmx:mt-7'>
           <div className='text-center text-[30px] pmx:text-[40px] py-1 pmx:py-2 px- p-3 rounded-xl font-bold text-white' style={{ background: "linear-gradient(to right, #470B04, #000000)" }}>
               <p>frog king</p>
           </div>
         </div>

        <div className='fixed bottom-[90px] pmx:bottom-[125px] spm:bottom-[100px] w-full'>
           <div className='flex flex-auto items-center justify-center relative'>
             <div className=' z-20'>
                 <img src='/images/CoinCNB.png' alt='coin' className='w-[65px] h-[65px] pmx:w-[70px] pmx:h-[65px] ' />
             </div>
             
             <div className='-ms-9 relative mt-2'>
                <div className='bg-black border-2 border-orange-600 rounded-full w-[260px] h-10 pmx:w-[290px] pmx:h-10'></div>
                <div className='bg-orange-600 absolute rounded-full z-10 top-0 left-0 h-10 pmx:h-10 
                text-[18px] pmx:text-[18px] px-7 '>
                   <span className='-ps-8 pmx:ps-3 text-white pmx:leading-10 leading-10 font-bold'>175,000/200,000</span>
                </div>
             </div>
           </div>
     
     
     
           <div className='fixed bottom-0 bg-[#F15B061A] py-1 pmx:py-2 w-full rounded-t-xl'>
             <div className='mt-3 flex gap-3 flex-auto justify-center'>
                 <img src='/images/Inventory.png' alt='inventory' className='border-2 border-orange-800 rounded-full 
                 p-1 w-16 h-16 pmx:w-20 pmx:h-20 pmx:p-2' />
                 <span className='border-orange-800 border-e-2'></span>
                 <img src='/images/EmberNB.png' alt='ember' className='border-2 border-orange-800 rounded-full 
                 p-1 w-16 h-16 pmx:w-20 pmx:h-20 pmx:p-2' />
                 <img src='/images/charcoalNB.png' alt='charcoal' className='border-2 border-orange-800 rounded-full 
                 p-1 w-16 h-16 pmx:w-20 pmx:h-20 pmx:p-2' />
                 <img src='/images/NewLightningNB.png' alt='lightning' className='border-2 border-orange-800 rounded-full 
                 p-1 w-16 h-16 pmx:w-20 pmx:h-20 pmx:p-2' />
             </div>
           </div>
      </div>
    </div>
  )
}

export default Coin