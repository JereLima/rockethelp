import {
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  useTheme,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { Header, Input, Button } from "../../../components";
import { CardDetails } from "../../../components/CardDetails";
import { DetailsProps } from "../../../routes";
import { ComputerTower, Paperclip } from "phosphor-react-native";
import { updateOrder } from "../../../firestore";
import { Alert } from "react-native";

const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
  const { order } = route.params;
  const [description, setDescription] = useState("");

  const handleUpdateStatus = () => {
    updateOrder(order.uid, description)
      .then(() => navigation.goBack())
      .catch(() =>
        Alert.alert("Atenção", "Não conseguimos atualizar no momento ")
      );
  };

  return (
    <VStack safeArea bg="gray.700" flex={1}>
      <Header title="Detalhes da solicitação" />
      <ScrollView>
        <CardDetails
          icon={ComputerTower}
          title={order.patrimony}
          description={order?.description}
          valueDescription={(e) => setDescription(e)}
          item={order}
        />
      </ScrollView>
      {order.status === "open" && (
        <VStack p={4}>
          <Button title="Atualizar" onPress={handleUpdateStatus} />
        </VStack>
      )}
    </VStack>
  );
};

export default Details;
