import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Heading, Icon, useTheme, VStack } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import { Logo } from "../../../assets";
import { Button, Input, Loading } from "../../../components";
import { UserDTO } from "../../../dtos/User";
import { auth } from "../../../firestore";
import { userStore } from "../../../store";

const Login: React.FC = () => {
  const { colors } = useTheme();
  const [email, setEmail] = useState("jeremiaslimag12@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const { setUser, user } = userStore((state) => state);

  const logInWithEmailAndPassword = async () => {
    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.info(user)
      setUser({
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        uid: user.uid,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <Box safeArea flex={1} backgroundColor="primary.600">
      <Loading isOpen={loading} />
      <VStack alignItems="center" flex={1} bg="gray.600" px={8} pt={20}>
        <Logo />
        <Heading color="gray.100" fontSize="xl" mb={4}>
          Acesse sua conta {user.email}
        </Heading>
        <Input
          onChangeText={(email) => setEmail(email)}
          value={email}
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
        <Button title="Entrar" onPress={logInWithEmailAndPassword} />
      </VStack>
    </Box>
  );
};

export default Login;
