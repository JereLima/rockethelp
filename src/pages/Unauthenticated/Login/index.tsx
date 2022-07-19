import { Box, Heading, Icon, useTheme, VStack } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import React, { useState } from "react";
import { Logo } from "../../../assets";
import { Button, Input, Loading } from "../../../components";

const Login: React.FC = () => {
  const { colors } = useTheme();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Box safeArea flex={1} backgroundColor="primary.600">
      <Loading isOpen={loading} />
      <VStack alignItems="center" flex={1} bg="gray.600" px={8} pt={20}>
        <Logo />
        <Heading color="gray.100" fontSize="xl" mb={4}>
          Acesse sua conta
        </Heading>
        <Input
          onChangeText={(user) => setUser(user)}
          value={user}
          mb={4}
          placeholder="User"
          placeholderTextColor="gray.100"
          leftElement={
            <Icon ml={5} as={<Envelope color={colors.gray[300]} />} />
          }
        />
        <Input
          onChangeText={(password) => setPassword(password)}
          value={password}
          mb={4}
          placeholder="Senha"
          placeholderTextColor="gray.100"
          leftElement={
            <Icon ml={5} as={<Key color={colors.gray[300]} size={20} />} />
          }
          secureTextEntry={true}
        />
        <Button title="Entrar"/>
      </VStack>
    </Box>
  );
};

export default Login;
