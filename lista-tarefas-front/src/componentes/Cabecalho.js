import style from "../ui/home.module.css";

export default function Cabecalho() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Lista de tarefas</h1>
    </header>
  );
}
