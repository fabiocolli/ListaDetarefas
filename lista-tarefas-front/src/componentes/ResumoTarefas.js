import { CheckCircleIcon } from "@chakra-ui/icons";
import { HStack, Text, VStack } from "@chakra-ui/react";

export default function ResumoTarefas({ abertas, finalizadas }) {
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
