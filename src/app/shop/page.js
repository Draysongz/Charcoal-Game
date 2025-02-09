import React from "react";
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from "next/link";
import { Box, Flex, Button, Text, Select, Image } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

const Shop = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/images/SHOP2.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <Flex
      w={"100vw"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={2}
      h={"60px"}
    >
      <Link href="/coin">
        <Box display={"flex"} alignItems={"center"}>
          <Image
            src="/images/CoinCNB.png"
            w={{ base: "50px", sm: "50px" }}
            zIndex={2}
            p={0}
          />
          <Text
            bg={"#F15B06"}
            borderRightRadius={"100px"}
            py={1}
            px={3}
            ml={-4}
            zIndex={1}
            mt={1}
            fontSize={"10px"}
            textAlign={"left"}
            color={"white"}
          >
            500,000,000
          </Text>
        </Box>
      </Link>
      <Box display={"flex"} alignItems={"center"}>
        <Image
          src="/images/CharcoalNB.png"
          w={{ base: "50px", sm: "50px" }}
          zIndex={2}
          p={0}
        />
        <Text
          border="1px solid #fff"
          borderRightRadius={"100px"}
          py={1}
          px={3}
          ml={-5}
          zIndex={1}
          mt={1}
          fontSize={"10px"}
          textAlign={"left"}
          color={"#Fff"}
        >
          1,000+
        </Text>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Image
          src="/images/EmberNB.png"
          w={{ base: "50px", sm: "50px" }}
          zIndex={2}
          p={0}
        />
        <Text
          border="1px solid #fff"
          borderRightRadius={"100px"}
          py={1}
          px={3}
          ml={-5}
          zIndex={1}
          mt={1}
          fontSize={"10px"}
          textAlign={"left"}
          color={"#Fff"}
        >
          1,000+
        </Text>
      </Box>
    </Flex>

      <Box
        display={"flex"}
        bgImage={"/images/charcoal_wood.png"}
        bgRepeat={"no-repeat"}
        bgSize={"100% 100%"}
        alt="charcoal_wood"
        w={"100%"}
        h={"30%"}
        position={"absolute"}
        top={"15%"}
        left={"50%"}
        transform="translate(-50%, -50%)"
        bgPos={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        zIndex={0}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"bold"}
          justify={"space-around"}
          gap={2}
          mb={6}
        >
          <Text textColor={"#F15B06"}>TOTAL</Text>
          <Image
            src="/images/toncoinTonLogo.png"
            alt="ton vogo"
            w={"10%"}
            h={"5%"}
          />
          <Text textColor={"white"}>0.4</Text>
          <Text textColor={"#F15B06"}>OR</Text>
          <Image
            src="/images/starNB.png"
            alt="telegram star"
            w={"10%"}
            h={"5%"}
          />
          <Text textColor={"white"}>150</Text>
        </Flex>
      </Box>

      <div className="fixed bottom-[150px] pmx:bottom-[130px] flex w-full">
        <img
          src="/images/Free.png"
          alt="free star"
          className="absolute -top-[23px] left-[25%] pmx:-top-5 pmx:left-[100px] transform [rotate:43deg] 
          w-16"
        />
        <div className="flex flex-1 items-center justify-between w-full">
          <div>
            <img
              src="/images/today.png"
              alt="special board"
              className="w-40 h-40"
            />
            <div className="absolute pmx:-ms-2 top-[50%] w-16 pmx:w-12 left-7 pmx:left-9">
              <img
                src="/images/CharcoalNB.png"
                alt="charcoal"
                className="w-12 absolute pmx:w-16"
              />
              <div
                className="text-[12px] text-white
                 mt-3 ms-6 pmx:ms-10 ps-5 pmx:ps-2 w-16 pmx:w-14 font-bold"
              >
                <span>1,000</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/images/Menu4.png"
              alt="menu board"
              className="w-42 h-40"
            />
            <div className="absolute pmx:-ms-2 top-[33%] w-full left-[71%] pmx:left-[78%]" id="selecty">
              <img
                src="/images/EmberNB.png"
                alt="ember"
                className="w-12 h-12 ms-3"
                id="selectImg"
              />
              <Select
                display={"flex"}
                flexDirection={"inherit"}
                alignItems={"center"}
                bg={"#FEFEFF33"}
                h={"20px"}
                w={{base: "20vw", md: "17vw"}}
                mt={1}
                fontSize={"9px"}
                fontWeight={"semibold"}
                variant="outline"
                color={"white"}
                icon={<MdArrowDropDown className="" />}
                id="option"
              >
                <option value="option 1">1,000</option>
                <option value="option 2">2,000</option>
                <option value="option 3">3,000</option>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-24 pmx:bottom-[85px] fixed w-full">
        <div className="flex flex-auto justify-center items-center gap-2">
          <div className="bg-orange-600 border-2 border-white rounded-md p-1 h-8 me-2">
            <span className="uppercase font-bold text-[10px] text-white flex flex-1 items-center leading-5">
              confirm:
            </span>
          </div>
          <div className="border-2 border-white p-1 rounded-md">
            <img
              src="/images/toncoinTonLogo.png"
              alt="ton"
              className="w-8 h-8"
            />
          </div>
          <div className="border-2 border-white p-1 rounded-md">
            <img src="/images/starNB.png" alt="star" className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between">
        <div>
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
        <div className="underline decoration-orange-600 decoration-4 underline-offset-[18px]">
          <Link href="/shop" className="text-white">
            {" "}
            <BsShopWindow className="text-[20px] ms-2" /> shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
