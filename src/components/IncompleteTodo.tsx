import { FC } from 'react'

type MyFunctionType = (e: any) => void;
type Props={
  incompleteTodos: Array<string | number>;
  onClickComplete: MyFunctionType;
  onClickDelete: MyFunctionType;
}

export const IncompleteTodo: FC<Props> = (props) => {
  const { onClickComplete, onClickDelete, incompleteTodos } = props 
  return(
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        { incompleteTodos.map((todo, index) => {
          return(
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => { onClickComplete(index) }}>完了</button>
              <button onClick={() => { onClickDelete(index)}}>削除</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}