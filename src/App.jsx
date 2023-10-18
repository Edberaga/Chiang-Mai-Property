import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//Page Imports
import Home from './pages/Home'
import Profile from './pages/Account/Profile'
import Signin from './pages/Account/Signin'
import Signup from './pages/Account/Signup'
import ForgotPass from './pages/Account/ForgotPass'
import Header from './components/Header'
import Offers from './pages/Offers'

function App() {
  console.log("It is rendering!");
  return (
  <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/offers" element={<Offers/>} />

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
