import { Center, useTheme, VStack, Text } from "native-base";
import { ChatTeardropText } from "phosphor-react-native";

interface Props {
  text: string;
}

const ListEmpty = ({ text }: Props) => {
  const { colors } = useTheme();
  return (
    <Center m={10}>
      <ChatTeardropText size={30} color={colors.gray[100]} />
      <Text color="gray.100" textAlign="center" m={4} fontSize="md">
        {text}
      </Text>
    </Center>
  );
};

export default ListEmpty;
