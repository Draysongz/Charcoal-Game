<<<<<<< HEAD
=======
"use client"
>>>>>>> 84608e139995d711615403fc490b51babd812913
import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
<<<<<<< HEAD

const Daily = () => {
  return (
=======
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Daily = () => {
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1  } = useDisclosure()
  return (
    <>
>>>>>>> 84608e139995d711615403fc490b51babd812913
    <div className="mt-5 p-4 w-[100%] uppercase text-[14px] font-semibold flex flex-col gap-5 text-white">
      <div className="bg-gray-800 rounded-full border-2 border-orange-600 py-2 px-5  flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="text-[25px]">
            <BsYoutube className="fill-red-600" />
          </div>
          <div className="w-[200px] flex flex-col">
            <p className="text-orange-600 text-[12px] no-wrap">
              follow our youtube
            </p>
            <div className="flex items-center gap-1">
              <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
              <span className="text-[13px]">20k</span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <MdKeyboardArrowRight className="text-[20px] text-white" />
=======
        <MdKeyboardArrowRight className="text-[20px] text-white" onClick={onOpen1} />
>>>>>>> 84608e139995d711615403fc490b51babd812913
      </div>
      <div className="bg-gray-800 rounded-full border-2 border-orange-600 py-2 px-5  flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-[25px]">
            <FaTwitter className="text-blue-600" />
          </div>
          <div className="w-[200px] flex flex-col">
            <p className="text-orange-600 text-[12px] no-wrap">
              follow our twitter
            </p>
            <div className="flex items-center gap-1">
              <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
              <span className="text-[13px]">20k</span>
            </div>
          </div>
        </div>
        <MdKeyboardArrowRight className="text-[20px] text-white" />
      </div>
      <div className="bg-gray-800 rounded-full border-2 border-orange-600 py-2 px-5  flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="text-[25px]">
            <FaTelegramPlane className="bg-blue-500 rounded-full p-[3px]" />
          </div>
          <div className="w-[200px] flex flex-col">
            <p className="text-orange-600 text-[12px] no-wrap">
              follow our telegram
            </p>
            <div className="flex items-center gap-1">
              <img src="/images/CoinCNB.png" className=" w-5 h-4 " />
              <span className="text-[13px]">20k</span>
            </div>
          </div>
        </div>
        <MdKeyboardArrowRight className="text-[20px] text-white" />
      </div>
    </div>
<<<<<<< HEAD
=======
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
                bg={"white"}
                p={"1%"}
                // px={"30%"}
                w={"70%"}
                borderRadius={"10px"}
                position={"absolute"}
                top={"50%"}
                left={"50%"}
                transform="translate(-50%, -50%)"
              >
              <div className="boost1 bg-white rounded-t-3xl flex flex-col pt-5">
                <h3 className="text-black text-[20px] pmx:text-[20px] spm:text-[20px] uppercase font-bold">
                  Daily Task
                </h3>
                <p className="font-bold mb-12">Do you want to proceed?</p>
                <div className='flex justify-between gap-2 border'>
                  <button className='text-blue-500 text-lg text-center border-r px-10 pb-1' onClick={onClose1}>Cancel</button>
                  <button className='text-blue-600 text-lg mr-8'>Accept</button>
                </div>
              </div>
              </Box>
            </ModalContent>
          </Modal>
          </>
>>>>>>> 84608e139995d711615403fc490b51babd812913
  );
}

export default Daily