"use client";

import React from "react";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Box, Flex, Button, Text, Input, Image } from "@chakra-ui/react";
import Header from "../components/header";

const SlotMachine2 = () => {
  const items = [
    { img: "/images/PotionForest.png", name: "Potion Forest", payout: 4 },
    { img: "/images/CharcoalNB.png", name: "Charcoal", payout: 4 },
    { img: "/images/CoinCNB.png", name: "Coin", payout: 4 },
    { img: "/images/PotionMountain.png", name: "Potion Mountain", payout: 4 },
    { img: "/images/PotionAerial.png", name: "Potion Aerial", payout: 4 },
    { img: "/images/PotionSea.png", name: "Potion Sea", payout: 4 },
    { img: "/images/EmberNB.png", name: "Ember", payout: 4 },
  ];

  const [reels, setReels] = useState([
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2],
  ]);
  const [spinning, setSpinning] = useState(false);
  const [stopping, setStopping] = useState([false, false, false]); // For sequential stopping
  const [bet, setBet] = useState(1);
  const [message, setMessage] = useState("");
  const [winDetails, setWinDetails] = useState(null);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);

  const startSpin = () => {
    if (bet <= 0) {
      setMessage("Please place a valid bet to start!");
      return;
    }
    setSpinning(true);
    setStopping([false, false, false]);
    setMessage("");
    setWinDetails(null);
  };

  const stopSpin = () => {
    setStopping([true, false, false]); // Start stopping the first reel
  };

  const handleAutoSpin = () => {
    if (isAutoSpinning) {
      setIsAutoSpinning(false);
      setSpinning(false);
    } else {
      setIsAutoSpinning(true);
      startSpin();
    }
  };

  const stopNextReel = (index) => {
    if (index < 2) {
      setTimeout(() => {
        setStopping((prev) => {
          const newStopping = [...prev];
          newStopping[index + 1] = true;
          return newStopping;
        });
      }, 500); // Delay for sequential stopping
    } else {
      setSpinning(false);
      checkWin();
    }
  };

  const checkWin = () => {
    const finalReel = reels.map((reel) => reel[1]); // Get the middle row
    if (finalReel[0] === finalReel[1] && finalReel[1] === finalReel[2]) {
      const winningItem = items[finalReel[0]];
      const winAmount = bet * winningItem.payout;
      setWinDetails({
        name: winningItem.name,
        img: winningItem.img,
        amount: winAmount,
      });
      setMessage(`🎉 You win ${winAmount}!`);
    } else {
      setMessage("Better luck next time!");
    }
  };

  useEffect(() => {
    let intervals = [];
    if (spinning) {
      intervals = reels.map((_, i) =>
        setInterval(() => {
          if (!stopping[i]) {
            setReels((prevReels) =>
              prevReels.map((reel, j) =>
                j === i
                  ? [...reel.slice(1), randomIndex()] // Move top to bottom
                  : reel
              )
            );
          } else {
            clearInterval(intervals[i]);
            stopNextReel(i);
          }
        }, 100)
      );
    }
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [spinning, stopping]);

  const randomIndex = () => Math.floor(Math.random() * items.length);

  return (
    <Box h={"100vh"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        h={{ base: "88.6%", sm: "90.9%", md: "93%" }}
        zIndex={"0"}
        bgImage={"/images/Slotmachine2.png"}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        bgSize={"100% 100%"}
        position={"relative"}
        sx={{
          "@media (height: 780px)": { h: "90.5%" },
          "@media (height: 800px)": { h: "90.5%" },
          "@media (height: 812px)": { h: "91%" },
          "@media (height: 820px)": { h: "91%" },
          "@media (height: 822px)": { h: "91%" },
          "@media (height: 926px)": { h: "92%" },
          "@media (height: 932px)": { h: "92%" },
          "@media (min-height: 1100px)": { h: "93.5%" },
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
            zIndex={1}
            p={0}
          />
          <Text
            bg={"#F15B06"}
            borderRightRadius={"100px"}
            py={1}
            px={3}
            ml={-4}
            zIndex={0}
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
          zIndex={1}
          p={0}
        />
        <Text
          border="1px solid #fff"
          borderRightRadius={"100px"}
          py={1}
          px={3}
          ml={-5}
          zIndex={0}
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
          zIndex={1}
          p={0}
        />
        <Text
          border="1px solid #fff"
          borderRightRadius={"100px"}
          py={1}
          px={3}
          ml={-5}
          zIndex={0}
          mt={1}
          fontSize={"10px"}
          textAlign={"left"}
          color={"#fff"}
        >
          1,000+
        </Text>
      </Box>
      </Flex>

        <Image
          src="/images/WIN.png"
          alt="win"
          w={"30%"}
          position={"absolute"}
          top={"42%"}
          left={"50%"}
          transform="translate(-50%, -50%)"
        />
        <Flex
          position={"absolute"}
          top={"65%"}
          left={"50%"}
          transform="translate(-50%, -50%)"
          justifyContent={"space-between"}
          alignItems={"center"}
          className="w-[85%] pmx:w-[80%] spm:w-[83%]"
          zIndex={"10"}
        >
          <img src="/images/Pointer1.png" alt="pointer" className="w-[80px]" />
          <img src="/images/Pointer2.png" alt="pointer" className="w-[80px]" />
        </Flex>

        {/* Slot */}

        <Box
          textAlign="center"
          position={"absolute"}
          top={"63.5%"}
          left={"50%"}
          transform="translate(-50%, -50%)"
        >
          <Box display="flex" justifyContent="center" alignItems={"center"}>
            {reels.map((reel, i) => (
              <Box
                key={i}
                overflow="hidden"
                w={{ base: "66px", sm: "67px", md: "77px", lg: "100px" }}
                top={{ base: "10px", sm: "10px", md: "10px", lg: "10px" }}
                h={{ base: "180px", sm: "200px", md: "250px", lg: "300px" }}
                left={{ base: "3%", sm: "0%", md: "0%", lg: "20%" }}
                position="relative"
                sx={{
                 "@media (min-height: 1175px)": {
                   h: "260px",
                   w: "130px",
                   top: "5px",
                   left: "20px"
                 },
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                  display="flex"
                  flexDirection="column"
                  animation={
                    spinning && !stopping[i]
                      ? "spin 0.2s linear infinite"
                      : "none"
                  }
                >
                  {reel.map((index, j) => (
                    <Box
                      key={j}
                      fontSize="4xl"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w={{ base: "50px", sm: "60px", md: "70px", lg: "100px" }}
                      h={{ base: "50px", sm: "60px", md: "70px", lg: "100px" }}
                      mb={{ base: "10px", sm: "15px", md: "20px" }}
                    >
                      <img
                        src={items[index].img}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
            
          {winDetails && (
            <Box
              mt={"-45%"}
              ms={"49%"}
              p={1}
              w={"100%"}
              borderRadius={10}
              h={"200px"}
              textAlign="center"
              position="absolute"
              textColor={"white"}
              transform="translate(-50%, -50%)"
              bg="black"
              id="winni"
              display={"flex"}
              flexDirection={"column"}
              gap={3}
            >
              <Text fontSize="25px" fontWeight="bold">
                {winDetails.name}
              </Text>
              <Image
                src={winDetails.img}
                alt={winDetails.name}
                boxSize="40px"
                mx="auto"
                my={2}
                id="WinImg"
              />
              <Text fontSize="30px" fontWeight="bold">
                {winDetails.amount}
              </Text>
            </Box>
          )}
        </Box>

        {/* Progress Bar */}
        <Box
          display={"grid"}
          position={"absolute"}
          top={"82.3%"}
          left={"49%"}
          bg={""}
          transform="translate(-50%, -50%)"
          bgImage={"/images/PBar.png"}
          bgRepeat={"no-repeat"}
          bgSize={"100% 100%"}
          w={"50%"}
          bgPos={"center"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src="/images/Bar.png" alt="bar" />
        </Box>

        {/* Bet Button */}
        <Image
          w={"10%"}
          position={"absolute"}
          top={"92.3%"}
          left={"25%"}
          transform="translate(-50%, -50%)"
          src="/images/BET-1X.png"
          alt="betx"
        />

        {/* Spin Button*/}
        <Button
          bg={"transparent"}
          position={"absolute"}
          top={"92.3%"}
          left={"50%"}
          transform="translate(-50%, -50%)"
          bgImage={"/images/Button.png"}
          bgRepeat={"no-repeat"}
          w={"35%"}
          h={"17%"}
          bgSize={"100% 100%"}
          _hover={{ bg: "transparent" }}
          aria-label={spinning ? "Stop Spin" : "Start Spin"}
          onClick={spinning ? stopSpin : startSpin}
        >
          <Image
            src={spinning ? "/images/stop.png" : "/images/SPIN.png"}
            alt={spinning ? "Stop" : "Spin"}
            position={"absolute"}
            top={"30%"}
            left={"25%"}
            w={"50%"}
            // transform="translate(-50%, -50%)"
            // _hover={{bg: 'transparent'}}
          />
        </Button>

        {/* Auto Spin */}
        <Image
          w={"12%"}
          position={"absolute"}
          top={"92.3%"}
          left={"73.5%"}
          transform="translate(-50%, -50%)"
          src="/images/AUTO-SPIN.png"
          alt="auto spin"
          className={`${isAutoSpinning ? "active" : ""}`}
          onClick={handleAutoSpin}
        />
      </Box>

      {/* NAVIGATION BAR */}
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
    </Box>
  );
};

export default SlotMachine2;
