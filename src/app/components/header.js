"use client";
import React from "react";
import Link from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
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
          bg={"#f15b0626"}
          borderRightRadius={"100px"}
          py={1}
          px={3}
          ml={-3}
          zIndex={0}
          mt={1}
          fontSize={"10px"}
          textAlign={"left"}
          color={"#F15B06"}
        >
          1,000+
        </Text>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Image
          src="/images/EmberNB.png"
          w={{ base: "40px", sm: "40px" }}
          zIndex={1}
          p={0}
        />
        <Text
          bg={"#f15b0626"}
          borderRightRadius={"100px"}
          py={1}
          px={3}
          ml={-3}
          zIndex={0}
          mt={1}
          fontSize={"10px"}
          textAlign={"left"}
          color={"#F15B06"}
        >
          1,000+
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
