import React, { useState } from 'react'
import style from './Signup.module.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import SignupImg from '../assets/signup.jpg'
import Button from 'react-bootstrap/Button';
 
const Signup = ({gotToLogin}) => {

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    // alert("You're Signed up");
    console.log(name , email , password)
  }

  return (
      <div className="container mt-5">
        <form action="#" onSubmit={handleSubmit}>
        <div className="row">
              <div className="col-md-6">
                  <h1>Signup Form</h1>
                  <div className={style.form__group}>
                    <FaUser className={style.icon} />
                    <input type="input" onChange={(e)=>setName(e.target.value)} className={style.form__field}placeholder="Name" name="name" id='name'  required />
                </div>
                <div className={style.form__group}>
                <MdEmail className={style.icon}  />
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className={style.form__field}placeholder="Email" name="email" id='email' required />
                </div> 
                <div className={style.form__group}>
                <RiLockPasswordFill className={style.icon}  />
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className={style.form__field}placeholder="Password" name="passowrd" id='passowrd' required />
                </div> <div className={style.form__group}>
                <RiLockPasswordFill className={style.icon}  />
                    <input type="password" className={style.form__field}placeholder="Repeat Password" name="repeat_passowrd" id='repeat_passowrd' required />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center" style={{ height:'55vh'}}>
                  <img src={SignupImg} alt=""/>
              </div>
          </div>
          <div>
            <Button type ="submit "className={style.btn}>Signup</Button>
            <div>Alrrady Have an Account ? <a href="#"onClick={gotToLogin} >Login</a></div>
          </div>
        </form>
         
      </div>
  )
}

export default Signup
