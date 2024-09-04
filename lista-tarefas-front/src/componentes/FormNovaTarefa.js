import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function FormNovaTarefa({ onSubmit, onClose }) {
  const [nome, setNome] = useState("");
  const [dataFinalizacao, setDataFinalizacao] = useState("");
  const [anotacao, setAnotacao] = useState("");
  const [tamanhoAnotacao, setTamanhoAnotacao] = useState(0);

  const manipuladorSubmit = (event) => {
    event.preventDefault();
    const tarefa = {
      nome,
      dataFinalizacao,
      anotacao,
    };
    onSubmit(tarefa);
    onClose();
  };
  const manipuladorAnotacao = (valor) => {
    setAnotacao(valor);
    setTamanhoAnotacao(valor.length);
  };

  return (
    <Box
      as="form"
      w="100%"
      maxW="500px"
      mx="auto"
      p={4}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      onSubmit={manipuladorSubmit}
    >
      <VStack spacing={4} align="stretch">
        <FormControl id="nome" isRequired>
          <FormLabel>Nome da Tarefa</FormLabel>
          <Input
            type="text"
            placeholder="Digite o nome da tarefa"
            onChange={(e) => setNome(e.target.value)}
            maxLength={30}
          />
        </FormControl>
        <FormControl id="dataFinalizacao" isRequired>
          <FormLabel>Data</FormLabel>
          <Input
            type="date"
            onChange={(e) => setDataFinalizacao(e.target.value)}
          />
        </FormControl>

        <FormControl id="anotacao">
          <FormLabel>Anotação</FormLabel>
          <Textarea
            placeholder="Digite alguma anotação sobre a tarefa"
            onChange={(e) => manipuladorAnotacao(e.target.value)}
            maxLength={1000}
          />
          <FormLabel>{`Digitado ${tamanhoAnotacao} de 1000`}</FormLabel>
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Adicionar Tarefa
        </Button>
      </VStack>
    </Box>
  );
}
