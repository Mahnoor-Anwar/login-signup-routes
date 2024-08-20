import React from 'react'
import style from './Login.module.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import LoginImg from '../assets/login.jpg'
import Button from 'react-bootstrap/Button';
 
const Login = ({gotToSignup}) => {
  function handleSubmit(event) {
    event.preventDefault()
    alert("You're Logged In");
  }
  return (
    <div>
      <form action="#" enctype="multipart/form-data" onSubmit={handleSubmit}>
      <div className="container">
          <div className="row">
            <div className="col-md-6" style={{marginTop:'8rem'}}>
                <h1 className="mb-5">Login Form</h1>
                <div className={style.form__group}>
                <MdEmail className={style.icon}  />
                    <input type="email" className={style.form__field}placeholder="Email"  required />
                </div> 
                <div className={style.form__group}>
                <RiLockPasswordFill className={style.icon}  />
                    <input type="password" className={style.form__field}placeholder="Password"required />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center" style={{ height:'55vh'}}>
                  <img src={LoginImg} alt=""/>
              </div>
             
          </div>
          <div>
              <Button type="submit" className={style.btn}>Login</Button>
            <div>Create an Account  <a href="#" onClick={gotToSignup}>SignUp</a></div>
          </div>
      </div>
      </form>
    </div>
  )
}

export default Login
