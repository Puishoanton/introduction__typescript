import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TodosPage from './Pages/TodosPage'
import TrushPage from './Pages/TrushPage'
import UserPage from './Pages/UserPage'
import UsersPage from './Pages/UsersPage'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/trush' element={<TrushPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/todos' element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
