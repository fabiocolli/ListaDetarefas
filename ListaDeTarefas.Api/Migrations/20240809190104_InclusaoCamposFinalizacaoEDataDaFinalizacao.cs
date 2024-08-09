using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ListaDeTarefas.Api.Migrations
{
    /// <inheritdoc />
    public partial class InclusaoCamposFinalizacaoEDataDaFinalizacao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DataFinalizacao",
                table: "Tarefas",
                type: "datetime",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Finalizada",
                table: "Tarefas",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataFinalizacao",
                table: "Tarefas");

            migrationBuilder.DropColumn(
                name: "Finalizada",
                table: "Tarefas");
        }
    }
}
