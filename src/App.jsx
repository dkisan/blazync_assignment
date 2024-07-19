
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
