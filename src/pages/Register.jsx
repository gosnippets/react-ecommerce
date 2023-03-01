import axios from "axios";
import React, { useRef, useState } from "react";

const baseURL = "http://localhost:3033/api";


export default function Register() {
  const [isSuccess, setIsSuccess] = useState(false)
  const usernameInput = useRef("")
  const emailInput = useRef("")
  const passwordInput = useRef("")

  const handleSubmit = () => {
    console.log(usernameInput.current.value)
    const data = {
      "name": usernameInput.current.value,
      "email": emailInput.current.value,
      "password": passwordInput.current.value
    }

    axios.post(baseURL + "/users/", data).then(res => {
      console.log("Response", res.data)
      setIsSuccess(true)
      usernameInput.current.value = ""
      emailInput.current.value = ""
      passwordInput.current.value = ""
    }).catch(error => {
      console.log("Error", error.message)
    });
    console.log(data)
  }

  return (
    <div>
      {isSuccess && <h2>Successfully registered!!</h2>}
      <input type="text" placeholder="Enter your name" name="username" ref={usernameInput} />
      <input type="email" placeholder="Enter Email" name="email" ref={emailInput} />
      <input type="password" placeholder="Enter Password" name="password" ref={passwordInput} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

// Create 1 card in center of the body
// 1. Logo
// 2. User name (Full name)
// 3. Email
// 4. Password
// 5. Register Button
