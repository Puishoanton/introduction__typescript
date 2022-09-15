import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface TodosProps {
  todo: ITodo
}

const TodosItem: FC<TodosProps> = ({ todo }) => {
  return (
    <div
      style={{
        margin: '100px',
        padding: '10px',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        width: '800px',
        gap: '20px',
      }}>
      <h2>
        {todo.id}. {todo.title}
      </h2>
      <input type='checkbox' defaultChecked={todo.completed} />
    </div>
  )
}

export default TodosItem
