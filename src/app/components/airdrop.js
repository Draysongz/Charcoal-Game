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
    <div className="mt-14 pmx:mt-20 text-center p-5">
      <h3 className="text-[25px] uppercase mb-2 text-white font-semibold">airdrop</h3>
      <div className="bg-gray-800 border-2 border-orange-600 uppercase p-5">
        <div className="text-orange-600 text-[14px] mb-2">
          task for participating in airdrop
        </div>
        <div className="bg-orange-500 border-2 border-white rounded-full p-2">
          <div
            className="flex flex-auto items-center justify-center text-white cursor-pointer"
            onClick={onOpen}
          >
            <p className="font-bold text-[14px] leading-6">connect wallet</p>
            <span className="ms-4 text-[25px]">
              <MdKeyboardArrowRight />
            </span>
          </div>
        </div>
        
        <div className="bg-gray-800 border-2 border-orange-600 uppercase p-5 mt-5">
          <div className="text-orange-600 text-[14px] mb-2">
            instrction on how to connect wallet
          </div>
          <div className="text-[14px] text-white">
            An airdrop is the distribution of tokens to players' wallets. These
            tokens will be traded on top exchanges, and you can either sell or
            hold them. To receive your tokens, you must connect your wallet.
          </div>
        </div>
    </div>

      <Drawer
      isOpen={isOpen}
      placement="bottom"
      onClose={onClose}
      className="p-0"
      >
      <DrawerOverlay className="backdrop-blur-md" />
      <DrawerContent className="p-0 rounded-t-3xl">
        <DrawerCloseButton
        color={"white"}
        fontSize={"10px"}
        borderRadius={"100%"}
        border={"2px solid white"}
        ml={"288px"}
        mt={"12px"}
        fontWeight={"bold"}
        />
        <div className="text-center text-white bg-black flex flex-col items-center pt-5 pb-10">
          <img
                src="/images/wallet.png"
                alt="wallet"
                className="mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 w-[130px] spm:w-[160px] spm:h-44"
              />
              <h3 className="text-orange-600 text-[30px] pmx:text-[35px] uppercase font-bold spm:text-[30px]">
                connect your ton wallet
              </h3>
              <p
                className="text-[13px] pmx:text-[20px] spm:text-[20px]"
                id="texCon"
              >
                Connect your crypto wallet to receive airdrop allocation. if you
                don’t have one, create one in your Telegram Account
              </p>
              <div className="bg-orange-600 border-2 border-white px-28 h-10 rounded-full uppercase text-[12px] mt-4 flex items-center">
                <p className="font-bold">connect wallet</p>
              </div>
            </div>
          </DrawerContent>
      </Drawer>
    </div>
      );
    }
    
    export default Airdrop