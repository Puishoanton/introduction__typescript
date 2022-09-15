import { FC } from 'react'
import { IUser } from '../types/types'

interface UserProps {
  user: IUser
  onClick: (user: IUser) => void
}

const UserItem: FC<UserProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{
        margin: '100px',
        padding: '10px',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        width: '800px',
        gap: '10px',
        fontSize: '1rem',
      }}>
      <h2 style={{ fontSize: '1.5rem' }}>
        {user.id}. {user.name}
      </h2>
      <h3 style={{ fontSize: '1.5rem' }}>Address</h3>
      <p style={{ fontSize: '1.5rem' }}>
        {user.address.city} {user.address.street} {user.address.zipcode}
      </p>
    </div>
  )
}

export default UserItem
