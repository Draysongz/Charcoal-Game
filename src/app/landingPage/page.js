"use client"

import React from 'react'
import Link from 'next/link';
import Header from '../components/header';
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import { useState, useEffect } from 'react';
import LoadingPage from '../components/loadingPage';


// For Modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

const Landing = () => {
  const {  isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1  } = useDisclosure()

  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  

  return (
    <div className='min-h-screen' style={{backgroundImage: "url('/images/background1.png')", objectFit: "cover",}}>
     <div className='min-h-screen overflow-hidden'>
      
      <Header />

     <div className='bg-black text-white flex gap-4 justify-around text-[12px] p-3 pmx:p-4 spm:p-4 spm:text-[13px] p4m:p-4 p4m:text-[13px] uppercase'>
       <Link href='/rewards' className='bg-green-900 px-5 py-1 rounded-full'>
         daily reward
       </Link>
       <Link href='/boost' className='mt-1'>boost</Link>
       <Link href='/leaderBoard' className='mt-1'>leaderboard</Link>
       <Link href='/setting' className='mt-1'>setting</Link>
     </div>

     <div className='grid grid-cols-2 gap-48 mt-2 p4m:gap-56'>
        <div>
            <img src='/images/OG.png' alt='OG' className='pmx:w-32 pmx:h-24 spm:w-32 p4m:w-32 spm:h-20 p4m:h-25'  onClick={onOpen1}/>
        </div>
        <div>
            <img src='/images/Cauldron.png' alt='cauldron' className='w-[70px] h-[47px] pmx:h-[70px] pmx:w-[90px]
            mt-1 spm:w-[85px] spm:h-[60px] p4m:w-[90px] p4m:h-[70px]'
            onClick={onOpen2} />
        </div>
     </div>

     <div>
        <div className='Land-fire-boy'>
            <img src='/images/fireboy.png' alt='fireboy' className='ms-[40px] h-72 pmx:ms-[6px] pmx:w-[400px] pmx:h-[400px] spm:w-[375px] spm:ms-[6px] spm:h-[400px] p4m:w-[400px] p4m:ms-[15px]' />
        </div>
        <button type='submit' className='bg-orange-600 text-white mt-3 ms-20 p-2 px-20 pmx:mt-7 pmx:ms-[110px] 
        spm:ms-[100px] p4m:ms-[120px] rounded-full border border-white uppercase'>
            play
        </button>
     </div>

     <div className='flex mt-3 pmx:mt-7 pmx:ms-5 spm:ms-2 spm:mt-7 p4m:ms-6 p4m:mt-8'>
        <div>
            <img src='/images/NewLightningNB.png' alt='lightning' className='w-12' />
        </div>
        
        <div className='relative mt-3'>
           <div className='bg-white bg-opacity-35 rounded-full w-60 h-5 pmx:h-7 spm:h-7 p4m:h-7'></div>
           <div className='bg-orange-600 absolute rounded-full z-1 top-0 left-0 h-5 pmx:h-7 spm:h-7 p4m:h-7
           text-[12px] pmx:text-[13px] spm:text-[13px] p4m:text-[13px] px-5  '>
              <span className='ps-10 text-white pmx:leading-7 spm:leading-7 p4m:leading-7 font-bold'>400/100</span>
           </div>
        </div>
        
        <div>
            <img src='/images/furnace.png' alt='furnace' className='w-16 h-20 -mt-5 ms-3 pmx:w-20 pmx:h-24 spm:w-20 p4m:w-20 spm:h-24 p4m:h-24' />
        </div>
     </div>
     </div>

     <div className='bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between'>
       <div className='underline decoration-orange-600 decoration-4 underline-offset-[18px]'>
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
       <div>
         <Link href="/shop" className='text-white'> <BsShopWindow className='text-[20px] ms-2' /> shop</Link>
       </div>
     </div>

     <Modal isOpen={isOpen1} onClose={onClose1} isCentered>
        <ModalOverlay className='backdrop-blur-sm' />
        <ModalContent>
           <div className='bg-black ms-7 absolute z-50 text-white top-[220px] p-9 
            rounded-3xl w-80 pmx:w-[370px] pmx:ms-[20px] pmx:p-10 pmx:top-[300px]'>
            <div className='flex justify-end text-[20px]'>
              <ModalCloseButton className='items-end border-2 rounded-full p-1 text-[9px]'/>
            </div>
           <div className='flex justify-center mt-3'>
             <img src='/images/OG.png' alt='OG' />
           </div>
           <div className='flex justify-center text-orange-600'>OG BADGE</div>
           <div className='flex justify-center text-[14px] mt-2'>OG badge for early supporters</div>
           <div className='flex justify-center px-7 py-1 border border-orange-600 text-[11px]
           rounded-full text-orange-700 mt-3 uppercase'>
            more details coming soon
           </div>
          </div>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen2} onClose={onClose2} isCentered>
         <ModalOverlay className='backdrop-blur-sm' />
         <ModalContent>
            <div className='bg-black ms-7 absolute z-50 text-white top-[220px] p-9 
             rounded-3xl w-80 pmx:w-[370px] pmx:ms-[20px] pmx:p-10 pmx:top-[300px]'>
             <div className='flex justify-end text-[20px]'>
               <ModalCloseButton className='items-end border-2 rounded-full p-1 text-[9px]'/>
             </div>
            <div className='flex justify-center mt-3'>
            <img src='/images/Cauldron.png' alt='cauldron' />
            </div>
            <div className='flex justify-center text-orange-600'>CAULDRON</div>
            <div className='flex justify-center text-[14px] mt-2'>
              Keep stacking boosters and<br />
              &nbsp; &nbsp; powering-up creatures
            </div>
            <div className='flex justify-center px-7 py-1 border border-orange-600 text-[11px]
            rounded-full text-orange-700 mt-3 uppercase'>
             we cooking!
            </div>
           </div>
         </ModalContent>
       </Modal>

    </div>
  )
}

export default Landing

