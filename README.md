# ListaDeTarefas.Api

## Descrição
Este projeto é uma API para gerenciar uma lista de tarefas. Ele foi desenvolvido utilizando .NET 9 e C# 13.0.

## Estrutura do Projeto
O projeto está organizado em camadas para separar as responsabilidades e facilitar a manutenção e evolução do código.

### Camadas
- **Configuracao**: Contém as configurações do projeto, como a configuração do banco de dados.
- **Entidades**: Contém as classes que representam as entidades do domínio.
- **Interfaces**: Contém as interfaces que definem os contratos que as classes de repositório devem implementar.
- **Repositorio**: Contém as implementações das interfaces de repositório.
- **Controllers**: Contém os controladores da API que expõem os endpoints para os clientes.

## Pacotes Utilizados
- **Microsoft.EntityFrameworkCore**: Provedor de banco de dados para Entity Framework Core.
- **Microsoft.EntityFrameworkCore.SqlServer**: Provedor de banco de dados SQL Server para Entity Framework Core.
- **Microsoft.EntityFrameworkCore.Tools**: Ferramentas para Entity Framework Core.
- **Swashbuckle.AspNetCore**: Ferramentas para gerar documentação Swagger para a API.

## Configuração do Banco de Dados
A configuração do banco de dados é feita no arquivo `Program.cs` utilizando o Entity Framework Core com SQL Server.
## Executando o Projeto
Para executar o projeto, utilize o comando `dotnet run` no terminal na pasta raiz do projeto.

## Documentação da API
A documentação da API é gerada automaticamente pelo Swashbuckle e pode ser acessada através do endpoint `/swagger` quando a aplicação está em execução.
