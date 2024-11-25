"use client"

import React from 'react'
import { PiHandTap } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FcChargeBattery } from "react-icons/fc";

//drawer
import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

export const Booster = () => {
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1  } = useDisclosure()

    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2  } = useDisclosure()

    const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3  } = useDisclosure()

    const { isOpen: isOpen4, onOpen: onOpen4, onClose: onClose4  } = useDisclosure()

    const { isOpen: isOpen5, onOpen: onOpen5, onClose: onClose5  } = useDisclosure()
    // const btnRef = React.useRef()

  return (
    <>

    <div className='mt-10 uppercase font-semibold spm:ms-2 spm:mt-14'>
        <h3 className='text-center font-bold text-[20px]'>free dialy boost</h3>
        <div className='p-4 w-[375px] pmx:w-[411px] text-[13px] flex gap-8 pmx:p-8'>
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-3 flex w-40' onClick={onOpen1}>
            <div className='me-1 text-[25px]'>
              <img src='/images/CharcoalNB.png' alt='charcoal' className=' w-11 h-10 ' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>charcoal</span><br />
              <span className='text-[13px]'>50/3</span>
            </div>
          </div>
  
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-3 flex w-40' onClick={onOpen2}>
            <div className='me-1 text-[25px]'>
              <img src='/images/NewLightningNB.png' alt='lightning' className=' w-11 h-10 ' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>energy</span><br />
              <span className='text-[13px]'>3/3</span>
            </div>
          </div> 
        </div>

        <div className='w-[375px] pmx:w-[411px] p-4 pmx:p-8'>
          <h3 className='text-center text-[20px] font-bold'>boosters</h3>
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3' onClick={onOpen3}>
            <div className='me-4 text-[30px]'>
              <PiHandTap className='p-[3px] w-8 h-8 mt-2 text-[50px]' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>multi tap</span>
              <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
              <span className='absolute left-[110px] pmx:left-[125px] top-[309px] text-[13px] pmx:top-[373px]
              spm:top-[325px] p4m:top-[389px]'>20k</span>
            </div>
              <div className='ms-[120px] mt-2 text-[14px] pmx:mt-2'>
                 <span className='ms-[px] mt- text-[px] text-orange-600'>level 1</span>
                 <MdKeyboardArrowRight className='-mt-[22px] ms-14 text-[25px]' />
              </div>
          </div>
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3' onClick={onOpen4}>
            <div className='me-4 text-[30px]'>
              <BsFillLightningChargeFill className=' text-indigo-400 p-[3px] w-8 h-8 mt-2' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>energy limit</span>
              <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
              <span className='absolute left-[110px] pmx:left-[125px] top-[381px] text-[13px] pmx:top-[445px]
              spm:top-[398px] p4m:top-[461px]'>20k</span>
            </div>
              <div className='ms-[100px] mt-2 text-[14px] pmx:mt-2'>
                 <span className='ms-[px] mt- text-[px] text-orange-600'>level 1</span>
                 <MdKeyboardArrowRight className='-mt-[22px] ms-14 text-[25px]' />
              </div>
          </div>
          <div className='bg-gray-800 rounded-full border-2 border-orange-600 p-2 flex mt-3' onClick={onOpen5}>
            <div className='me-4 text-[30px]'>
              <FcChargeBattery className='p-[3px] w-8 h-8 mt-2' />
            </div>
            <div>
              <span className='text-orange-600 text-[14px]'>recharge</span>
              <img src='/images/CoinCNB.png' className=' w-5 h-4 ' />
              <span className='absolute left-[110px] pmx:left-[125px] top-[452px] text-[13px] pmx:top-[517px]
              spm:top-[469px] p4m:top-[532px]'>20k</span>
            </div>
              <div className='ms-[120px] mt-2 text-[14px] pmx:mt-2'>
                 <span className='
                 text-orange-600'>level 1</span>
                 <MdKeyboardArrowRight className='-mt-[22px] ms-14 text-[25px]' />
              </div>
          </div>
        </div>
    </div>

    <Drawer 
    isOpen={isOpen1}
    placement="bottom"
    onClose={onClose1}
    size="sm">
        <DrawerOverlay className='backdrop-blur-md' />
        <DrawerContent className='bg-black rounded-t-3xl p-4 h-[65vh] border-t-white border-t-4' >
        <DrawerCloseButton className='text-white text-[10px] rounded-full w-8 h-8 border-[2px] ms-72 pmx:ms-80 mt-3 font-bold'/>
           <div>
             <div className='text-center text-white p-4'>
                <img src='/images/CharcoalNB.png' alt='charcoal' className='ms-[110px] pmx:ms-[90px] mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:ms-[90px] spm:h-44 p4m:ms-[109px]' />
                <h3 className='text-orange-600 text-[20px] pmx:text-[30px] spm:text-[30px] uppercase font-bold'>charcoal</h3>
                <p className='text-[12px] pmx:text-[20px] spm:text-[20px]'>Charge up your creature</p>
                <p className='text-[12px] mt-1 mb-2 pmx:text-[20px] spm:text-[20px] spm:mb-3'>+1 coin tap per level</p>
                <span className='text-[11px]'>
                    <div className='border-2 border-orange-600 rounded-full w-40 ms-20 pmx:ms-[100px] relative py-2 mb-5'>
                      <img src='/images/CoinCNB.png' alt='coin' className='w-7 h-6 top-1 ms-9 absolute' />
                      <span className='leading-3 text-[11px] ms-3'>4,000</span>
                    </div>
                </span>
                <div className='bg-orange-600 border-2 border-white px-32 py-1 rounded-full uppercase text-[13px]'>
                    <div className='-mt-1 leading-7'>get</div>
                </div>
             </div>
           </div>
        </DrawerContent>

    </Drawer>
    <Drawer 
    isOpen={isOpen2}
    placement="bottom"
    onClose={onClose2}
    size="sm">
        <DrawerOverlay className='backdrop-blur-md' />
        <DrawerContent className='bg-black rounded-t-3xl p-4 h-[65vh] border-t-white border-t-4' >
        <DrawerCloseButton className='text-white text-[10px] rounded-full w-8 h-8 border-[2px] ms-72 pmx:ms-80 mt-3 font-bold'/>
           <div>
             <div className='text-center text-white p-4'>
                <img src='/images/NewLightningNB.png' alt='lightning' className='ms-[110px] pmx:ms-[90px] mt-2 pmx:w-[170px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:ms-[85px] spm:h-44 p4m:ms-[105px]' />
                <h3 className='text-orange-600 text-[20px] uppercase font-bold pmx:text-[30px] spm:text-[30px]'>energy</h3>
                <p className='text-[12px] pmx:text-[20px] spm:text-[20px]'>
                    increase your energy limit, so you<br />
                        can combat the enemy more
                </p>
                <p className='text-[12px] mt-1 mb-2 pmx:text-[20px] spm:text-[20px]'>+500 energy per level</p>
                <span className='text-[11px]'>
                    <div className='border-2 border-orange-600 rounded-full w-40 ms-20 relative py-2 mb-5 pmx:ms-[100px]'>
                    <img src='/images/CoinCNB.png' alt='coin' className='w-7 h-6 top-1 ms-9 absolute' />
                    <span className='leading-3 text-[11px] ms-3'>4,000</span>
                    </div>
                </span>
                <div className='bg-orange-600 border-2 border-white px-32 py-1 rounded-full uppercase text-[13px]'>
                    <div className='-mt-1 leading-7'>get</div>
                </div>
             </div>
           </div>
        </DrawerContent>
    </Drawer>

    <Drawer 
    isOpen={isOpen3}
    placement="bottom"
    onClose={onClose3}
    size="sm">
        <DrawerOverlay className='backdrop-blur-md' />
        <DrawerContent className='bg-black rounded-t-3xl p-4 h-[65vh] border-t-white border-t-4' >
        <DrawerCloseButton className='text-white text-[10px] rounded-full w-8 h-8 border-[2px] ms-72 pmx:ms-80 mt-3 font-bold'/>
           <div>
             <div className='text-center text-white p-4'>
                <PiHandTap className='text-[100px] ms-[110px] pmx:ms-[110px] mt-2 pmx:w-[130px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:ms-[85px] spm:h-44 p4m:ms-[115px]' />
                <h3 className='text-orange-600 text-[20px] uppercase font-bold pmx:text-[30px] spm:text-[30px]'>multi tap</h3>
                <p className='text-[12px] pmx:text-[20px] spm:text-[20px]'>
                    increase the amount of coins<br />
                       earned by tap
                </p>
                <p className='text-[12px] mt-1 mb-2 pmx:text-[20px] spm:text-[20px]'>+1 coin tap per level</p>
                <span className='text-[11px]'>
                    <div className='border-2 border-orange-600 rounded-full w-40 ms-20 relative py-2 mb-5 pmx:ms-[100px]'>
                    <img src='/images/CoinCNB.png' alt='coin' className='w-7 h-6 top-1 ms-9 absolute' />
                    <span className='leading-3 text-[11px] ms-3'>4,000</span>
                    </div>
                </span>
                <div className='bg-orange-600 border-2 border-white px-32 py-1 rounded-full uppercase text-[13px]'>
                    <div className='-mt-1 leading-7'>get</div>
                </div>
             </div>
           </div>
        </DrawerContent>
    </Drawer>

    <Drawer 
    isOpen={isOpen4}
    placement="bottom"
    onClose={onClose4}
    size="sm">
        <DrawerOverlay className='backdrop-blur-md' />
        <DrawerContent className='bg-black rounded-t-3xl p-4 h-[65vh] border-t-white border-t-4' >
        <DrawerCloseButton className='text-white text-[10px] rounded-full w-8 h-8 border-[2px] ms-72 pmx:ms-80 mt-3 font-bold'/>
           <div>
             <div className='text-center text-white p-4'>
                <BsFillLightningChargeFill className='text-indigo-400 text-[100px] ms-[110px] pmx:ms-[110px] mt-2 pmx:w-[140px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:ms-[85px] spm:h-44 p4m:ms-[115px]' />
                <h3 className='text-orange-600 text-[20px] uppercase font-bold pmx:text-[30px] spm:text-[30px]'>energy limit</h3>
                <p className='text-[12px] pmx:text-[20px] spm:text-[20px]'>
                    increase your energy limit, so you<br />
                        can combat the enemy more
                </p>
                <p className='text-[12px] mt-1 mb-2 pmx:text-[20px] spm:text-[20px]'>+500 energy per level</p>
                <span className='text-[11px]'>
                    <div className='border-2 border-orange-600 rounded-full w-40 ms-20 relative py-2 mb-5 pmx:ms-[100px]'>
                    <img src='/images/CoinCNB.png' alt='coin' className='w-7 h-6 top-1 ms-9 absolute' />
                    <span className='leading-3 text-[11px] ms-3'>4,000</span>
                    </div>
                </span>
                <div className='bg-orange-600 border-2 border-white px-32 py-1 rounded-full uppercase text-[13px]'>
                    <div className='-mt-1 leading-7'>get</div>
                </div>
             </div>
           </div>
        </DrawerContent>
    </Drawer>

    <Drawer 
    isOpen={isOpen5}
    placement="bottom"
    onClose={onClose5}
    size="sm">
        <DrawerOverlay className='backdrop-blur-md' />
        <DrawerContent className='bg-black rounded-t-3xl p-4 h-[65vh] border-t-white border-t-4' >
        <DrawerCloseButton className='text-white text-[10px] rounded-full w-8 h-8 border-[2px] ms-72 pmx:ms-80 mt-3 font-bold'/>
           <div>
             <div className='text-center text-white p-4'>
                <FcChargeBattery className='text-[100px] ms-[110px] pmx:ms-[110px] mt-2 pmx:w-[140px] pmx:mt-4 pmx:h-44 spm:w-[160px] spm:ms-[85px] spm:h-44 p4m:ms-[115px]' />
                <h3 className='text-orange-600 text-[20px] uppercase font-bold pmx:text-[30px] spm:text-[30px]'>recharge</h3>
                <p className='text-[12px] pmx:text-[20px] spm:text-[20px]'>Charge up your creature</p>
                <p className='text-[12px] mt-1 mb-2 pmx:text-[20px] spm:text-[20px]'>+1 coin tap per level</p>
                <span className='text-[11px]'>
                    <div className='border-2 border-orange-600 rounded-full w-40 ms-20 relative py-2 mb-5 pmx:ms-[100px]'>
                    <img src='/images/CoinCNB.png' alt='coin' className='w-7 h-6 top-1 ms-9 absolute' />
                    <span className='leading-3 text-[11px] ms-3'>4,000</span>
                    </div>
                </span>
                <div className='bg-orange-600 border-2 border-white px-32 py-1 rounded-full uppercase text-[13px]'>
                    <div className='-mt-1 leading-7'>get</div>
                </div>
             </div>
           </div>
        </DrawerContent>
    </Drawer>
    </>

  )
}



