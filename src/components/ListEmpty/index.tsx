import { Center, useTheme, VStack, Text, Spinner } from "native-base";
import { ChatTeardropText } from "phosphor-react-native";
import Loading from "../Loading";

interface Props {
  text: string;
  loading: boolean;
}

const ListEmpty = ({ text, loading }: Props) => {
  const { colors } = useTheme();
  return (
    <Center m={10}>
      {loading && <Spinner color="gray.100" size="lg" />}

      {!loading && (
        <>
          <ChatTeardropText size={30} color={colors.gray[100]} />
          <Text color="gray.100" textAlign="center" m={4} fontSize="md">
            {text}
          </Text>
        </>
      )}
    </Center>
  );
};

export default ListEmpty;
