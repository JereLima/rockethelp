import React from "react";
import { Box, Spinner, Modal, IModalProps } from "native-base";

const Loading = ({ ...rest }: IModalProps) => {
  return (
    <Modal bg="gray.700" opacity={0.5} flex={1} {...rest}>
      <Spinner color="white" size="lg" />
    </Modal>
  );
};

export default Loading;
