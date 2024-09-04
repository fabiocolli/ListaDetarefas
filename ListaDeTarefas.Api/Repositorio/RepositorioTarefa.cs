using ListaDeTarefas.Api.Configuracao;
using ListaDeTarefas.Api.Entidades;
using ListaDeTarefas.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ListaDeTarefas.Api.Repositorio
{
    public class RepositorioTarefa : RepositorioBase<Tarefa>, ITarefa
    {
        private readonly DbContextOptions<Contexto> _dbContextOptions;

        public RepositorioTarefa()
        {
            _dbContextOptions = new DbContextOptions<Contexto>();
        }
        public async Task<IEnumerable<Tarefa>> BuscarTarefaNomeAproximado(string nome)
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                return await data.Tarefas
                    .Where(t => t.Nome.Contains(nome))
                    .AsNoTracking()
                    .ToListAsync();
            }
        }

        public async Task<Tarefa> BuscarTarefaPeloId(int id)
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                return await data.Tarefas.FindAsync(id);
            }
        }

        public async Task<IEnumerable<Tarefa>> BuscarTarefasAbertas()
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                return await data.Tarefas
                    .Where(t => !t.Finalizada)
                    .AsNoTracking()
                    .ToListAsync();
            }
        }

        public async Task<IEnumerable<Tarefa>> BuscarTodasTarefas()
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                return await data.Tarefas.AsNoTracking().ToListAsync();
            }
        }
    }
}
