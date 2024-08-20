import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Signup from './Signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';


function App() {
 let [isLogin , setIsLogin] = useState(true)


  return (
    <>
    {isLogin ? <Login gotToSignup={() => {
      setIsLogin(false)
    }} /> : <Signup gotToLogin={() => {
      setIsLogin(true)
    }} /> }
    </>
  )
}

export default App
