import { CheckCircleIcon } from "@chakra-ui/icons";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function ResumoTarefas() {
  const { resumoReducer } = useSelector((rootReducer) => rootReducer.resumoReducer);

  const abertas = 0;//tarefas.filter((t) => !t.finalizada).length;
  const finalizadas = 0;//tarefas.filter((t) => t.finalizada).length;

  console.log({ resumoReducer });

  return (
    <>
      <VStack align="start" spacing={4} mb={4} mt={0}>
        <HStack spacing={2}>
          <CheckCircleIcon color="yellow.500" />
          <Text fontSize="lg" fontWeight="bold">
            {" "}
            Tarefas Abertas: {abertas}
          </Text>
        </HStack>
        <HStack spacing={2}>
          <CheckCircleIcon color="blue.500" />
          <Text fontSize="lg" fontWeight="bold">
            {" "}
            Tarefas Finalizadas: {finalizadas}
          </Text>
        </HStack>
      </VStack>
    </>
  );
}
