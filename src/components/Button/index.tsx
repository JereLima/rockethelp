import React from "react";
import { Button as ButtonNativeBase, Heading, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <ButtonNativeBase
      bg="green.700"
      padding={4}
      borderRadius="sm"
      w="full"
      _pressed={{ bgColor: "green.500" }}
      {...rest}
    >
      <Heading color="white" fontSize="md">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
};

export default Button;
