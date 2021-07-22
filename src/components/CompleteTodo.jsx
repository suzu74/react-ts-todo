import { FC } from 'react'

type MyFunctionType = (e: any) => void;
type Props={
  completeTodos: Array<string | number>;
  onClickBack: MyFunctionType;
}

export const CompleteTodo: FC<Props> = (props) => {
  const { completeTodos, onClickBack } = props 
  return(
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return(
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => { onClickBack(index) }}>戻す</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}