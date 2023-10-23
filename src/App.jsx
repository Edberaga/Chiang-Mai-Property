import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

//Page Imports
import Home from './pages/Home'
import Profile from './pages/Account/Profile'
import Signin from './pages/Account/Signin'
import ForgotPass from './pages/Account/ForgotPass'
import Header from './components/Header'
import Offers from './pages/Offers'
import PrivateRoute from './components/PrivateRoute';

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
      <Route path="/profile" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/signin" element={<Signin/>}/>
      <Route path="/forgot-password" element={<ForgotPass/>}/>
    </Routes>
  </Router>

  <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />

  </>
  )
}

export default App
