import { Button } from "@chakra-ui/react";
import React from "react";

type ButtonProps = {
  title: string;
  primary?: boolean;
};

export default function CustomButton({ title, primary = true }: ButtonProps) {
  return (
    <Button
      backgroundColor={`${primary ? "primary" : "dark"}`}
      color={`${primary ? "light" : "light"}`}
      _hover={{
        backgroundColor: `${primary ? "secondary" : "black"}`,
        color: `${primary ? "black" : "light"}`,
      }}
      transition={"all 0.4s ease-in-out"}
      shadow='md'
    >
      {title}
    </Button>
  );
}
