"use client"

import React from 'react'
import { PiHandTap } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FcChargeBattery } from "react-icons/fc";

//drawer
import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

export const Booster = () => {
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1  } = useDisclosure()

    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2  } = useDisclosure()

    const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3  } = useDisclosure()

    const { isOpen: isOpen4, onOpen: onOpen4, onClose: onClose4  } = useDisclosure()

    const { isOpen: isOpen5, onOpen: onOpen5, onClose: onClose5  } = useDisclosure()
    // const btnRef = React.useRef()

  return (
    <>
      <div className="mt-10 uppercase font-semibold w-[100%] flex flex-col items-center text-white">
        <h3 className="text-center font-bold text-[20px]">free daily boost</h3>
        <div className="p-4 w-[375px] pmx:w-[411px] text-[13px] flex gap-8 pmx:p-8">
          <div
            className="bg-gray-800 rounded-full border-2 border-orange-600 p-3 flex w-40 cursor-pointer"
            onClick={onOpen1}
          >
            <div className="me-1 text-[25px]">
              <img
                src="/images/CharcoalNB.png"
                alt="charcoal"
                className=" w-11 h-10 "
              />
            </div>
            <div>
              <span className="text-orange-600 text-[14px]">charcoal</span>
              <br />
              <span className="text-[13px]">50/3</span>
            </div>
          </div>

          <div
            className="bg-gray-800 rounded-full border-2 border-orange-600 p-3 flex w-40 cursor-pointer"
            onClick={onOpen2}
          >
            <div className="me-1 text-[25px]">
              <img
                src="/images/NewLightningNB.png"
                alt="lightning"
                className=" w-11 h-10 "
              />
            </div>
            <div>
              <span className="text-orange-600 text-[14px]">energy</span>
              <br />
              <span className="text-[13px]">3/3</span>
            </div>
          </div>
        </div>

        <div className="w-[375px] pmx:w-[411px] p-4 pmx:p-8">
          <h3 className="text-center text-[20px] font-bold">boosters</h3>
          <div
            className="bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3 items-center w-[100%] justify-between cursor-pointer"
            onClick={onOpen3}
          >
            <div className="flex items-center w-[60%]">
              <div className="me-4 text-[30px]">
                <PiHandTap className="p-[3px] w-8 h-8 text-[50px] text-white" />
              </div>
              <div className="w-[70%] flex flex-col">
                <span className="text-orange-600 text-[14px] flex flex-auto items-center justify-between w-full">
                  multi tap
                </span>
                <div className="flex items-center gap-2">
                  <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
                  <span className="text-[13px">20k</span>
                </div>
              </div>
            </div>
            <div className="text-[14px] flex items-center">
              <span className=" text-orange-600">level 1</span>
              <MdKeyboardArrowRight className="text-[25px]" />
            </div>
          </div>
          <div
            className="bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3 items-center w-[100%] justify-between cursor-pointer"
            onClick={onOpen4}
          >
            <div className="flex items-center w-[60%]">
              <div className="me-4 text-[30px]">
                <BsFillLightningChargeFill className=" text-indigo-400 p-[3px] w-8 h-8" />
              </div>
              <div className="w-[70%] flex flex-col">
                <span className="text-orange-600 text-[14px]">
                  energy limit
                </span>
                <div className="flex items-center gap-2">
                  <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
                  <span className="text-[13px]">20k</span>
                </div>
              </div>
            </div>
            <div className="text-[14px] flex items-center">
              <span className=" text-orange-600">level 1</span>
              <MdKeyboardArrowRight className="text-[25px]" />
            </div>
          </div>
          <div
            className="bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3 items-center w-[100%] justify-between cursor-pointer"
            onClick={onOpen5}
          >
            <div className="flex items-center  w-[60%]">
              <div className="me-4 text-[30px]">
                <FcChargeBattery className="p-[3px] w-8 h-8" />
              </div>
              <div className="w-[70%] flex flex-col">
                <span className="text-orange-600 text-[14px]">recharge</span>
                <div className="flex items-center gap-2">
                  <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
                  <span className="text-[13px]">20k</span>
                </div>
              </div>
            </div>
            <div className="text-[14px] flex items-center">
              <span className=" text-orange-600">level 1</span>
              <MdKeyboardArrowRight className="text-[25px]" />
            </div>
          </div>
        </div>
      </div>

      <Drawer
        isOpen={isOpen1}
        placement="bottom"
        onClose={onClose1}
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
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <img
              src="/images/CharcoalNB.png"
              alt="charcoal"
              className="mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:h-44 ImgO"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[30px] spm:text-[30px] uppercase font-bold">
              charcoal
            </h3>
            <p className="text-[12px] pmx:text-[20px] spm:text-[20px] text-white">
              Charge up your creature
            </p>
            <p className="text-[12px] mb-2 pmx:text-[20px] spm:text-[20px] spm:mb-3 text-white">
              +1 coin tap per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 rounded-full w-40 relative py-2 mb-5 flex items-center justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6" />
                <span className=" text-[11px] text-white">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer
        isOpen={isOpen2}
        placement="bottom"
        onClose={onClose2}
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
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <img
              src="/images/NewLightningNB.png"
              alt="lightning"
              className="mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:h-44 ImgO"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[30px] spm:text-[30px] uppercase font-bold">
              energy
            </h3>
            <p className="text-[12px] pmx:text-[20px] spm:text-[20px] text-white">
              increase your energy limit, so you
              <br />
              can combat the enemy more
            </p>
            <p className="text-[12px] mb-2 pmx:text-[20px] spm:text-[20px] spm:mb-3 text-white">
              +500 energy per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 rounded-full w-40 relative py-2 mb-5 flex items-center justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6" />
                <span className=" text-[11px] text-white">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <Drawer
        isOpen={isOpen3}
        placement="bottom"
        onClose={onClose3}
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
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <PiHandTap className="text-[100px] mt-2 pmx:w-[130px] pmx:mt-4 pmx:h-40 spm:w-[160px] spm:h-44 ImgI text-white" />
            <h3 className="text-orange-600 text-[20px] pmx:text-[30px] spm:text-[30px] uppercase font-bold">
              multi tap
            </h3>
            <p className="text-[12px] pmx:text-[20px] spm:text-[20px] text-white text-center">
              increase the amount of coins
              <br />
              earned by tap
            </p>
            <p className="text-[12px] mb-2 pmx:text-[20px] spm:text-[20px] spm:mb-3 text-white">
              +1 coin tap per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 rounded-full w-40 relative py-2 mb-5 flex items-center justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6" />
                <span className=" text-[11px] text-white">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <Drawer
        isOpen={isOpen4}
        placement="bottom"
        onClose={onClose4}
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
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <BsFillLightningChargeFill className="text-indigo-400 text-[100px] mt-2 pmx:w-[130px] pmx:mt-4 pmx:h-40 spm:w-[160px] spm:h-44 ImgI" />
            <h3 className="text-orange-600 text-[20px] pmx:text-[30px] spm:text-[30px] uppercase font-bold">
              energy limit
            </h3>
            <p className="text-[12px] pmx:text-[20px] spm:text-[20px] text-white text-center">
              increase your energy limit, so you
              <br />
              can combat the enemy more
            </p>
            <p className="text-[12px] mb-2 pmx:text-[20px] spm:text-[20px] spm:mb-3 text-white">
              +500 energy per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 rounded-full w-40 relative py-2 mb-5 flex items-center justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6" />
                <span className=" text-[11px] text-white">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <Drawer
        isOpen={isOpen5}
        placement="bottom"
        onClose={onClose5}
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
          <div className="boost1 bg-black rounded-t-3xl flex flex-col items-center pt-5 pb-10">
            <FcChargeBattery className="text-indigo-400 text-[100px] mt-2 pmx:w-[130px] pmx:mt-4 pmx:h-40 spm:w-[160px] spm:h-44 ImgN" />
            <h3 className="text-orange-600 text-[20px] pmx:text-[30px] spm:text-[30px] uppercase font-bold">
              recharge
            </h3>
            <p className="text-[12px] pmx:text-[20px] spm:text-[20px] text-white text-center">
              Charge up your creature
            </p>
            <p className="text-[12px] mb-2 pmx:text-[20px] spm:text-[20px] spm:mb-3 text-white">
              +1 coin tap per level
            </p>
            <span className="text-[11px]">
              <div className="border-2 border-orange-600 rounded-full w-40 relative py-2 mb-5 flex items-center justify-center">
                <img src="/images/CoinCNB.png" alt="coin" className="w-7 h-6" />
                <span className=" text-[11px] text-white">4,000</span>
              </div>
            </span>
            <div className="bg-orange-600 border-2 border-white px-32 h-10 rounded-full uppercase text-[13px] flex items-center text-white">
              <div className="">get</div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}



