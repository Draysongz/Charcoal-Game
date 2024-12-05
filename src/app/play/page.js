import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Icon } from '@chakra-ui/react'
import PlayAll from '../components/playAll';
import PlaySea from '../components/playSea';
import PlayForest from '../components/playForest';
import PlayMount from '../components/playMount';
import NavBar from '../components/navBar';
import Header from '../components/header';
import PlayAerial from '../components/playAerial';

const Play = () => {
  return (
    <div className='min-h-screen bg-black'>
     <Header />

     <Tabs variant='unstyled' className='mt-10 pmx:mt-16 w-[350px] pmx:w-[394px] spm:w-[367px] ms-[12px] p4m:w-[405px]'>
         <TabList className='bg-orange-400  bg-opacity-30 flex px-2 items-center justify-between'>
           <Tab _selected={{ color: 'white', bg: '#ea580c', borderRadius: '' }} className=' font-bold uppercase flex flex-col p-2 spm:p-3 pmx:p-3 items-center justify-center text-center w-[100%]' >
             <IoGameControllerOutline aria-hidden="true" className='text-[17px]' /> 
               <span className='text-[13px]'>all</span>
           </Tab>
           <Tab _selected={{ color: 'white', bg: '#ea580c', borderRadius: '' }} className=' font-bold uppercase flex flex-col p-2 spm:p-3 pmx:p-3 items-center justify-center text-center w-[100%]' >
             <LiaDollarSignSolid aria-hidden="true" className='text-[17px]' /> 
               <span className='text-[13px]'>sea</span> 
           </Tab>
           <Tab _selected={{ color: 'white', bg: '#ea580c', borderRadius: '' }} className=' font-bold uppercase flex flex-col p-2 spm:p-3 pmx:p-3 items-center justify-center text-center w-[100%]' >
              <IoGameControllerOutline aria-hidden="true" className='text-[17px] ' /> 
                <span className='text-[13px]'>forest</span>
           </Tab>
           <Tab _selected={{ color: 'white', bg: '#ea580c', borderRadius: '' }} className=' font-bold uppercase flex flex-col p-2 spm:p-3 pmx:p-3 items-center justify-center text-center w-[100%]' >
              <HiMiniUserGroup aria-hidden="true" className='text-[17px] ' /> 
                <span className='text-[13px]'>mountain</span>
           </Tab>
           <Tab _selected={{ color: 'white', bg: '#ea580c', borderRadius: '' }} className=' text-white font-bold uppercase flex flex-col p-2 spm:p-3 pmx:p-3 items-center justify-center text-center w-[100%]' >
              <HiMiniUserGroup aria-hidden="true" className='text-[17px] ' />
                <span className='text-[13px]'>aerial</span>
           </Tab>
         </TabList>
       
         <TabPanels>
           <TabPanel>
           <Link href="/characters"><PlayAll /></Link>
           </TabPanel>
           <TabPanel>
             <PlaySea />
           </TabPanel>
           <TabPanel>
             <PlayForest />
           </TabPanel>
           <TabPanel>
             <PlayMount />
           </TabPanel>
           <TabPanel>
             <PlayAerial /> 
           </TabPanel>
         </TabPanels>
     </Tabs>

     <div className='bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between'>
       <div>
         <Link href="/" className='text-white'> <GoHome className='text-[20px] ms-3'/> home</Link>
       </div>
       <div >
         <Link href="/earn" className='text-white'> <LiaDollarSignSolid className='text-[20px] ms-3' /> earn</Link>
       </div>
       <div className='underline decoration-orange-600 decoration-4 underline-offset-[18px]'>
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

export default Play

