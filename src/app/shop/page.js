import React from "react";
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from "next/link";
import { Box, Flex, Button, Text, Select, Image } from "@chakra-ui/react";
import NavBar from "../components/navBar";
import Header from "../components/header";
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
      <div className="flex h-8 justify-around">
        <Link href="/coin" className="relative z-10">
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

        <div className="relative z-10">
          <img
            src="/images/CharcoalNB.png"
            alt="charcoal"
            className="w-14 absolute pmx:w-16"
          />
          <div
            className="bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600 font-bold"
          >
            1,000+
          </div>
        </div>

        <div className="relative z-10">
          <img
            src="/images/EmberNB.png"
            alt="ember"
            className="w-14 h-14 absolute pmx:w-16 pmx:h-16"
          />
          <div
            className="bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600 font-bold"
          >
            1,000+
          </div>
        </div>
      </div>

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
            <div className="absolute pmx:-ms-2 top-[33%] w-full left-[71%] pmx:left-[78%]">
              <img
                src="/images/EmberNB.png"
                alt="ember"
                className="w-12 h-12 ms-3"
              />
              <Select
                // className="bg-[#FEFEFF33]
                // border-4 border-white bg-opacity-20 top-11 pmx:top-8 left-8 pmx:left-7 h-[10%]
                // rounded-full text-[7px] p-2 mt-3 pmx:mt-5 ms-6 pmx:ms-10 text-white font-bold w-[10%]"
                display={"flex"}
                flexDirection={"inherit"}
                alignItems={"center"}
                bg={"#FEFEFF33"}
                h={"20px"}
                w={{base: "20vw", md: "18vw"}}
                mt={1}
                fontSize={"9px"}
                fontWeight={"semibold"}
                variant="outline"
                color={"white"}
                icon={<MdArrowDropDown className="" />}
                id="options"
              >
                <option value="option 1">1,000</option>
                <option value="option 2">2,000</option>
                <option value="option 3">3,000</option>
              </Select>
              {/* <div
                className="bg-[#FEFEFF33] flex items-center justify-between absolute border-2 border-white top-14 left-[57px] h-[2%]
                rounded text-[12px] p-3 w-[20%] text-white font-bold"
              >
                1,000
                <MdArrowDropDown />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
      {/* <Box 
      position={"fixed"} 
      bottom={20} 
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      justify={"space-around"}
      >
        <Box
          display={"flex"}
          flexDirection={"colume"}
          bgImage={"/images/today.png"}
          bgRepeat={"no-repeat"}
          bgSize={"100% 100%"}
          position={"relative"}
          top={"50%"}
          left={"50%"}
          w={"30%"}
          transform="translate(-50%, -50%)"
          bgPos={"center"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src="/images/Free.png"
            w={"50%"}
            h={"50%"}
            transform="rotate(43deg)"
          />
          <Image src="/images/charcoalNB.png" w={"50%"} h={"50%"} />
          <Text>1,000</Text>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"colume"}
          bgImage={"/images/Menu4.png"}
          bgRepeat={"no-repeat"}
          bgSize={"100% 100%"}
          position={"relative"}
          top={"50%"}
          left={"50"}
          w={"30%"}
          transform="translate(-50%, -50%)"
          bgPos={"center"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src="/images/EmberNB.png" w={"50%"} h={"50%"} />
          <Text>1,000</Text>
        </Box>
      </Box> */}

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
