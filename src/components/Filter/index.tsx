import { Button, IButtonProps, Text, useTheme, VStack } from "native-base";

interface Props extends IButtonProps {
  title: string;
  isActive: boolean;
  type: "open" | "closed";
}

const Filter = ({ isActive, type, title, ...rest }: Props) => {
  const { colors } = useTheme();

  const colorType = type === "open" ? colors.secondary[700] : colors.green[300];
  return (
    <Button
      background="gray.600"
      variant="outlined"
      borderColor={colorType}
      borderWidth={isActive ? 1 : 0}
      flex={1}
      {...rest}
    >
      <Text
        textTransform="uppercase"
        fontSize="md"
        color={isActive ? colorType : "gray.100"}
      >
        {title}
      </Text>
    </Button>
  );
};

export default Filter;
