"use client"

import React from 'react'
import Link from 'next/link'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Box, Button, Text, Input, Image } from "@chakra-ui/react";

const SlotMachine2 = () => {
const items = [
    { img: "/images/PotionForest.png", name: 'Potion Forest', payout: 4},
    { img: "/images/CharcoalNB.png", name: 'Charcoal', payout: 4},
    { img: "/images/CoinCNB.png", name: 'Coin', payout: 4},
    { img: "/images/PotionMountain.png", name: 'Potion Mountain', payout: 4},
    { img: "/images/PotionAerial.png", name: 'Potion Aerial', payout: 4},
    { img: "/images/PotionSea.png", name: 'Potion Sea', payout: 4},
    { img: "/images/EmberNB.png", name: 'Ember', payout: 4},
];

const [reels, setReels] = useState([
        [0, 1, 2,],
        [0, 1, 2,],
        [0, 1, 2,],
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

//   const handleAutoSpin = () => {
//     if (isAutoSpinning) {
//         setIsAutoSpinning(false);
//         setSpinning(false);
//         setStopping([true, true, true]); // Stop all reels
//       } else {
//         setIsAutoSpinning(true);
//         startAutoSpin();
//       }
//     };

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
    <div className='min-h-screen slot' style={{backgroundImage: "url('/images/Slotmachine2.png')", backgroundSize: "100% 91%", backgroundRepeat : 'no-repeat'}} >
        <div className='mt- flex h-8 justify-around'>
        <Link href="/coin" className='relative'>
            <img src='/images/CoinCNB.png' alt='coin' className='z-1 w-14 absolute pmx:w-16'/>
            <div className='rounded-e-full text-white bg-orange-600 z-10  mt-4 pmx:mt-5
            ms-6 pmx:ms-8 text-[12px] pe-10 ps-6 py-[2px] flex-grow-1'>
                500,000,000
            </div>
        </Link>

        <div className='relative'>
            <img src='/images/CharcoalNB.png' alt='charcoal' className='w-14 absolute pmx:w-16'/>
            <div className='bg-gray-400 border-[3px] border-white bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-white font-bold'>
                1,000+
            </div>
        </div>

        <div className='relative'>
            <img src='/images/EmberNB.png' alt='ember' className='w-14 h-14 absolute pmx:w-16 pmx:h-16'/>
            <div className='bg-gray-400 border-2 border-white bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-white font-bold'>
                1,000+
            </div>
        </div>
     </div>

     <div className='absolute top-[225px] left-[130px] pmx:top-[300px] pmx:left-[130px] spm:top-[280px] spm:left-[120px] p4m:top-[310px] p4m:left-[130px] winni'>
        <img src='/images/WIN.png' alt='win' className='h-[60px] pmx:h-[80px] spm:h-[80px] p4m:h-[90px]'  />
     </div>

     <span>
        <img src='/images/Pointer1.png' alt='pointer' className='absolute left-[30px] top-[350px] w-20 pmx:left-[40px] pmx:top-[485px] spm:top-[455px] spm:left-[33px] p4m:top-[510px] p4m:left-[47px] point1 z-10' />
        </span>
        <span>
        <img src='/images/Pointer2.png' alt='pointer' className='absolute left-[262px] top-[350px] w-20 pmx:left-[290px] pmx:top-[485px] spm:top-[455px] spm:left-[272px] p4m:top-[510px] p4m:left-[299px] point2 z-10' />
     </span>

    <Box textAlign="center" id='slot'>
       <Box display="flex"     justifyContent="center" mt={250} id='slot'>
       {reels.map((reel, i) => (
          <Box
            key={i}
            overflow="hidden"
            w="65px"
            h="190px" // Height to show 3 items
            position="relative"
            id='High'
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              w="100%"
              display="flex"
              flexDirection="column"
              animation={spinning && !stopping[i] ? "spin 0.2s linear infinite" : "none"}
            >
              {reel.map((index, j) => (
                <Box
                  key={j}
                  fontSize="4xl"
                  h="70px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  id='spinImg'
                >
                  <img
                    src={items[index].img}
                    alt=""
                    style={{ width: "50%", height: "50%", objectFit: "contain" }}
                    id='Img'
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      {winDetails && (
        <Box mt={-175} ms={95} p={10} w={180} borderRadius={10} h={180} textAlign="center" position="absolute" bg="black" id='winni'>
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
            id='WinImg'
          />
          <Text fontSize="30px" fontWeight="bold">
            {winDetails.amount}
          </Text>
        </Box>
      )}
    </Box>

{/* Progress Bar */}
     <div>
        <img src='/images/PBar.png' alt='progress bar' className='mt-[15px] ms-[80px] pmx:mt-[20px] pmx:ms-[90px] pmx:w-[220px] spm:-mt-[1px] spm:w-[220px] p4m:mt-[26px] p4m:w-[238px] Pbar' />
        <img src='/images/Bar.png' alt='bar' className='absolute top-[486px] left-[137px] pmx:top-[657px] pmx:left-[160px] spm:top-[616.5px] spm:left-[148px] p4m:top-[684px] p4m:left-[170px] bar' />
     </div>

     <div className='flex gap-[60px] ms-[70px] mt-[20px] pmx:mt-[43px] pmx:gap-[64px] spm:mt-[35px] spm:gap-[65px] p4m:mt-[45px] p4m:gap-[71px] bet-A'>
        <div>
            <img src='/images/BET-1X.png' alt='betx' className='w-[53px] h-[48px] pmx:w-[70px]' />
        </div>
        <div>
        <button aria-label={spinning ? "Stop Spin" : "Start Spin"}
        onClick={spinning ? stopSpin : startSpin} className="">
        {/* Background Button Image */}
        <img
        src="/images/Button.png"
          alt="button background"
          className="absolute top-[500px] w-[135px] h-[138.3px] ms-[120px] inset-0 pmx:top-[680px] pmx:ms-[130px] pmx:h-[140px] pmx:w-[150px] spm:top-[640px] spm:ms-[128.4px] p4m:top-[715px] p4m:ms-[140px] button"
        />
        
        {/* Conditionally render Spin or Stop image */}
        <img
          src={spinning ? "/images/stop.png" : "/images/SPIN.png"} // Toggle between Spin and Stop images
          alt={spinning ? "Stop" : "Spin"}
          className="absolute inset-0 h-[50px] mx-auto my-auto object-contain top-[450px] ms-[133px] pmx:top-[585px] pmx:h-[60px] pmx:ms-[140px] spm:ms-[142px] spm:top-[555px] p4m:top-[617px] p4m:ms-[150px] Blabel"
        />
        </button>
        </div>
        <div>
            <img src='/images/AUTO-SPIN.png' alt='auto spin' className={`w-[74px] h-[47px] pmx:w-[80px] ${isAutoSpinning ? 'active' : ''}`} onClick={handleAutoSpin} />
        </div>
     </div>

{/* Navigation Bar */}
     <div className='bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between'>
          <div className='underline decoration-orange-600 decoration-4 underline-offset-[18px]'>
            <Link href="/" className='text-white'> <GoHome className='text-[20px] ms-3'/> home</Link>
          </div>
          <div>
            <Link href="/earn" className='text-white'> <LiaDollarSignSolid className='text-[20px] ms-3' /> earn</Link>
          </div>
          <div>
            <Link href="/play" className='text-white'> <IoGameControllerOutline className='text-[20px] ms-2' /> play</Link>
          </div>
          <div>
            <Link href="frens" className='text-white'> <HiMiniUserGroup className='text-[20px] ms-3' /> frens</Link>
          </div>
          <div>
            <Link href="/shop" className='text-white'> <BsShopWindow className='text-[20px] ms-2' /> shop</Link>
          </div>
         </div>
    </div>
  )
}

export default SlotMachine2