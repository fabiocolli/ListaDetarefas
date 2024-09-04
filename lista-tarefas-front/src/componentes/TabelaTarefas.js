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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import styles from "../ui/tabelatarefas.module.css";

export default function TabelaTarefas({
  dados,
  erro,
  excluirTarefa,
  finalizarTarefa,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.tablewrapper}>
        {erro && <Text color="red.500">Erro: {erro}</Text>}
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
