import React from "react";
import {
  HStack,
  Text,
  Box,
  useTheme,
  VStack,
  Circle,
  Pressable,
  IPressableProps,
  Button,
} from "native-base";
import { Clock, CircleWavyCheck, Hourglass } from "phosphor-react-native";

interface OrderProps {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
}

export interface Props extends IPressableProps {
  data: OrderProps;
}

const Order = ({ data, ...rest }: Props) => {
  const { colors } = useTheme();
  const statusColor =
    data.status === "open" ? colors.secondary[700] : colors.green[300];
  return (
    <Pressable {...rest} my={1}>
      <HStack
        bg="gray.600"
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
        mt={2}
      >
        <Box h="full" w={3} bg={statusColor} />
        <VStack flex={1} space="2" p={4}>
          <Text color="gray.100" fontSize="md">
            N° do Patrimônio {data.patrimony}
          </Text>
          <HStack space={2} alignItems="center">
            <Clock color={colors.gray[100]} size={25} />
            <Text color="gray.100" fontSize="sm">
              {data.when}
            </Text>
          </HStack>
        </VStack>
        <Circle bg="gray.500" h={12} w={12} mr={4}>
          {data.status === "closed" ? (
            <CircleWavyCheck color={statusColor} size={24} />
          ) : (
            <Hourglass color={statusColor} size={24} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
};

export default Order;
        