import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Daily from '../components/daily';
import NavBar from '../components/navBar';
import Header from '../components/header';

const Earn = () => {
  return (
    <div className="min-h-screen bg-black">

      <Header />

      <Tabs variant="unstyled" className="mt-10">
        <TabList className="bg-orange-400  bg-opacity-40">
          <Tab
            _selected={{ color: "white", bg: "#ea580c", opacity: 1 }}
            opacity={0.25}
            className="w-[32%] font-bold uppercase ms-2 p-2"
          >
            <span className="text-white">
              {" "}
              <LiaDollarSignSolid
                aria-hidden="true"
                className="text-[20px] ms-2 "
              />
              <span className="text-[14px]">daily</span>
            </span>
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#ea580c", opacity: 1 }}
            opacity={0.25}
            className="w-[32%] font-bold uppercase p-2"
          >
            <span className="text-white">
              {" "}
              <IoGameControllerOutline
                aria-hidden="true"
                className="text-[20px] ms-4"
              />
              <span className="text-[14px]">special</span>
            </span>
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#ea580c", opacity: 1 }}
            opacity={0.25}
            className="w-[32%] text-white font-bold uppercase p-2"
          >
            <span className="text-white">
              {" "}
              <HiMiniUserGroup
                aria-hidden="true"
                className="text-[20px] ms-3"
              />
              <span className="text-[14px]">game</span>
            </span>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Daily />
          </TabPanel>
          <TabPanel>
            <p>empty!</p>
          </TabPanel>
          <TabPanel>
            <p>empty!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div className="bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between">
        <div>
          <Link href="/" className="text-white">
            {" "}
            <GoHome className="text-[20px] ms-3" /> home
          </Link>
        </div>
        <div className="underline decoration-orange-600 decoration-4 underline-offset-[18px]">
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
    </div>
  );
}

export default Earn

