"use client";

import React from "react";
import Link from "next/link";
<<<<<<< HEAD
import Header from "../components/header";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
=======
import { useRouter } from "next/navigation";
import Header from "../components/header";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
=======
  const router = useRouter()
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
=======
  const handleSpin = () => {
    router.push("/SlotMachine2")
  }
>>>>>>> 84608e139995d711615403fc490b51babd812913

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
<<<<<<< HEAD
        <Header />

=======
        <div className="flex h-8 justify-around mb-8">
        <Link href="/coin" className="relative">
          <img
            src="/images/CoinCNB.png"
            alt="coin"
            className="z-1 w-14 absolute pmx:w-16"
          />
          <div
            className="rounded-e-full text-white bg-orange-600 z-10  mt-4 pmx:mt-5
            ms-6 pmx:ms-8 text-[12px] pe-10 ps-6 py-[2px] flex-grow-1"
          >
            500,000,000
          </div>
        </Link>

        <div className="relative">
          <img
            src="/images/CharcoalNB.png"
            alt="charcoal"
            className="w-14 absolute pmx:w-16"
          />
          <div
            className="bg-transparent border-2 border-white bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-white"
          >
            1,000+
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/EmberNB.png"
            alt="ember"
            className="w-14 h-14 absolute pmx:w-16 pmx:h-16"
          />
          <div
            className="bg-transparent border-2 border-white bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-white"
          >
            1,000+
          </div>
        </div>
      </div>
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
            <Link href="/boost" className="">
              boost
            </Link>
            <Link href="/leaderBoard" className="">
              leaderboard
            </Link>
            <Link href="/setting" className="">
              setting
=======
            <Link href="/inventory" className="">
              inventory
            </Link>
            <Link href="/boost" className="">
              upgrades
            </Link>
            <Link href="/leaderboard" className="">
              settings
>>>>>>> 84608e139995d711615403fc490b51babd812913
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <img
                src="/images/OG.png"
                alt="OG"
<<<<<<< HEAD
                className="w-[75px] h-[70px] pmx:w-32 pmx:h-24 spm:w-[120px] p4m:w-32 spm:h-20 p4m:h-25"
=======
                className="pmx:w-32 pmx:h-24 pt-3 spm:w-32 p4m:w-32 spm:h-20 p4m:h-25"
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
              "@media (height: 667px)": { mt: "5px" },
=======
              "@media (height: 667px)": { mt: "5px", pb: 5 },
>>>>>>> 84608e139995d711615403fc490b51babd812913
            }}
          >
            <img
              src="/images/NewLightningNB.png"
              alt="lightning"
<<<<<<< HEAD
              className="w-12"
=======
              className="w-24 h-24"
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
                src="/images/furnace.png"
                alt="furnace"
                className="w-16 h-20"
=======
                src="/images/spinnershot.png"
                alt="furnace"
                className="w-24 h-24"
>>>>>>> 84608e139995d711615403fc490b51babd812913
              />
            </Link>
          </Flex>
        </Box>
      </Box>

<<<<<<< HEAD
      {/* Navigation */}
=======
>>>>>>> 84608e139995d711615403fc490b51babd812913
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

<<<<<<< HEAD
      {/* OG Modal */}
=======
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
            w={"90%"}
            borderRadius={"30px"}
=======
            w={"80%"}
            borderRadius={"10px"}
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
            <Text color={"#F15B06"} fontWeight={"bold"} fontSize={"16px"}>
=======
            <Text color={"#F15B06"} fontWeight={"bold"} fontSize={"16px"} mb={"12px"} mt={"16px"}>
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
              borderRadius={"20px"}
              border={"1px solid #F15B06"}
              color={"#F15B06"}
              alignItems={"center"}
=======
              alignItems={"center"}
              color={"#fff"}
>>>>>>> 84608e139995d711615403fc490b51babd812913
            >
              more details coming soon
            </Text>
          </Box>
        </ModalContent>
      </Modal>

<<<<<<< HEAD
      {/* OG Modal */}
=======
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
            w={"90%"}
            borderRadius={"30px"}
=======
            w={"80%"}
            borderRadius={"20px"}
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
            <Text color={"#F15B06"} fontWeight={"bold"} fontSize={"16px"}>
=======
            <Text color={"#F15B06"} fontWeight={"bold"} fontSize={"16px"} mb={"12px"} mt={"16px"}>
>>>>>>> 84608e139995d711615403fc490b51babd812913
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
<<<<<<< HEAD
              borderRadius={"20px"}
              border={"1px solid #F15B06"}
              color={"#F15B06"}
              alignItems={"center"}
            >
              we cooking!
=======
              color={"#fff"}
              alignItems={"center"}
            >
              We cooking!
>>>>>>> 84608e139995d711615403fc490b51babd812913
            </Text>
          </Box>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Landing;
