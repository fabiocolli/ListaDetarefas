using ListaDeTarefas.Api.Entidades;

namespace ListaDeTarefas.Api.Interfaces
{
    public interface ITarefa : IRepositorio<Tarefa>
    {
        Task<IEnumerable<Tarefa>> BuscarTarefaNomeAproximado(string nome);
        Task<Tarefa> BuscarTarefaPeloId(int id);
        Task<IEnumerable<Tarefa>> BuscarTodasTarefas();
    }
}
