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

    const { isOpen: isOpen6, onOpen: onOpen6, onClose: onClose6  } = useDisclosure()

    const { isOpen: isOpen7, onOpen: onOpen7, onClose: onClose7  } = useDisclosure()
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
                <div className='flex justify-center'>
                    <Image src={"/images/charcoalNB.png"} width={30} height={30} alt="image" />
                    <p className='text-xs mt-1 text-gray-300'>1000+</p>
                </div>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-3/12 rounded-xl" onClick={onOpen2}>
                <p className='text-orange-600 text-xs text-center'>Ember<br/> Burst</p>
                <div className='flex gap-1 justify-center'>
                    <Image src={"/images/EmberNB.png"} width={22} height={22} alt="image" className='ml-1' />
                    <p className='text-xs mt-1 text-gray-300'>1000+</p>
                </div>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-3/12 rounded-xl" onClick={onOpen3}>
                <p className='text-orange-600 text-xs text-center'>Energy Replenish</p>
                <div className='flex justify-center'>
                    <Image src={"/images/NewLightningNB.png"} width={25} height={25} alt="image" />
                    <p className='text-xs mt-1 text-gray-300'>1000+</p>
                </div>
            </div>
          </div>
            <p className='text-center text-orange-600 mt-16'>Potions</p>
            <div className='flex gap-4 justify-center mt-8'>
            <div className="border border-gray-300 bg-neutral-800 w-2.5/12 rounded-xl" onClick={onOpen6}>
                <p className='text-orange-600 text-xs text-center px-1'>Mountain</p>
                <Image src={"/images/PotionMountain.png"} width={30} height={30} alt="image" className='flex justify-center mx-auto' />
                <p className='text-xs text-center text-gray-300'>1000+</p>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-2/12 rounded-xl" onClick={onOpen5}>
                <p className='text-orange-600 text-xs text-center'>Forest</p>
                <Image src={"/images/PotionForest.png"} width={22} height={22} alt="image" className='flex justify-center mx-auto' />
                <p className='text-xs pt-1 text-center text-gray-300'>1000+</p>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-2/12 rounded-xl" onClick={onOpen4}>
                <p className='text-orange-600 text-xs text-center'>Aerial</p>
                <Image src={"/images/PotionAerial.png"} width={25} height={25} alt="image" className='flex justify-center mx-auto' />
                <p className='text-xs mt-1 text-center text-gray-300'>1000+</p>
            </div>
            <div className="border border-gray-300 bg-neutral-800 w-2/12 rounded-xl" onClick={onOpen7}>
                <p className='text-orange-600 text-xs text-center'>Sea</p>
                <Image src={"/images/PotionSea.png"} width={25} height={25} alt="image" className='flex justify-center mx-auto' />
                <p className='text-xs mt-1 text-center text-gray-300'>1000+</p>
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
              Multiply your tapping power for 10 seconds to power-up your creatures faster
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:mb-2 spm:mt-2 text-gray-300">
              Note: Can only be activated directly on the creatures tapping screen. Go to creatures page and open inventory
            </p>
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
              src="/images/EmberNB.png"
              alt="lightning"
              className="mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:h-44 ImgO"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[24px] spm:text-[24px] uppercase font-bold">
              ember burst
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white">
              Give your creatures an instant boost of fire to power it up faster
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:mb-2 spm:mt-2 text-gray-300">
              Note: Can only be activated directly on the creatures tapping screen. Go to creatures page and open inventory
            </p>
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
            <img
              src="/images/NewLightningNB.png"
              alt="lightning"
              className="mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:h-44 ImgO"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[20px] spm:text-[20px] uppercase font-bold">
              energy recharge
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] spm:mt-2 text-white text-center">
              Fully replenish your energy counter so you may continue to power up your creature
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:my-3 text-gray-300">
              Note: Can only be activated directly on the creatures tapping screen. Go to creatures page and open inventory
            </p>
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
            <img
              src="/images/PotionAerial.png"
              alt="lightning"
              className="mt-2 pmx:w-[70px] pmx:mt-4 pmx:h-24 spm:w-[70px] spm:h-24"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[20px] spm:text-[20px] uppercase font-bold">
              aerial potion
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] spm:mt-2 text-white text-center">
              Use potions to rank up your creatures. The higher the rank the more prizes you will get
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:my-3 text-gray-300">
              Note: Can only be activated directly on the creatures tapping screen. Go to creatures page and open inventory
            </p>
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
            <img
              src="/images/PotionForest.png"
              alt="lightning"
              className="mt-2 pmx:w-[70px] pmx:mt-4 pmx:h-24 spm:w-[70px] spm:h-24"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[20px] spm:text-[20px] uppercase font-bold">
              forest potion
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white text-center">
              Use potions to rank up your creatures. The higher the rank the more prizes you will get
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:my-3 text-gray-300">
              Note: Can only be activated directly on the creatures tapping screen. Go to creatures page and open inventory
            </p>
          </div>
          </Box>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen6}
        placement="bottom"
        onClose={onClose6}
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
              src="/images/PotionMountain.png"
              alt="lightning"
              className="mt-2 pmx:w-[70px] pmx:mt-4 pmx:h-24 spm:w-[70px] spm:h-24"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[20px] spm:text-[20px] uppercase font-bold">
              mountain potion
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white text-center">
              Use potions to rank up your creatures. The higher the rank the more prizes you will get
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:my-3 text-gray-300">
              Note: Can only be activated directly on the creatures tapping screen. Go to creatures page and open inventory
            </p>
          </div>
          </Box>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen7}
        placement="bottom"
        onClose={onClose7}
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
              src="/images/PotionSea.png"
              alt="lightning"
              className="mt-2 pmx:w-[70px] pmx:mt-4 pmx:h-24 spm:w-[70px] spm:h-24"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[20px] spm:text-[20px] uppercase font-bold">
              sea potion
            </h3>
            <p className="text-[12px] pmx:text-[16px] spm:text-[16px] text-white text-center">
              Use potions to rank up your creatures. The higher the rank the more prizes you will get
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:my-3 text-gray-300">
              Note: Can only be activated directly on the creatures tapping screen. Go to creatures page and open inventory
            </p>
          </div>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}



