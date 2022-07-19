import { useTheme, VStack } from "native-base";
import React from "react";
import { Header, Input, Button } from "../../../components";
import { DetailsProps } from "../../../routes";

const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
  const { orderId } = route.params;
  
  alert(orderId)
  
  return (
    <VStack safeArea bg="gray.600" flex={1}>
      <Header title="Detalhes da solicitação" />
    </VStack>
  );
};

export default Details;
