import axios from 'axios';
import React, { useRef, useState } from 'react'

const baseURL = "http://localhost:3033/api";

export default function Login() {
  const [isSuccess, setIsSuccess] = useState(false)
  const emailInput = useRef("")
  const passwordInput = useRef("")

  const handleSubmit = () => {
    const data = {
      "email": emailInput.current.value,
      "password": passwordInput.current.value
    }

    axios.post(baseURL + "/auth/login/", data).then(res => {
      localStorage.setItem("user",JSON.stringify(res.data))
      setIsSuccess(true)
      window.location.href = "/"
    }).catch(error => {
      console.log("Error", error.message)
    });
    console.log(data)
  }

  return (
    <div>
      {isSuccess && <h2>Successfully Login!!</h2>}
      <input type="email" placeholder="Enter Email" name="email" ref={emailInput} />
      <input type="password" placeholder="Enter Password" name="password" ref={passwordInput} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}


// Create 1 card in center of the body
// 1. Logo
// 2. Email field
// 3. Password
// 4. Login Button