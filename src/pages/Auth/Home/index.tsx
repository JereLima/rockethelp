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
import { color } from "native-base/lib/typescript/theme/styled-system";
import { Button, Filter, Order } from "../../../components";
import { Alert } from "react-native";

interface OrdersType {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
}
const Home: React.FC = () => {
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

      <VStack flex={1} bg="gray.700" padding={2}>
        <HStack justifyContent="space-between" space={2}>
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
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Order data={item} onPress={() => Alert.alert("Hjhsjhsjh")} />
          )}
        />
      </VStack>
    </VStack>
  );
};

export default Home;
