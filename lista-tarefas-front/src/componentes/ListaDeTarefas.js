import { useEffect, useState } from "react";
import {
  excluirTarefa,
  finalizarTarefa,
  listarTodasTarefas,
} from "../api/_api";
import TabelaTarefas from "./TabelaTarefas";

const pegarHorarioDoBrasil = () => {
  const agora = new Date();
  // Hora local de Brasília geralmente é UTC-3
  const offset = -3; // Horário de Brasília
  const horaDoBrasil = new Date(agora.getTime() + offset * 60 * 60 * 1000);
  return horaDoBrasil.toISOString();
};

export default function ListaDeTarefas() {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState("");
  const [abertas, setAbertas] = useState(0);
  const [finalizadas, setFinalizadas] = useState(0);

  const listarTarefas = async () => {
    try {
      const response = await listarTodasTarefas();
      const tarefasAbertas = response.data.filter((t) => !t.finalizada);
      const tarefasFinalizadas = response.data.filter((t) => t.finalizada);

      setAbertas(tarefasAbertas.length);
      setFinalizadas(tarefasFinalizadas.length);

      setDados(response.data);

      setErro("");
    } catch (error) {
      setErro(error.message);
    }
  };

  useEffect(() => {
    listarTarefas();
  }, []);

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
      <TabelaTarefas
        dados={dados}
        erro={erro}
        excluirTarefa={manipuladorExcluiTarefa}
        finalizarTarefa={manipuladorFinalizaTarefa}
        abertas={abertas}
        finalizadas={finalizadas}
      />
    </div>
  );
}
