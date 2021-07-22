import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [todoText, setTodoText] = useState<number | string>("")
  const [incompleteTodos, setIncompleteTodos] = useState<Array<number | string>>(["111", 111])
  const [completeTodos, setCompleteTodos] = useState<Array<number | string>>(["otaga"])

  const onChangeTodoText = (e: any): void => {
    setTodoText(e.target.value)
  }

  const onClickAdd = (): void => {
    if(todoText === "") return
    const newTodos: Array<string | number> = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText("")
  }

  const onClickDelete = (index: number): void => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)

  }

  return (
    <>
      <div className="input-area">
        <input placeholder="ENTER TODO" value={todoText} onChange={onChangeTodoText}/> 
        <button onClick={onClickAdd}>追加</button>
      </div>
       <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return(
              <div className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => { onClickDelete(index)}}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return(
              <div className="list-row">
                <li>{todo}</li>
                <button>完了</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
