using ListaDeTarefas.Api.Entidades;
using ListaDeTarefas.Api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ListaDeTarefas.Api.Controllers
{
    [Route("api/tarefa")]
    [ApiController]
    public class TarefaController : ControllerBase
    {
        public readonly ITarefa _tarefa;

        public TarefaController(ITarefa tarefa)
        {
            _tarefa = tarefa;
        }

        [HttpPost("/Adicionar")]
        public async Task AdicionarTarefa(Tarefa tarefa)
        {
            tarefa.DataCriacao = DateTime.Now;
            await _tarefa.Adicionar(tarefa);
        }

        [HttpPut("/Atualizar")]
        public async Task AtualizarTarefa(Tarefa tarefa)
        {
            await _tarefa.Atualizar(tarefa);
        }

        [HttpDelete("/Excluir")]
        public async Task Excluir(int id)
        {
            await _tarefa.Excluir(new Tarefa { Id = id });
        }

        [HttpGet("/BuscarTarefaPeloId")]
        public async Task<Tarefa> BuscarTarefa(int id)
        {
            return await _tarefa.BuscarPeloId(id);

        }

        [HttpGet("/ListarTarefas")]
        public async Task<IEnumerable<Tarefa>> ListarTarefas()
        {
            return await _tarefa.ListarTudo();
        }

    }
}
