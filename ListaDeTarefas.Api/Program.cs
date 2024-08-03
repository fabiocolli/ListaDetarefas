using ListaDeTarefas.Api.Configuracao;
using ListaDeTarefas.Api.Interfaces;
using ListaDeTarefas.Api.Repositorio;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<Contexto>
    (options => options.UseSqlServer("Data Source=fc-p\\local;Initial Catalog=TarefasComReact;Persist Security Info=True;User ID=sa;Password=qM1t$up|iC74;TrustServerCertificate=True"));

builder.Services.AddSingleton(typeof(IRepositorio<>), typeof(RepositorioBase<>));
builder.Services.AddSingleton<ITarefa, RepositorioTarefa>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
