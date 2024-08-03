using ListaDeTarefas.Api.Configuracao;
using ListaDeTarefas.Api.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32.SafeHandles;
using System.Runtime.InteropServices;

namespace ListaDeTarefas.Api.Repositorio
{
    public class RepositorioBase<T> : IRepositorio<T>, IDisposable where T : class
    {
        private readonly DbContextOptions<Contexto> _dbContextOptions;

        public RepositorioBase()
        {
            _dbContextOptions = new DbContextOptions<Contexto>();
        }
        public async Task Adicionar(T tarefa)
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                await data.Set<T>().AddAsync(tarefa);

                await data.SaveChangesAsync();
            }
        }

        public async Task Atualizar(T tarefa)
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                data.Set<T>().Update(tarefa);

                await data.SaveChangesAsync();
            }
        }

        public async Task<T> BuscarPeloId(int id)
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                return await data.Set<T>().FindAsync(id);
            }
        }

        public async Task Excluir(T tarefa)
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                data.Set<T>().Remove(tarefa);

                await data.SaveChangesAsync();
            }
        }

        public async Task<List<T>> ListarTudo()
        {
            using (var data = new Contexto(_dbContextOptions))
            {
                return await data.Set<T>().AsNoTracking().ToListAsync();
            }
        }

        bool disposed = false;
        SafeHandle handle = new SafeFileHandle(IntPtr.Zero, true);

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(handle);
        }

        public virtual void Dispose(bool disposing)
        {
            if (disposed)
            { return; };

            if (disposing)
            {
                handle.Dispose();
            }

            disposed = true;
        }
    }
}
