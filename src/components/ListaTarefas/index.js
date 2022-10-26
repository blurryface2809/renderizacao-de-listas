import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([
    "ler livros",
    "lavar louça",
    "cozinhar feijão"
  ]);

  const renderizaListaDeTarefa = lista.map((tarefa, index) => {
    return (
      <Tarefa key={index}>
        <p>{tarefa}</p>
        <RemoveButton onClick={() => removeTarefa(tarefa)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  });

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    setLista([...lista, novaTarefa]);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>{renderizaListaDeTarefa}</ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
