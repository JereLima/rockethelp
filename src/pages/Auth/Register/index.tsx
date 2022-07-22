import { Text, useTheme, VStack } from "native-base";
import React, { useState } from "react";
import { Button, Header, Input } from "../../../components";
import { createOrder } from "../../../firestore";
import { RegisterProps } from "../../../routes";

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");
  const date = new Date().toISOString();
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreateOrder = () => {
    if (!patrimony || !description) return setWarning(true);
    setLoading(true);
    createOrder(patrimony, date, description).then(() => navigation.navigate('Home'));
  };

  return (
    <VStack safeArea bg="gray.600" flex={1}>
      <VStack w="full" h="full" justifyContent="space-between" p={4}>
        <VStack bg="gray.600" space={4}>
          <Header title="Nova Solicitação" />
          <Input
            placeholder="n° do Patrimonio"
            placeholderTextColor="gray.100"
            onChangeText={setPatrimony}
            keyboardType="numeric"
          />
          <Input
            placeholder="Descrição do problema"
            placeholderTextColor="gray.100"
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
            height={250}
          />
          {warning && (
            <Text color="red.300" textAlign="center">
              Preencha todos os campos
            </Text>
          )}
        </VStack>
        <Button
          title="Salvar"
          onPress={handleCreateOrder}
          isLoading={loading}
        />
      </VStack>
    </VStack>
  );
};

export default Register;
