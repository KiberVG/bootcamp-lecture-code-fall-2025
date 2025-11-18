import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import Register from './pages/Register.tsx'
import Profile from './pages/Profile.tsx'
import Navbar from './components/Navbar.tsx'
import Login from './pages/LoginPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(


    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>

)



