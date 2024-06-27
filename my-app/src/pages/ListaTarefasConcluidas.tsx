import { useEffect, useState } from "react";

const ListaTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefas[]>([]);

  useEffect(() => {
    fetch("http://localhost:5273/tarefas/concluidas>")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na requisição: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTarefas(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de tarefas Pendentes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Status</th>
            <th>Criado Em</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.TarefaId}>
              <td>{tarefa.TarefaId}</td>
              <td>{tarefa.Titulo}</td>
              <td>{tarefa.Descricao}</td>
              <td>{tarefa.Categoria}</td>
              <td>{tarefa.Status}</td>
              <td>{new Date(tarefa.CriadoEm).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaTarefas;
