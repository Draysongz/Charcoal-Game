"use client"

import React from 'react'
import { PiHandTap } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FcChargeBattery } from "react-icons/fc";

//drawer

  import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
  } from "@chakra-ui/react";
import Image from 'next/image';

export const Inventory = () => {
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1  } = useDisclosure()

    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2  } = useDisclosure()

    const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3  } = useDisclosure()

    const { isOpen: isOpen4, onOpen: onOpen4, onClose: onClose4  } = useDisclosure()

    const { isOpen: isOpen5, onOpen: onOpen5, onClose: onClose5  } = useDisclosure()
    // const btnRef = React.useRef()

  return (
    <>
      <div className="mt-10 uppercase font-semibold w-[100%] flex flex-col items-center text-white">
        <div className="w-[375px] pmx:w-[411px] p-4 pmx:p-8">
          <h3 className="text-center text-[20px] font-bold mb-2">inventory</h3>
          <hr className="border-2"/>
          <p className="text-orange-600 text-center mt-8 mb-8">Boosters</p>
          <div className='flex gap-4 justify-center'>
            <div className="border border-gray-300 bg-neutral-800 w-3/12 rounded-xl" onClick={onOpen1}>
                <p className='text-orange-600 text-xs text-center'>Charcoal Turbo</p>
                <div className='flex'>
                    <Image src={"/images/charcoalNB.png"} width={30} height={30} alt="image" />
                    <p className='text-xs'>1000+</p>
                </div>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-3/12 rounded-xl" onClick={onOpen2}>
                <p className='text-orange-600 text-xs text-center'>Charcoal Turbo</p>
                <div className='flex gap-1'>
                    <Image src={"/images/EmberNB.png"} width={22} height={22} alt="image" className='ml-1' />
                    <p className='text-xs pt-1'>1000+</p>
                </div>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-3/12 rounded-xl" onClick={onOpen3}>
                <p className='text-orange-600 text-xs text-center'>Charcoal Turbo</p>
                <div className='flex'>
                    <Image src={"/images/NewLightningNB.png"} width={25} height={25} alt="image" />
                    <p className='text-xs mt-1'>1000+</p>
                </div>
            </div>
          </div>
            <p className='text-center text-orange-600 mt-16'>Potions</p>
            <div className='flex gap-4 justify-center mt-8'>
            <div className="border border-gray-300 bg-neutral-800 w-3/12 rounded-xl" onClick={onOpen1}>
                <p className='text-orange-600 text-xs text-center'>Charcoal Turbo</p>
                <div className='flex'>
                    <Image src={"/images/charcoalNB.png"} width={30} height={30} alt="image" />
                    <p className='text-xs'>1000+</p>
                </div>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-3/12 rounded-xl" onClick={onOpen2}>
                <p className='text-orange-600 text-xs text-center'>Charcoal Turbo</p>
                <div className='flex gap-1'>
                    <Image src={"/images/EmberNB.png"} width={22} height={22} alt="image" className='ml-1' />
                    <p className='text-xs pt-1'>1000+</p>
                </div>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-3/12 rounded-xl" onClick={onOpen3}>
                <p className='text-orange-600 text-xs text-center'>Charcoal Turbo</p>
                <div className='flex'>
                    <Image src={"/images/NewLightningNB.png"} width={25} height={25} alt="image" />
                    <p className='text-xs mt-1'>1000+</p>
                </div>
            </div>
          </div>
          <div className='bottom-0 left-0 mt-48 flex justify-center'>
            <button className='mr-4 border px-4 py-2 uppercase font-light text-black bg-white rounded-md'>Toggle</button>
            <button className='border px-6 py-2 uppercase font-light text-black rounded-md bg-white'>Next</button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen1}
        placement="bottom"
        onClose={onClose1}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent 
          alignContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          position={"relative"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            bg={"black"}
            p={"10%"}
            py={"15%"}
            // px={"30%"}
            w={"90%"}
            borderRadius={"30px"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform="translate(-50%, -50%)"
          >
          <ModalCloseButton
            color={"white"}
            fontSize={"10px"}
            borderRadius={"100%"}
            border={"2px solid white"}
            ml={"288px"}
            mt={"12px"}
            fontWeight={"bold"}
          />
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <img
              src="/images/CharcoalNB.png"
              alt="charcoal"
              className="mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:h-44 ImgO"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[22px] spm:text-[22px] uppercase font-bold">
              charcoal turbo
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white">
              Give your creatures an instant boost
            </p>
            <p className="text-[12px] mb-2 pmx:text-[16px] spm:text-[16px] spm:mb-3 text-white">
              +1 coin tap per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 bg-gray-700 rounded-xl w-24 relative py-1 mb-5 flex gap-2">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6 mr-2" />
                <span className=" text-[11px] text-white mt-1">30,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
          </Box>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen2}
        placement="bottom"
        onClose={onClose2}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent 
          alignContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          position={"relative"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            bg={"black"}
            p={"10%"}
            py={"15%"}
            // px={"30%"}
            w={"90%"}
            borderRadius={"30px"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform="translate(-50%, -50%)"
          >
          <ModalCloseButton
            color={"white"}
            fontSize={"10px"}
            borderRadius={"100%"}
            border={"2px solid white"}
            ml={"288px"}
            mt={"12px"}
            fontWeight={"bold"}
          />
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <img
              src="/images/NewLightningNB.png"
              alt="lightning"
              className="mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:h-44 ImgO"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[24px] spm:text-[24px] uppercase font-bold">
              energy boost
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white">
              increase your energy limit, so you
              <br />
              can combat the enemy more
            </p>
            <p className="text-[12px] mb-2 pmx:text-[16px] spm:text-[16px] spm:mb-3 text-white">
              +500 energy per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 rounded-xl bg-gray-700 w-24 relative py-2 mb-5 flex items-center justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6 mr-2" />
                <span className=" text-[11px] text-white mt-1">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
          </Box>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen3}
        placement="bottom"
        onClose={onClose3}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent 
          alignContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          position={"relative"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            bg={"black"}
            p={"10%"}
            py={"15%"}
            // px={"30%"}
            w={"90%"}
            borderRadius={"30px"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform="translate(-50%, -50%)"
          >
          <ModalCloseButton
            color={"white"}
            fontSize={"10px"}
            borderRadius={"100%"}
            border={"2px solid white"}
            ml={"288px"}
            mt={"12px"}
            fontWeight={"bold"}
          />
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <PiHandTap className="text-[100px] mt-2 pmx:w-[130px] pmx:mt-4 pmx:h-40 spm:w-[160px] spm:h-44 ImgI text-white" />
            <h3 className="text-orange-600 text-[20px] pmx:text-[24px] spm:text-[24px] uppercase font-bold">
              multi tap
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white text-center">
              increase the amount of coins
              <br />
              earned by tap
            </p>
            <p className="text-[12px] mb-2 pmx:text-[16px] spm:text-[16px] spm:mb-3 text-white">
              +1 coin tap per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 bg-gray-700 rounded-xl w-24 relative py-2 mb-5 flex items-center justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6 mr-2" />
                <span className=" text-[11px] text-white mt-1">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
          </Box>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen4}
        placement="bottom"
        onClose={onClose4}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent 
          alignContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          position={"relative"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            bg={"black"}
            p={"10%"}
            py={"15%"}
            // px={"30%"}
            w={"90%"}
            borderRadius={"30px"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform="translate(-50%, -50%)"
          >
          <ModalCloseButton
            color={"white"}
            fontSize={"10px"}
            borderRadius={"100%"}
            border={"2px solid white"}
            ml={"288px"}
            mt={"12px"}
            fontWeight={"bold"}
          />
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <BsFillLightningChargeFill className="text-indigo-400 text-[100px] mt-2 pmx:w-[130px] pmx:mt-4 pmx:h-40 spm:w-[160px] spm:h-44 ImgI" />
            <h3 className="text-orange-600 text-[20px] pmx:text-[24px] spm:text-[24px] uppercase font-bold">
              energy limit
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white text-center">
              increase your energy limit, so you
              <br />
              can combat the enemy more
            </p>
            <p className="text-[12px] mb-2 pmx:text-[16px] spm:text-[16px] spm:mb-3 text-white">
              +500 energy per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 bg-gray-700 rounded-xl w-24 relative py-2 mb-5 flex items-center justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6 mr-2" />
                <span className=" text-[11px] text-white mt-1">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
          </Box>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen5}
        placement="bottom"
        onClose={onClose5}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent 
          alignContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          position={"relative"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            bg={"black"}
            p={"10%"}
            py={"15%"}
            // px={"30%"}
            w={"90%"}
            borderRadius={"30px"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform="translate(-50%, -50%)"
          >
          <ModalCloseButton
            color={"white"}
            fontSize={"10px"}
            borderRadius={"100%"}
            border={"2px solid white"}
            ml={"288px"}
            mt={"12px"}
            fontWeight={"bold"}
          />
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <FcChargeBattery className="text-indigo-400 text-[100px] mt-2 pmx:w-[130px] pmx:mt-4 pmx:h-40 spm:w-[160px] spm:h-44 ImgN" />
            <h3 className="text-orange-600 text-[20px] pmx:text-[24px] spm:text-[24px] uppercase font-bold">
              recharge
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white text-center">
              Charge up your creature
            </p>
            <p className="text-[12px] mb-2 pmx:text-[16px] spm:text-[16px] spm:mb-3 text-white">
              +1 coin tap per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 bg-gray-700 rounded-xl w-24 relative py-2 mb-5 flex justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6 mr-2" />
                <span className=" text-[11px] text-white mt-1">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}



