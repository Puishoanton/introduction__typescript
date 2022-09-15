import axios from 'axios'
import { useEffect, useState } from 'react'
import List from '../components/List'
import TodosItem from '../components/TodosItem'
import { ITodo } from '../types/types'
const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchingTodos()
  }, [])

  async function fetchingTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/users')
      setTodos(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <List items={todos} renderItem={(todo: ITodo) => <TodosItem todo={todo} key={todo.id} />} />
  )
}

export default TodosPage
