import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Account/Profile'
import Signin from './pages/Account/Signin'
import Signup from './pages/Account/Signup'
import ForgotPass from './pages/Account/ForgotPass'

function App() {

  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />

        {/*Account routes */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgot-password" element={<ForgotPass/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
