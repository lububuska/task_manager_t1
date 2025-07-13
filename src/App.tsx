import './App.css'
import { Routes, Route } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskDetails from './pages/TaskDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </>
  )
}

export default App
