import axios from 'axios'
import { useEffect, useState, FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IUser } from '../types/types'

type UserItemPageParams = {
  // same as interface (maybe)
  id: string
}

const UserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()

  const nav = useNavigate()
  useEffect(() => {
    fetchingUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchingUser() {
    try {
      const response = await axios.get<IUser>(
        'https://jsonplaceholder.typicode.com/users/' + params.id
      )
      setUser(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <button onClick={() => nav('/users')}>back</button>
      <div>
        <h1>
          This is user: {user?.name}, #{user?.id}
        </h1>
        <div>
          {}Email: {user?.email}
        </div>
      </div>
    </div>
  )
}

export default UserPage
