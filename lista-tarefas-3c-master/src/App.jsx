import './App.css';
import React, { useCallback, useReducer, useState } from 'react';

// Definindo as ações adicionar, marcar como feito e deletar das tarefas
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TAREFA':
      return [...state, action.payload];
      // payload é o novo valor da tarefa que está sendo adicionada
    case 'CONCLUIDO':
      const atualizarTarefa = [...state];
      atualizarTarefa[action.payload].completed = true;
      return atualizarTarefa;
    case 'DELETE_TAREFA':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

function App() {
  const [tarefa, setTarefa] = useState('');

  const [tarefaAtual, dispatch] = useReducer(taskReducer, []);
  // dispatch - função utilizada para despachar as ações para o useReducer executar

  // Função adicionar tarefa
  const addTarefa = useCallback(() => {
    // Usando o useCallback para que as tarefas permaneçam as mesmas entre as renderizações
    // Verificar se a tarefa não está vazia para que ela seja adicionada
    if (tarefa.trim() !== '') {
      dispatch({ type: 'ADD_TAREFA', payload: { text: tarefa, completed: false } });
      setTarefa('');
    }
  }, [tarefa]);

  // Função marcar tarefa como concluída
  const concluirTarefa = useCallback((index) => {
    dispatch({ type: 'CONCLUIDO', payload: index });
    // Disparando ação tipo concluído para o useReducer
    // Usando o meu dado atual (payload) a partir do seu index (posição)
  }, []);

  // Função deletar tarefa
  const deleteTask = useCallback((index) => {
    dispatch({ type: 'DELETE_TAREFA', payload: index });
  }, []);

  return (
    <div className="center">
      <h1>Lista de Tarefas</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button onClick={addTarefa}>Adicionar</button>
      </div>
      <ul>
        {/* Criando nossa lista de tarefas */}
        {tarefaAtual.map((tarefas, index) => (
          <li key={index}>
            <span style={{ textDecoration: tarefas.completed ? 'line-through' : 'none' }}>
              {/* Adicionando style que verifica se a tarefa foi marcada como completed e adiciona um riscado */}
              {tarefas.text}
            </span>
            {!tarefas.completed && (
              <>
                {/* Botão que chama função concluir tarefa a partir do seu index (posição) */}
                <button onClick={() => concluirTarefa(index)}>Concluir tarefa</button>
              </>
            )}
            <button onClick={() => deleteTask(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
