namespace ListaDeTarefas.Api.Entidades
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime DataCriacao { get; set; }
        public string Anotacao { get; set; }
        public bool Finalizada { get; set; }
        public DateTime? DataFinalizacao { get; set; }
    }
}
