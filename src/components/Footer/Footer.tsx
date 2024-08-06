import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import tyou from "@/assets/images/tyou.png";
import TYOU from "../Typography/TYOU";

export default function Footer() {
  return (
    <Flex height={"15vh"} w={"100vw"} p={"8"} justify={"flex-end"} align={'center'}>
      <Flex h={"100%"} w={"100%"} justify="flex-end" align={'center'}>
        <Flex flexDirection={'column'} align={'flex-end'}>
          <Text>Want to know more?</Text>
          <Text display={'flex'} gap={'1'}>
            Ask <TYOU />
          </Text>
        </Flex>
        <Flex position={"relative"} h={"100%"} w={'5%'} >
          <Image
            src={tyou}
            alt={"T_YOU logo"}
            fill
            style={{
              position: "absolute",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
