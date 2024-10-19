import { useCallback, useEffect, useState } from "react";
import {
  excluirTarefa,
  finalizarTarefa,
  listarTodasTarefas,
} from "../api/_api";
import TabelaTarefas from "./TabelaTarefas";
import BotaoIncluirNovaTarefa from "./BotaoIncluirNovaTarefa";
import ResumoTarefas from "./ResumoTarefas";
import { Box, Button } from "@chakra-ui/react";

const pegarHorarioDoBrasil = () => {
  const agora = new Date();
  // Hora local de Brasília geralmente é UTC-3
  const offset = -3; // Horário de Brasília
  const horaDoBrasil = new Date(agora.getTime() + offset * 60 * 60 * 1000);
  return horaDoBrasil.toISOString();
};

export default function ListaDeTarefas() {
  const tamanhoDaPagina = 5;
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState("");
  const [abertas, setAbertas] = useState(0);
  const [finalizadas, setFinalizadas] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [tamanhoPagina, setTamanhoPagina] = useState(tamanhoDaPagina); // Defina o tamanho da página

  const listarTarefas = useCallback(async () => {
    try {
      setTamanhoPagina(tamanhoDaPagina);
      const response = await listarTodasTarefas(paginaAtual, tamanhoPagina);
      const tarefasAbertas = response.data.filter((t) => !t.finalizada);
      const tarefasFinalizadas = response.data.filter((t) => t.finalizada);

      setAbertas(tarefasAbertas.length);
      setFinalizadas(tarefasFinalizadas.length);

      setDados(response.data);

      setErro("");
    } catch (error) {
      setErro(error.message);
    }
  }, [paginaAtual, tamanhoPagina]);

  const irParaPaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const irParaProximaPagina = () => {
    setPaginaAtual(paginaAtual + 1);
  };

  useEffect(() => {
    listarTarefas();
  }, [listarTarefas]);

  const manipuladorExcluiTarefa = async (id) => {
    try {
      await excluirTarefa(id);

      await listarTarefas();

      setErro("");
    } catch (error) {
      setErro(error.message);
    }
  };

  const manipuladorFinalizaTarefa = async (id) => {
    try {
      const tarefaFinalizada = dados.find((d) => d.id === id);

      await finalizarTarefa({
        ...tarefaFinalizada,
        finalizada: !tarefaFinalizada.finalizada,
        dataFinalizacao: !tarefaFinalizada.finalizada
          ? pegarHorarioDoBrasil()
          : null,
      });

      await listarTarefas();

      setErro("");
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div>
      <Box>
        <BotaoIncluirNovaTarefa listarTodasTarefas={listarTarefas} />
        <ResumoTarefas abertas={abertas} finalizadas={finalizadas} />
        <TabelaTarefas
          dados={dados}
          erro={erro}
          excluirTarefa={manipuladorExcluiTarefa}
          finalizarTarefa={manipuladorFinalizaTarefa}
          abertas={abertas}
          finalizadas={finalizadas}
        />
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            onClick={irParaPaginaAnterior}
            isDisabled={paginaAtual === 1}
            mr={2}
          >
            Página Anterior
          </Button>
          <Button onClick={irParaProximaPagina} isDisabled={!dados}>
            Próxima Página
          </Button>
        </Box>
      </Box>
    </div>
  );
}
