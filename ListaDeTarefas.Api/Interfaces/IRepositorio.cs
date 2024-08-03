namespace ListaDeTarefas.Api.Interfaces
{
    public interface IRepositorio<T> where T : class
    {
        Task Adicionar(T tarefa);
        Task Atualizar(T tarefa);
        Task Excluir(T tarefa);
        Task<T> BuscarPeloId(int id);
        Task<List<T>> ListarTudo();
    }
}
