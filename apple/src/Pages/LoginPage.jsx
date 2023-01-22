import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"


const LoginPage = () => {
  const {login,isAuth} = useContext(AuthContext)
  const [email ,setEmail] = useState("")
 const [password ,setPassword] = useState("")
  
 const HandleLogin = () => {
  const userDetail ={ email , password}

  fetch("https://reqres.in/api/login" , {
    method :"POST",
    body: JSON.stringify(userDetail),
    headers :{
      "Content-Type" :"aplication/json"
    }
  }).then((res)=>res.json())
  .then((json) => {
    console.log(json)
  })
 };
  return (
    <>
    <div>
      <input type="text"
             placeholder="Enter email"
             value={email}
             onChange = {(e) => setEmail(e.target.value) }
      />
      <input type="password"
             placeholder="Enter Password"
             value={email}
             onChange = {(e) => setPassword(e.target.value) }
      />
      <button onClick={HandleLogin} >Login</button>
    </div>
    </>
   
  )
}

export default LoginPage