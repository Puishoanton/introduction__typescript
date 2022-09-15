import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={{ display: 'flex', gap: '50px', textDecoration: 'none' }}>
      <Link style={{ fontSize: '3rem', textDecoration: 'none', color: 'red' }} to='/trush'>
        Trush - Page
      </Link>
      <Link style={{ fontSize: '3rem', textDecoration: 'none', color: 'red' }} to='/todos'>
        Todos - Page
      </Link>
      <Link style={{ fontSize: '3rem', textDecoration: 'none', color: 'red' }} to='/users'>
        Users - Page
      </Link>
      <Link style={{ fontSize: '3rem', textDecoration: 'none', color: 'red' }} to='/user/:id'>
        Users - Page
      </Link>
    </div>
  )
}

export default HomePage
