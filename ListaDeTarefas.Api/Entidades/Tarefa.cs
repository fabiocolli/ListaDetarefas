namespace ListaDeTarefas.Api.Entidades
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime DataCriacao { get; set; } = DateTime.Now;
        public string Anotacao { get; set; }
        public bool Finalizada { get; set; } = false;
        public DateTime? DataFinalizacao { get; set; }
    }
}
