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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Spinner,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, InfoIcon } from "@chakra-ui/icons";
import styles from "../ui/tabelatarefas.module.css";
import { useState } from "react";

export default function TabelaTarefas({
  dados,
  erro,
  excluirTarefa,
  finalizarTarefa,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [detalheDaTarefa, setDetalheDaTarefa] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const abrirModalDetalhes = async (id) => {
    setCarregando(true);
    try {
      const resposta = dados.find((d) => d.id === id);
      setDetalheDaTarefa(resposta);
      onOpen();
    } catch (error) {
      console.error("Erro ao buscar os detalhes da tarefa:", error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tablewrapper}>
        {erro && <Text color="red.500">Erro: {erro}</Text>}
        <Table variant="simple" mt={4}>
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
                    aria-label="Ver detalhes"
                    icon={<InfoIcon />}
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => abrirModalDetalhes(item.id)}
                  />
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalhes da Tarefa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {carregando ? (
              <Spinner />
            ) : (
              <div>
                {detalheDaTarefa ? (
                  <>
                    <Text>
                      <strong>Data do Cadastro:</strong>{" "}
                      {new Date(detalheDaTarefa.dataCriacao).toLocaleDateString(
                        "pt-BR",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }
                      )}
                    </Text>
                    <Text>
                      <strong>Nome:</strong> {detalheDaTarefa.nome}
                    </Text>
                    <Text>
                      <strong>Descrição:</strong> {detalheDaTarefa.anotacao}
                    </Text>
                    <Text>
                      <strong>Status:</strong>{" "}
                      {detalheDaTarefa.finalizada ? "Finalizada" : "Pendente"}
                    </Text>
                  </>
                ) : (
                  <Text>Nenhum detalhe encontrado para esta tarefa.</Text>
                )}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
