import "./App.css";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import Cabecalho from "./componentes/Cabecalho";

function App() {
  return (
    <div className="layout-container">
      <Cabecalho></Cabecalho>
      <ListaDeTarefas></ListaDeTarefas>
    </div>
  );
}

export default App;
