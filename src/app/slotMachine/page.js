"use client"

import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import Header from '../components/header';
import { useState, useEffect, useMemo } from 'react';

const SlotImage = ({ isSpinning, images }) => {
  const randomImage = useMemo(() => images[Math.floor(Math.random() * images.length)], [images]);
  return (
    <div className={`slot-image ${isSpinning ? 'spin blur-[2px]' : ''}`}>
      <img src={randomImage} alt="Slot" />
    </div>
  );
};

const SlotMachine = () => {
    // const [isSpinning, setIsSpinning] = useState(false);
    // const [isAutoSpinning, setIsAutoSpinning] = useState(false);

  const [isSpinning, setIsSpinning] = useState(false);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const [winMessage, setWinMessage] = useState('');
  const [isStop, setIsStop] = useState(false); // New state to control stop behavior
  const [shuffledImages, setShuffledImages] = useState([]); // Added state for shuffled images
  const [intervalId, setIntervalId] = useState(null);

//    // Toggle spin state
//   const toggleSpin = () => {
//     setIsSpinning(prev => !prev);
//   };

//   // Toggle auto spin state
//   const toggleAutoSpin = () => {
//    setIsAutoSpinning((prev) => !prev);
//  };

  const images = [
    "/images/PotionAerial.png",
    "/images/EmberNB.png",
    "/images/PotionSea.png",
    "/images/CoinCNB.png",
    "/images/CoinCNB.png",
    "/images/CoinCNB.png",
    "/images/PotionMountain.png",
    "/images/CoinCNB.png",
    "/images/PotionForest.png"
  ];


    // // Auto-spin effect
    // useEffect(() => {
    //     if (isAutoSpinning) {
    //       const intervalId = setInterval(() => {
    //         setIsSpinning(true);
    //         setTimeout(() => {
    //           setIsSpinning(false);
    //         }, 1000); // Stop spinning after 1 second
    //       }, 1500); // Spin every 1.5 seconds
    
    //       return () => clearInterval(intervalId); // Clean up interval on unmount or auto-spin toggle
    //     }
    //   }, [isAutoSpinning]);

  // Shuffle the images to simulate randomness
  const shuffle = (arr) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  // Initialize shuffledImages on mount with a shuffled version of images
  useEffect(() => {
    setShuffledImages(shuffle([...images]));
  }, []);

  // Spin method
  const startSpin = () => {
    setIsSpinning(true); // Trigger the spinning animation
    setWinMessage(''); // Reset win message

    // Shuffle images every 100 milliseconds while spinning
    const newIntervalId = setInterval(() => {
      const newShuffledImages = shuffle([...images]);
      setShuffledImages(newShuffledImages);
    }, 200);  // 100ms shuffle interval for continuous spinning

    setIntervalId(newIntervalId);  // Store the interval ID to stop later
  };

  const stopSpin = () => {
    setIsSpinning(false);
    clearInterval(intervalId); // Stop the shuffle interval

    // Check if the user wins
    checkWin(shuffledImages);
  };

      // Check for win condition (3 consecutive matching images in any row)
      const checkWin = (images) => {
      const rows = [
        shuffledImages.slice(0, 3), // First row
        shuffledImages.slice(3, 6), // Second row
        shuffledImages.slice(6, 9), // Third row
      ];

      let isWin = false;

      // Check each row for 3 consecutive matching images
      for (let i = 0; i < rows.length; i++) {
        if (rows[i][0] === rows[i][1] && rows[i][1] === rows[i][2]) {
          isWin = true;
          break;
        }
      }

      // Display the result message
      if (isWin) {
        setWinMessage('Congratulations! You won 30,000 points. Click to claim now!');
      } else {
        setWinMessage('Sorry, you lost. Better luck next time!');
      }
  };

  const spin = async () => {
    setIsSpinning(true); // Trigger button rotation

    // Set the initial transition speed (faster spin)
    let transitionDuration = 1; // 1 second for fast spin
    let currentSpeed = transitionDuration;

    // Initially start the spin at high speed
    init(false, 1, currentSpeed);

    // Gradually reduce the speed as the spin nears its end
    for (let i = 0; i < 10; i++) {  // You can adjust the iterations here
        await new Promise((resolve) => setTimeout(resolve, 100));  // Wait for a short duration

        // Gradually reduce the speed
        currentSpeed = Math.max(0.1, currentSpeed * 0.9);  // Reduces speed by 10% each iteration, minimum 0.1 seconds
        init(false, 1, currentSpeed);  // Apply new speed

        // Slow down more as we get closer to stopping
        if (i > 7) {
            setWinMessage("Spinning slowing down...");
        }
    }

    // Stop the spinning after a few iterations
    await new Promise((resolve) => setTimeout(resolve, 1000));  // Wait until the final stop

    // Final check to stop the spin and display result
    const isWin = checkForWin();
    if (isWin) {
        setWinMessage('Congratulations! You won!');
    } else {
        setWinMessage('Better luck next time!');
    }

    // Stop button rotation
    setIsSpinning(false);
};


  // // Auto-spin effect
  // useEffect(() => {
  //   if (isAutoSpinning) {
  //     const intervalId = setInterval(() => {
  //       spin(); // Trigger spin every 1.5 seconds
  //     }, 1500);

  //     return () => clearInterval(intervalId); // Clean up interval on unmount or auto-spin toggle
  //   }
  // }, [isAutoSpinning]);

  // Toggle Auto Spin
  const toggleAutoSpin = () => {
    setIsAutoSpinning((prev) => !prev);
  };

  const handleButtonClick = () => {
    if (isSpinning) {
      stopSpin(); // If already spinning, stop it
    } else {
      startSpin(); // Otherwise, start the spin
    }
  };

  return (
    <div className='min-h-screen' style={{backgroundImage: "url('/images/SlotMachine.png')", backgroundSize: "100% 100%"}}>


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
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600 font-bold'>
                1,000+
            </div>
        </div>

        <div className='relative'>
            <img src='/images/EmberNB.png' alt='ember' className='w-14 h-14 absolute pmx:w-16 pmx:h-16'/>
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600 font-bold'>
                1,000+
            </div>
        </div>
     </div>

         <div className='slot'>
            <div className='grid grid-rows-4 justify-center items-center'>
              <div className='ms-[83.5px] -mb-[130px] pmx:ms-[100px] pmx:-mb-[220px] spm:-mb-[200px] spm:ms-[90px] p4m:ms-[110px] frame1'>
                  <img src='/images/Frame1.png' />
                  <img src='/images/WIN.png' className='absolute top-[135px] ms-12 pmx:top-[203px] spm:top-[187px] p4m:top-[207px] winni' />
              </div>


              <div className='ms-[115px] w-[150px] h-[50px] pmx:ms-[130px] spm:ms-[120px] p4m:ms-[134px] p4m:w-[160px] spinna'>
                <span>
                  <img src='/images/Pointer1.png' alt='pointer' className='absolute left-[70px] top-[280px] pmx:left-[80px] pmx:top-[386px] spm:top-[362px] spm:left-[75px] p4m:top-[400px]
                  p4m:left-[85px] point1' />
                </span>
                <span>
                  <img src='/images/Pointer2.png' alt='pointer' className='absolute left-[252px] top-[280px] pmx:left-[280px] pmx:top-[386px] spm:top-[362px] spm:left-[263px] p4m:top-[400px]
                  p4m:left-[289px] point2' />
                </span>
              <div className="grid grid-rows-3 grid-cols-3 gap-2 justify-center mt-8 pmx:gap-4 pmx:mt-[72px] spm:mt-[65px] spm:gap-4 p4m:gap-5 spinImg">
              {[...Array(9)].map((_, index) => (
                <SlotImage key={index} isSpinning={isSpinning} images={shuffledImages} />
              ))}
              </div>
              </div>

              <div className='-mb-8 ms-10 pmx:-mb-[75px] pmx:ms-14 spm:-mb-[105px] spm:ms-[47px] p4m:-mb-[85px]
              p4m:ms-[67px] Pbar'>
                  <img src='/images/progressBar.png' />
                  <img src='/images/Bar.png' className='absolute top-[375px] ms-[100px] pmx:top-[500px] spm:top-[482px] p4m:top-[522px] bar' />
              </div>

              <div className='-mt-[37px] pmx:-mt-[37px] spm:-mt-[15px] p4m:-mt-[36px] frame2'>
                  <img src='/images/Frame2.png' />
                  <img src='/images/BET-1X.png' className='absolute top-[430px] ms-[50px] pmx:top-[560px] pmx:ms-[60px] spm:top-[537px] p4m:top-[585px] betti' />
                  {/* Spin/Stop Button */}
                  <div className="flex justify-center mt-6 pmx:mt-12">
                    <button aria-label={isSpinning ? "Stop Spin" : "Start Spin"} onClick={handleButtonClick} className="">
                      {/* Background Button Image */}
                      <img
                        src="/images/Button.png"
                        alt="button background"
                        className="absolute top-[440px] ms-[137px] inset-0 pmx:top-[570px] pmx:ms-[158px] spm:top-[540px] spm:ms-[145px] p4m:top-[590px] p4m:ms-[160px] button"
                      />
                      
                      {/* Conditionally render Spin or Stop image */}
                      <img
                        src={isSpinning ? "/images/stop.png" : "/images/SPIN.png"} // Toggle between Spin and Stop images
                        alt={isSpinning ? "Stop" : "Spin"}
                        className="absolute inset-0 w-24 h-8 mx-auto my-auto object-contain top-[280px] ms-[133px] pmx:top-[310px] pmx:ms-[155px] spm:ms-[142px] spm:top-[300px] p4m:top-[315px] Blabel"
                      />
                    </button>
                  </div>
                  <img src='/images/AUTO-SPIN.png' alt='auto spin' className={` absolute top-[440px] ms-[220px] pmx:top-[570px] pmx:ms-[250px] spm:top-[550px] spm:ms-[230px] p4m:top-[595px] p4m:ms-[260px] Aspin ${isAutoSpinning ? 'active' : ''}`} onClick={toggleAutoSpin} />

                  {/* Win Message */}
                  {/* {winMessage && (
                    <div className="text-center text-white mt-4">{winMessage}</div>
                  )} */}
              </div>
            </div>
         </div>
      

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

export default SlotMachine