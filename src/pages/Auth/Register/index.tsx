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
    createOrder(patrimony, date, description).then(() =>
      navigation.navigate("Home")
    );
  };

  return (
    <VStack safeArea bg="gray.700" flex={1}>
      <Header title="Nova Solicitação" />
      <VStack space={4} p={4} justifyContent="space-between" flex={1}>
        <VStack space={4}>
          <Input
            placeholder="N° do Patrimonio"
            placeholderTextColor="gray.100"
            onChangeText={setPatrimony}
            keyboardType="numeric"
            bg="gray.600"
            onFocus={() => setWarning(false)}
          />
          <Input
            placeholder="Descrição do problema"
            placeholderTextColor="gray.100"
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
            height={250}
            bg="gray.600"
            onFocus={() => setWarning(false)}
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
