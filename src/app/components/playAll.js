"use client";

import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { StarRating } from "./StarRatings";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";


const PlayAll = () => {
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1  } = useDisclosure()
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2  } = useDisclosure()
  return (
    <div
      className="w-[100%] flex flex-col items-center overflow-y-auto text-white"
      style={{ height: "calc(80vh - 93px)" }}
    >
      <div
        className="flex mt-4 space-x-2
    spm:space-x-3 p4m:space-x-3 forest"
      >
        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #5FBB98, #2B5545)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className=" relative">
            <img
              src="/images/Frog2.png"
              alt="frog king"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>frog</p>
            <p className="-mt-[8px]">king</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[95px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] pmx:w-[120px] spm:w-[120px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
            Available for Play
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 5 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px]">200k</span>
          </div>
        </div>

        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #6AE5F3, #1D4D53)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="relative">
            <img
              src="/images/WaterFairy.png"
              alt="water fairy"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>water</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[70px] py-[2px] px-2 rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer" onClick={onOpen2}>
            Rand Up
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 10 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">50k</span>
          </div>
        </div>
      </div>

      <div className="flex mt-2 space-x-2 spm:space-x-3 p4m:space-x-3 forest">
        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #6AE5F3, #1D4D53)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="rounded-md relative">
            <img
              src="/images/wolf.png"
              alt="wolf"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>ice</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[90px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] pmx:w-[110px] spm:w-[110px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
            LVL X required
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 0 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">100k</span>
          </div>
        </div>

        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #5FBB98, #2B5545)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="rounded-md relative">
            <img
              src="/images/EarthFairy.png"
              alt="earth fairy"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>nature</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[90px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] pmx:w-[110px] spm:w-[110px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
            LVL X required
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-5 mt-1 pm">
              pwr 0 / 10
            </span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">50k</span>
          </div>
        </div>
      </div>

      <div className="flex mt-2 space-x-2 spm:space-x-3 p4m:space-x-3 forest">
        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #D98480, #734644)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="relative">
            <img
              src="/images/antenna.png"
              alt="earth creature"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>earth</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center uppercase bg-gray-500 bg-opacity-45 w-[70px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer" onClick={onOpen1}>
              rank up
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 10 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">20k</span>
          </div>
        </div>

        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #96B4B4, #414E4E)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="relative">
            <img
              src="/images/Flameexpand2.png"
              alt="fire creature"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>fire</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[95px] pmx:w-[110px] spm:w-[110px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
              LVL X Required
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 0 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">20k</span>
          </div>
        </div>
      </div>

      <div className="flex mt-2 space-x-2 spm:space-x-3 p4m:space-x-3 forest">
        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #96B4B4, #414E4E)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="relative">
            <img
              src="/images/sojo.png"
              alt="lightning creature"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>lightning</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[90px] pmx:w-[120px] spm:w-[120px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
            Available for Play
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 1 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">20k</span>
          </div>
        </div>

        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px]"
          style={{ background: "linear-gradient(to bottom, #D98480, #734644)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="relative">
            <img
              src="/images/batGurl.png"
              alt="metal creature"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>metal</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[90px] pmx:w-[120px] spm:w-[120px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
            Available for Play
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 1 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">20k</span>
          </div>
        </div>
      </div>

      <div className="flex mt-2 space-x-2 spm:space-x-3 p4m:space-x-3 forest">
        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px]"
          style={{ background: "linear-gradient(to bottom, #D98480, #734644)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <div className="rounded-md relative">
            <img
              src="/images/seadragon.png"
              alt="air dragon"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>air</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[95px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] pmx:w-[110px] spm:w-[110px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
              LVL X Required
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 0 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">20k</span>
          </div>
        </div>

        <div
          className="rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]"
          style={{ background: "linear-gradient(to bottom, #96B4B4, #414E4E)" }}
        >
          <div className="flex justify-center gap-1 ratings mb-1">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          
          <div className="rounded-md relative">
            <img
              src="/images/ghost.png"
              alt="shadow creature"
              className="rounded-md h-[130px] w-[150px] pmx:w-[170px] spm:w-[170px]"
              style={{ backgroundSize: "100% 100%" }}
            />
            {/* <div className="absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8 timer">
              <CircularProgress
                value={97}
                color="yellow"
                trackColor="#000003"
                thickness="5px"
                size="90px"
                label="30%"
              >
                <CircularProgressLabel fontSize="14px">
                  <MdOutlineTimer className="text-[22px] ms-[34px]" />
                  05:52:30
                </CircularProgressLabel>
              </CircularProgress>
            </div> */}
          </div>
          <div className="text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1 textH">
            <p>shadow</p>
            <p className="-mt-[8px]">creature</p>
          </div>
          <div className="text-center bg-gray-500 bg-opacity-45 w-[90px] py-[2px] rounded-full text-[9px] mb-2 pmx:text-[12px] pmx:w-[120px] spm:w-[120px] spm:text-[12px] flex-1 justify-self-center cursor-pointer">
              Available for Play
          </div>
          <div className="flex justify-center uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white textB">
            <span className="text-orange-600 me-3 mt-1">pwr 6 / 10</span>
            <span className="border-e-2 border-white me-3 h-4 mt-1"></span>
            <img
              src="/images/targetNB.png"
              alt="target"
              className="w-5 h-5 mt-1 me-1"
            />
            <span className="mt-[5px] ">20k</span>
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
            // py={"15%"}
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
              className="h-24"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[20px] spm:text-[20px] uppercase font-bold">
              mountain potion
            </h3>
            <p className="text-orange-600 text-[12px] pmx:text-[16px] spm:text-[16px] text-center border-2 border-orange-600 rounded-md px-6 mb-3">
              4 Required to Rank up
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:my-3 text-gray-300">
              Take your creatures to the next level! Rank up your creatures and get better prizes
            </p>
            <p className="text-[13px] mb-2 spm:my-3 px-3 py-1 text-gray-300 font-bold bg-[#F15B06] border-2 border-white rounded-md">
              Let's go!
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
            // py={"15%"}
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
              className="h-24"
            />
            <h3 className="text-orange-600 text-[20px] pmx:text-[20px] spm:text-[20px] uppercase font-bold">
              sea potion
            </h3>
            <p className="text-orange-600 text-[12px] pmx:text-[16px] spm:text-[16px] text-center border-2 border-orange-600 rounded-md px-6 mb-3">
              2 Required to Rank up
            </p>
            <p className="text-[10px] mb-2 pmx:text-[12px] spm:text-[12px] spm:my-3 text-gray-300">
              Take your creatures to the next level! Rank up your creatures and get better prizes
            </p>
            <p className="text-[13px] mb-2 spm:my-3 px-3 py-1 text-gray-300 font-bold bg-[#F15B06] border-2 border-white rounded-md">
              Let's go!
            </p>
          </div>
          </Box>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PlayAll;
