"use client"

import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

//drawer
import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

const Airdrop = () => {
    const { isOpen, onOpen, onClose  } = useDisclosure()

  return (
    <div className='mt-14 pmx:mt-20 text-center p-5'>
        <h3 className='text-[25px] uppercase mb-2'>airdrop</h3>
        <div className='bg-gray-800 border-2 border-orange-600 uppercase p-5'>
            <div className='text-orange-600 text-[14px] mb-2'>task for participating in airdrop</div>
            <div className='bg-orange-500 border-2 border-white rounded-full p-2'>
                <div className='flex ms-14 pmx:ms-20' onClick={onOpen}>
                    <p className='font-bold text-[14px] leading-6'>connect wallet</p>
                    <span className='ms-4 text-[25px]'><MdKeyboardArrowRight className='' /></span>
                </div>
            </div>
        </div>

        <div className='bg-gray-800 border-2 border-orange-600 uppercase p-5 mt-5'>
            <div className='text-orange-600 text-[14px] mb-2'>instrction on how to connect wallet</div>
            <div className='text-[14px]'>
              An airdrop is the distribution of tokens to players' wallets. These tokens will be traded on top exchanges, and you can either sell or hold them. To receive your tokens, you must connect your wallet. 
            </div>
        </div>

        <Drawer 
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        size="sm">
        <DrawerOverlay className='backdrop-blur-md' />
        <DrawerContent className='bg-black rounded-t-3xl p-4 h-[65vh] border-t-white border-t-4' >
        <DrawerCloseButton className='text-white text-[10px] rounded-full w-8 h-8 border-[2px] ms-72 pmx:ms-80 mt-3 font-bold'/>
           <div>
             <div className='text-center text-white p-4'>
                <img src='/images/wallet.png' alt='wallet' className='ms-[93px] pmx:ms-[90px] mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 w-[130px] spm:w-[160px] spm:ms-[90px] spm:h-44 p4m:ms-[109px]' />
                <h3 className='text-orange-600 text-[20px] pmx:text-[30px] uppercase font-bold spm:text-[30px]'>connect your ton wallet</h3>
                <p className='text-[13px] pmx:text-[20px] spm:text-[20px]'>Connect your crypto wallet to receive airdrop allocation. if you don’t have one, create one in your Telegram Account</p>
                <div className='bg-orange-600 border-2 border-white px- py-2 rounded-full uppercase text-[12px] mt-4'>
                    <p className='font-bold'>connect wallet</p>
                </div>
             </div>
           </div>
        </DrawerContent>
    </Drawer>

    </div>
  )
}

export default Airdrop