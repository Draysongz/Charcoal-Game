import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import NavBar from '../components/navBar';

const Shop = () => {
  return (
    <div className='min-h-screen' style={{backgroundImage: "url('/images/SHOP1.png')", backgroundSize: "100% 100%",}}
    >
     <div className='mt- flex h-8 justify-around'>
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
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600 font-bold'>
                1,000+
            </div>
        </div>

        <div className='relative'>
            <img src='/images/EmberNB.png' alt='ember' className='w-14 h-14 absolute pmx:w-16 pmx:h-16'/>
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600 font-bold'>
                1,000+
            </div>
        </div>
     </div>

     <div className=''>
       <div>
         <img src='/images/wood.png' alt='wood' className='w-96 pmx:w-[450px]' />
       </div>
       <div className='flex absolute top-[85px] pmx:top-[95px] uppercase font-bold ms-10 pmx:ms-14 text-[18px] p-5'>
         <p className='text-orange-600 me-4'>total</p>
         <img src='/images/toncoinTonLogo.png' alt='ton vogo' className='w-8 h-7 me-1' />
         <span className='me-3'>0.4</span>
         <p className='text-orange-600 me-4'>or</p>
         <img src='/images/starNB.png' alt='telegram star' className='w-8 h-7' />
         <span className='me-3'>150</span>
       </div>
     </div>

     <div className='fixed bottom-[150px] pmx:bottom-[130px] ms-3'>
        <div>
          <img src='/images/Free.png' alt='free star' className='absolute -top-5 left-[92px] pmx:left-[100px] transform [rotate:43deg] 
          w-16' />
        </div>
        <div className='flex gap-8'>
          <div>
            <img src='/images/SpecialBoard.png' alt='special board' className='w-40 h-40' />
            <div className='relative pmx:-ms-2 -top-20 w-16 pmx:w-12 left-7 pmx:left-9'>
                 <img src='/images/CharcoalNB.png' alt='charcoal' className='w-12 absolute pmx:w-16'/>
                 <div className='bg-orange-600 bg-opacity-10 px-3 py-[2px] rounded-e-full text-[12px] 
                 mt-3 ms-6 pmx:ms-10 ps-5 pmx:ps-2 w-16 pmx:w-14 text-orange-600 absolute'>
                     <span>1,000+</span>
                 </div>
             </div>
          </div>
          <div>
            <img src='/images/Menu3.png' alt='menu board' className='w-48 h-40' />
            <div className='relative pmx:-ms-2 -top-[110px] '>
                 <img src='/images/EmberNB.png' alt='ember' className='w-12 h-14 left-16 pmx:left-[70px] absolute pmx:w-14 pmx:h-'/>
                 <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] top-11 pmx:top-8 left-8 pmx:left-7
                 rounded-full text-[12px] mt-3 pmx:mt-5 ms-6 pmx:ms-10 ps-4  text-orange-600 absolute'>
                     1,000+
                 </div>
             </div>
          </div>
        </div>
     </div>

     <div className='ms-[59px] pmx:ms-[85px] bottom-24 pmx:bottom-[85px] fixed'>
      <div className='flex gap-3'>
        <div className='bg-orange-600 border-2 border-white rounded-full py-1 px-9'>
          <span className='uppercase font-bold text-[13px] leading-3'>confirm</span>
        </div>
        <div className='border-2 border-white p-1 rounded-full'>
          <img src='/images/toncoinTonLogo.png' alt='ton' className='w-7 h-7' />
        </div>
        <div className='border-2 border-white p-1 rounded-full'>
          <img src='/images/starNB.png' alt='star' className='w-7 h-7' />
        </div>
      </div>
     </div>
     


     <div className='bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between'>
       <div>
         <Link href="/" className='text-white'> <GoHome className='text-[20px] ms-3'/> home</Link>
       </div>
       <div >
         <Link href="/earn" className='text-white'> <LiaDollarSignSolid className='text-[20px] ms-3' /> earn</Link>
       </div>
       <div>
         <Link href="/play" className='text-white'> <IoGameControllerOutline className='text-[20px] ms-2' /> play</Link>
       </div>
       <div>
         <Link href="frens" className='text-white'> <HiMiniUserGroup className='text-[20px] ms-3' /> frens</Link>
       </div>
       <div className='underline decoration-orange-600 decoration-4 underline-offset-[18px]'>
         <Link href="/shop" className='text-white'> <BsShopWindow className='text-[20px] ms-2' /> shop</Link>
       </div>
     </div>
    </div>
  )
}

export default Shop

