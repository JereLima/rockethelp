import { Heading, HStack, Icon, Text, useTheme, VStack } from "native-base";
import {
  ComputerTower,
  IconProps,
  ListChecks,
  Laptop,
  ClipboardText,
} from "phosphor-react-native";
import { ReactNode } from "react";
import { OrderDTO } from "../../dtos/Orders";
import Input from "../Input";

interface Props {
  title?: string;
  description?: string;
  icon: React.ElementType<IconProps>;
  children?: ReactNode;
  valueDescription?: (description: string) => void;
  item: OrderDTO;
}

export function CardDetails({
  title,
  description,
  valueDescription,
  children,
  item,
}: Props) {
  const { colors } = useTheme();
  console.log(item);
  return (
    <VStack m={4} space={4}>
      <VStack bg="gray.600" p={4} rounded={4}>
        <HStack alignItems="center" space={4}>
          <Laptop color={colors.purple[600]} />
          <Text fontSize="md" color="gray.300" flex={1}>
            Equipamento
          </Text>
        </HStack>

        <VStack p={2}>
          <Text color="gray.100" fontSize="md">
            Patrimonio {title}
          </Text>
        </VStack>
      </VStack>

      <VStack bg="gray.600" p={4} rounded={4}>
        <HStack alignItems="center" space={4}>
          <ClipboardText color={colors.purple[600]} />
          <Text fontSize="md" color="gray.300" flex={1}>
            Descrição do problema
          </Text>
        </HStack>

        <VStack p={2}>
          <Text color="gray.100" fontSize="md">
            {description}
          </Text>
        </VStack>
      </VStack>

      <VStack bg="gray.600" p={4} rounded={4} space={4}>
        <HStack alignItems="center" space={4}>
          <ListChecks color={colors.purple[600]} />
          <Text fontSize="md" color="gray.300" flex={1}>
            Solução
          </Text>
        </HStack>
        {item.status === "open" && (
          <Input
            placeholder="Escreva como foi resolvido"
            multiline
            onChangeText={valueDescription}
          />
        )}
        {
          <Text color="gray.100" fontSize="md">
            {item.solution}
          </Text>
        }
      </VStack>
    </VStack>
  );
}
