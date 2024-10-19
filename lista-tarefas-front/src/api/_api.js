import axios from "axios";

export const listarTodasTarefas = async (paginaAtual, tamanhoPagina) => {
  try {
    const response = await axios.get("http://localhost:5282/ListarTarefas", {
      params: {
        pagina: paginaAtual,
        tamanhoPagina: tamanhoPagina,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const excluirTarefa = async (id) => {
  try {
    await axios.delete(`http://localhost:5282/Excluir?id=${id}`);
  } catch (error) {
    throw error;
  }
};

export const finalizarTarefa = async (tarefa) => {
  try {
    await axios.put("http://localhost:5282/Atualizar", tarefa);
  } catch (error) {
    throw error;
  }
};

export const incluirTarefa = async (tarefa) => {
  try {
    await axios.post("http://localhost:5282/Adicionar", tarefa);
  } catch (error) {
    throw error;
  }
};

export const buscarTarefaPeloId = async (id) => {
  try {
    await axios.post("http://localhost:5282/BuscarTarefaPeloId", id);
  } catch (error) {
    throw error;
  }
};
