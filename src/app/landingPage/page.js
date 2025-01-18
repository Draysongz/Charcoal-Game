"use client";

import React from "react";
import Link from "next/link";
import Header from "../components/header";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
// import { useState, useEffect } from "react";
// import LoadingPage from "../components/loadingPage";

// For Modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Landing = () => {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <LoadingPage />;
  // }

  return (
    <div
      className="min-h-screen w-screen items-center"
      style={{
        backgroundImage: "url('/images/background1.png')",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        w={"100%"}
        h={"92vh"}
        sx={{
          "@media (height: 780px)": { h: "90.5vh" },
          "@media (height: 812px)": { h: "91vh" },
          "@media (height: 820px)": { h: "91vh" },
          "@media (height: 926px)": { h: "92vh" },
          "@media (height: 932px)": { h: "92vh" },
          "@media (min-height: 1030px)": { h: "93.5vh" },
        }}
      >
        <Header />

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          h={"100%"}
        >
          <div
            className="bg-black text-white flex  justify-around text-[10px] h-[50px] uppercase text-center items-center 
        "
          >
            <Link
              href="/rewards"
              className="bg-green-900 px-[3%] py-[1%] rounded-full"
            >
              daily reward
            </Link>
            <Link href="/boost" className="">
              boost
            </Link>
            <Link href="/leaderBoard" className="">
              leaderboard
            </Link>
            <Link href="/setting" className="">
              setting
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <img
                src="/images/OG.png"
                alt="OG"
                className="w-[75px] h-[70px] pmx:w-32 pmx:h-24 spm:w-[120px] p4m:w-32 spm:h-20 p4m:h-25"
                onClick={onOpen1}
              />
            </div>
            <div>
              <img
                src="/images/Cauldron.png"
                alt="cauldron"
                className="w-[70px] h-[47px] pmx:h-[70px] pmx:w-[90px]
            mt-1 spm:w-[85px] spm:h-[60px] p4m:w-[90px] p4m:h-[70px]"
                onClick={onOpen2}
              />
            </div>
          </div>

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={-5}
          >
            <Image
              src="/images/fireboy.png"
              alt="fireboy"
              w={"80%"}
              sx={{
                "@media (height: 667px)": { w: "70.5%" },
              }}
            />
            <button
              type="submit"
              className="bg-orange-600 text-white mt-3 p-2 px-20  rounded-full border border-white uppercase"
            >
              play
            </button>
          </Box>

          <Flex
            w={"100%"}
            h={"100px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={4}
            sx={{
              "@media (height: 667px)": { mt: "5px" },
            }}
          >
            <img
              src="/images/NewLightningNB.png"
              alt="lightning"
              className="w-12"
            />
            <Box
              width={"70%"}
              bg={"rgba(255, 255, 255, 0.1)"}
              h={"40px"}
              borderRadius={"100px"}
            >
              <Box
                bg={"orange.500"}
                display={"flex"}
                w={"60%"}
                h={"100%"}
                borderRadius={"100px"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
              >
                <Text color={"#ffffff"} fontWeight={800}>
                  400 / 600
                </Text>
              </Box>
            </Box>
            <Link href="/SlotMachine2">
              <img
                src="/images/spinno.png"
                alt="furnace"
                className="w-16 h-20"
              />
            </Link>
          </Flex>
        </Box>
      </Box>

      {/* Navigation */}
      <div className="bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between">
        <div className="underline decoration-orange-600 decoration-4 underline-offset-[18px]">
          <Link href="/" className="text-white">
            {" "}
            <GoHome className="text-[20px] ms-3" /> home
          </Link>
        </div>
        <div>
          <Link href="/earn" className="text-white">
            {" "}
            <LiaDollarSignSolid className="text-[20px] ms-3" /> earn
          </Link>
        </div>
        <div>
          <Link href="/play" className="text-white">
            {" "}
            <IoGameControllerOutline className="text-[20px] ms-2" /> play
          </Link>
        </div>
        <div>
          <Link href="frens" className="text-white">
            {" "}
            <HiMiniUserGroup className="text-[20px] ms-3" /> frens
          </Link>
        </div>
        <div>
          <Link href="/shop" className="text-white">
            {" "}
            <BsShopWindow className="text-[20px] ms-2" /> shop
          </Link>
        </div>
      </div>

      {/* OG Modal */}
      <Modal isOpen={isOpen1} onClose={onClose1} isCentered>
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
            <Box
              // bg={"yellow"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image w={"30%"} h={"50%"} src="/images/OG.png" alt="OG" />
            </Box>
            <Text color={"#F15B06"} fontWeight={"bold"} fontSize={"16px"}>
              OG BADGE
            </Text>
            <Text color={"white"} mb={2} fontSize={"14px"}>
              OG badge for early supporters
            </Text>
            <Text
              display={"flex"}
              flexDirection={"column"}
              px={"10%"}
              py={"2%"}
              fontSize={"14px"}
              borderRadius={"20px"}
              border={"1px solid #F15B06"}
              color={"#F15B06"}
              alignItems={"center"}
            >
              more details coming soon
            </Text>
          </Box>
        </ModalContent>
      </Modal>

      {/* OG Modal */}
      <Modal isOpen={isOpen2} onClose={onClose2} isCentered>
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
            <Box
              // bg={"yellow"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                w={"30%"}
                h={"50%"}
                src="/images/Cauldron.png"
                alt="cauldron"
              />
            </Box>
            <Text color={"#F15B06"} fontWeight={"bold"} fontSize={"16px"}>
              CAULDRON
            </Text>
            <Text color={"white"} mb={2} fontSize={"14px"}>
              Keep stacking boosters and
              <br />
              &nbsp; &nbsp; powering-up creatures
            </Text>
            <Text
              display={"flex"}
              flexDirection={"column"}
              px={"10%"}
              py={"2%"}
              fontSize={"14px"}
              borderRadius={"20px"}
              border={"1px solid #F15B06"}
              color={"#F15B06"}
              alignItems={"center"}
            >
              we cooking!
            </Text>
          </Box>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Landing;
