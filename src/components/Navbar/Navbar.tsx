import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import CustomButton from "../Buttons/Button";

export default function Navbar() {
  return (
    <Flex height={"15vh"} w={"100vw"} p={'8'} justify={'space-between'}>
      <Flex position={"relative"} h={'100%'} w={'100%'} maxWidth={'500px'}>
        <Image
          src={logo}
          alt={"Manga Tracker logo"}
          fill
          style={{
            position: "absolute",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Flex>
      <Flex>
          <CustomButton title={"Nova mídia"}/>
      </Flex>
    </Flex>
  );
}
