import React, { useState } from "react";
import {
  HStack,
  VStack,
  IconButton,
  useTheme,
  Text,
  Heading,
  FlatList,
} from "native-base";
import { Logo_Secondary } from "../../../assets";
import { SignOut } from "phosphor-react-native";
import { Button, Filter, ListEmpty, Order } from "../../../components";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeProps } from "../../../routes";

interface OrdersType {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
}
const Home = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );

  const orders: OrdersType[] = [
    {
      id: "123",
      patrimony: "445118",
      when: "18/07/2022 às 10:00",
      status: "open",
    },
    {
      id: "1234",
      patrimony: "445118",
      when: "18/07/2022 às 10:00",
      status: "open",
    },
    {
      id: "1235",
      patrimony: "445118",
      when: "18/07/2022 às 10:00",
      status: "closed",
    },
    {
      id: "12350",
      patrimony: "445118",
      when: "18/07/2022 às 10:00",
      status: "closed",
    },
  ];

  const handleNewOrder = () => {
    navigation.navigate("Register");
  };

  const handleNavigationOderDetails = (orderId: string) => {
    navigation.navigate("Details", { orderId: orderId });
  };

  return (
    <VStack flex={1} safeArea bgColor="gray.600">
      <HStack
        justifyContent="space-between"
        bg="gray.600"
        p={4}
        alignItems="center"
      >
        <Logo_Secondary />
        <IconButton icon={<SignOut color={colors.gray[100]} size={25} />} />
      </HStack>

      <HStack p={4} alignItems="center" justifyContent="space-between">
        <Heading color="gray.100">Solicitações</Heading>
        <Text color="gray.100">05</Text>
      </HStack>

      <VStack flex={1} bg="gray.700">
        <HStack justifyContent="space-between" space={4} p={4}>
          <Filter
            title="Em andamento"
            type={"open"}
            onPress={() => setStatusSelected("open")}
            isActive={statusSelected === "open"}
          />
          <Filter
            title="Fechado"
            type={"closed"}
            onPress={() => setStatusSelected("closed")}
            isActive={statusSelected === "closed"}
          />
        </HStack>
        <FlatList
          px={4}
          data={orders.filter(order => order.status === statusSelected)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Order
              data={item}
              onPress={() => handleNavigationOderDetails(item.id)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={
            <ListEmpty
              text={
                statusSelected === "open"
                  ? "Você não possui solicitações\nEm Andamento"
                  : "Voce não possui solicitações\nFechadas"
              }
            />
          }
        />
        <Button title="Nova Solicitação" rounded={0} onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
};

export default Home;
