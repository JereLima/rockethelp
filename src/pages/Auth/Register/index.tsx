import { useTheme, VStack } from "native-base";
import React from "react";
import { Header, Input, Button } from "../../../components";

const Register: React.FC = () => {
  const { colors } = useTheme();

  return (
    <VStack safeArea bg="gray.600" flex={1}>
      <VStack w="full" h="full" justifyContent="space-between" p={4}>
        <VStack bg="gray.600" space={4}>
          <Header title="Nova Solicitação" />
          <Input
            placeholder="n° do Patrimonio"
            placeholderTextColor="gray.100"
          />
          <Input
            placeholder="Descrição do problema"
            placeholderTextColor="gray.100"
            multiline
            textAlignVertical="top"
            height={250}
          />
        </VStack>
        <Button title="Salvar" />
      </VStack>
    </VStack>
  );
};

export default Register;
