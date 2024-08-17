import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import FormNovaTarefa from "./FormNovaTarefa";
import { incluirTarefa } from "../api/_api";

export default function BotaoIncluirNovaTarefa() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const manipulaIncluirTarefa = async (tarefa) => {
    try {
      await incluirTarefa({ ...tarefa });
      onClose();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Box>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="blue"
        borderRadius="full"
        size="lg"
        onClick={onOpen}
      >
        Tarefa
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nova Tarefa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormNovaTarefa
              onSubmit={manipulaIncluirTarefa}
              onClose={onClose}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
