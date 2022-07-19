import { IconButton, useTheme, VStack } from "native-base";
import { Input as NativeBaseInput, IInputProps } from "native-base";

const Input = ({ ...rest }: IInputProps) => {
  const { colors } = useTheme();
  return (
    <NativeBaseInput
      padding={4}
      bg={colors.gray[700]}
      placeholderTextColor={colors.gray[700]}
      borderWidth={0}
      borderRadius="sm"
      size="md"
      justifyContent="center"
      fontSize="md"
      fontFamily="body"
      color="gray.100"
      _focus={{
        borderWidth: 1,
        borderColor: colors.green[500],
        bg: colors.gray[700],
      }}
      {...rest}
    />
  );
};

export default Input;
