import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ListaTarefas from "./pages/ListaTarefas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pages/tarefa/listar" />
          <ListaTarefas />
          <Route path="/pages/tarefas/naoconcluidas" />
          <ListaTarefas />
          <Route path="/pages/tarefas/concluidas" />
          <ListaTarefas />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
