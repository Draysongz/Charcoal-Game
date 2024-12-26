"use client";
import React from "react";
import Link from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
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
            className="bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600"
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
            className="bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600"
          >
            1,000+
          </div>
        </div>
      </div>
  );
};

export default Header;
