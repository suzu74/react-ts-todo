import './App.css';
import React, {useState} from 'react';
import { InputTodo } from "./components/InputTodo"
import { IncompleteTodo } from "./components/IncompleteTodo"
import { CompleteTodo } from "./components/CompleteTodo"

function App() {
  const [todoText, setTodoText] = useState<number | string>("")
  const [incompleteTodos, setIncompleteTodos] = useState<Array<number | string>>([])
  const [completeTodos, setCompleteTodos] = useState<Array<number | string>>([])

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

  const onClickComplete = (index: number): void => {
    const newInCompleteTodos = [...incompleteTodos]
    newInCompleteTodos.splice(index, 1)
    setIncompleteTodos(newInCompleteTodos)

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack =(index: number): void => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)
    setCompleteTodos(newCompleteTodos)

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]]
    setIncompleteTodos(newInCompleteTodos)
  }

  return (
    <>
      <InputTodo todoText={todoText}  onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd}/>
      <IncompleteTodo onClickDelete={onClickDelete} onClickComplete={onClickComplete} incompleteTodos={incompleteTodos}/>
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack}/>
    </>
  );
}

export default App;
