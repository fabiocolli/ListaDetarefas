using ListaDeTarefas.Api.Entidades;
using Microsoft.EntityFrameworkCore;

namespace ListaDeTarefas.Api.Configuracao
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(PegarStringConexao());

                base.OnConfiguring(optionsBuilder);
            }
        }
        public string PegarStringConexao()
        {
            return "Data Source=fc-p\\local;Initial Catalog=TarefasComReact;Persist Security Info=True;User ID=sa;Password=;TrustServerCertificate=True";
        }

        public DbSet<Tarefa> Tarefas { get; set; }
    }
}
