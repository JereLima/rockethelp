import { useNavigation } from "@react-navigation/native";
import {
  Heading,
  IconButton,
  HStack,
  useTheme,
  StyledProps,
  Box,
} from "native-base";
import { CaretLeft } from "phosphor-react-native";

interface Props extends StyledProps {
  title: string;
}

const Header = ({ title }: Props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <HStack
      bgColor="gray.600"
      alignItems="center"
      justifyContent="space-between"
    >
      <IconButton
        h={8}
        w={8}
        icon={<CaretLeft size={24} color={colors.gray[200]} />}
        onPress={() => navigation.goBack()}
      />
      <Heading textAlign="center" flex={1} color={colors.gray[100]}>
        {title}
      </Heading>
      <Box h={8} w={8} />
    </HStack>
  );
};

export default Header;
