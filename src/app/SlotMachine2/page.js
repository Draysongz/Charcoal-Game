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
          "@media (height: 812px)": { h: "91%" },
          "@media (height: 820px)": { h: "91%" },
          "@media (height: 926px)": { h: "92%" },
          "@media (height: 932px)": { h: "92%" },
          "@media (min-height: 1100px)": { h: "93.5%" },
        }}
      >
        <div className="flex h-8 justify-around">
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
              className="bg-gray-400 border-[3px] border-white bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-white font-bold"
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
              className="bg-gray-400 border-2 border-white bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-white font-bold"
            >
              1,000+
            </div>
          </div>
        </div>
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
          width={"70%"}
          top={"65%"}
          left={"50%"}
          transform="translate(-50%, -50%)"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <img src="/images/Pointer1.png" alt="pointer" className="w-[60px]" />
          <img src="/images/Pointer2.png" alt="pointer" className="w-[60px]" />
        </Flex>

        {/* Slot */}

        <Box
          textAlign="center"
          // bg={"red"}
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
                w="70px"
                top={"5%"}
                h="190px" // Height to show 3 items
                position="relative"
                sx={{
                  "@media (min-height: 1035px)": {
                    h: "260px",
                    // bg: "red",
                    w: "80px",
                    top: "5px",
                  },
                  "@media (min-height: 1175px)": {
                    h: "260px",
                    // bg: "red",
                    w: "135px",
                    top: "5px",
                  },
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="100%"
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
                      h="70px"
                      // bg={"black"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        "@media (min-height: 1035px)": {
                          h: "90px",
                        },
                      }}
                    >
                      <img
                        src={items[index].img}
                        alt=""
                        style={{
                          width: "50%",
                          height: "50%",
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
              // mt={"-175%"}
              ms={"95%"}
              p={10}
              w={"180%"}
              borderRadius={10}
              h={'180px'}
              textAlign="center"
              position="absolute"
              bg="black"
              id="winni"
            >
              <Text fontSize="32px" fontWeight="bold" mb={10}>
                {winDetails.name}
              </Text>
              <Image
                src={winDetails.img}
                alt={winDetails.name}
                boxSize="40px"
                mx="auto"
                my={2}
                mb={10}
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
            top={"24%"}
            left={"13%"}
            w={"75%"}
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

}
export default SlotMachine2