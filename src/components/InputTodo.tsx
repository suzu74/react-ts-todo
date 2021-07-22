import { FC } from 'react'
type MyFunctionType = (e: any) => void;
type Props={
  todoText: string | number;
  onChangeTodoText: MyFunctionType;
  onClickAdd: MyFunctionType;
}

export const InputTodo: FC<Props> = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = props
  return(
    <div className="input-area">
      <input placeholder="ENTER TODO" value={todoText} onChange={onChangeTodoText}/> 
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}