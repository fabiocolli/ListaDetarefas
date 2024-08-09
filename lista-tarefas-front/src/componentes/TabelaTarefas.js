import {
  Checkbox,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  Th,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
import styles from "../ui/tabelatarefas.module.css";

export default function TabelaTarefas({
  dados,
  erro,
  excluirTarefa,
  finalizarTarefa,
  finalizadas,
  abertas,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.tablewrapper}>
        {erro && <Text color="red.500">Erro: {erro}</Text>}

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
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Tarefa</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {dados.map((item) => (
              <Tr
                key={item.id}
                className={item.finalizada ? styles.tracado : ""}
              >
                <Td>
                  <Checkbox
                    isChecked={item.finalizada}
                    onChange={() => finalizarTarefa(item.id)}
                  />
                </Td>
                <Td>{item.nome}</Td>
                <Td>
                  <IconButton
                    aria-label="Excluir Tarefa"
                    icon={<DeleteIcon />}
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => excluirTarefa(item.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
