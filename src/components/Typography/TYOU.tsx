import { Highlight, Text } from "@chakra-ui/react";
import React from "react";

export default function TYOU() {
  return (
    <Text color="tyouDark" fontWeight={"bold"}>
      <Highlight query="_" styles={{ color: "tyouPrimary" }}>
        T_YOU
      </Highlight>
    </Text>
  );
}
