import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import List from '../components/List'
import UserItem from '../components/UserItem'
import { IUser } from '../types/types'
const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchingUsers()
  }, [])

  async function fetchingUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      alert(error)
    }
  }
  const nav = useNavigate()
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem onClick={() => nav(`/users/${user.id}`)} user={user} key={user.id} />
      )}
    />
  )
}

export default UsersPage
