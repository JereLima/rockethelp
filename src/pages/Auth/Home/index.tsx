import React, { useState } from "react";
import {
  HStack,
  VStack,
  IconButton,
  useTheme,
  Text,
  Heading,
  FlatList,
  Spinner,
} from "native-base";
import { Logo_Secondary } from "../../../assets";
import { SignOut } from "phosphor-react-native";
import { Button, Filter, ListEmpty, Order } from "../../../components";
import { Alert } from "react-native";
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { HomeProps } from "../../../routes";
import { ordersStore, userStore } from "../../../store";
import { createOrder, getOrders } from "../../../firestore";
import { OrderDTO } from "../../../dtos/Orders";
import { useEffect } from "react";
import { useCallback } from "react";

interface OrdersType {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
}
const Home = ({ navigation }: HomeProps) => {
  const { colors } = useTheme();
  const isFocused = useIsFocused();

  const { user, setUser, cleanUser } = userStore((state) => state);
  const { orders, setOrders, cleanOrders } = ordersStore((state) => state);
  const [loading, setLoading] = useState(true);

  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );

  const handleNewOrder = () => {
    navigation.navigate("Register");
  };

  const handleNavigationOderDetails = (order: OrderDTO) => {
    navigation.navigate("Details", { order: order });
  };

  const handleLogout = () => {
    cleanUser();
  };

  const handleGetOrder = () => {
    setLoading(true);
    getOrders(statusSelected)
      .then((response) => setOrders(response as OrderDTO[]))
      .catch()
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    console.log(isFocused);
    if (!isFocused) return;
    setLoading(true);
    handleGetOrder();
  }, [statusSelected, isFocused]);

  return (
    <VStack flex={1} safeArea bgColor="gray.600">
      <HStack
        justifyContent="space-between"
        bg="gray.600"
        p={4}
        alignItems="center"
      >
        <Logo_Secondary />
        <IconButton
          icon={<SignOut color={colors.gray[100]} size={25} />}
          onPress={handleLogout}
        />
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
          data={orders.filter((order) => order.status === statusSelected)}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => (
            <Order
              data={item}
              onPress={() => handleNavigationOderDetails(item)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={
            <ListEmpty
              loading={loading}
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
