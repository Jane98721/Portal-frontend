import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login () {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState ("")
  const [username, setUsername] = useState ("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
    const response = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    })

    if(!response.ok) {
      throw new Error ("Server error")
    }

    const data = await response.json()
    
    if(data.success) {
    setIsLoggedIn(true)
    navigate('/Welcome')
    } else {
      alert("Fel användarnamn eller lösenord")
    }
  } catch (error) {
    console.error("error", error)
    alert ("Fel användarnamn eller lösenord")
  }
}

return (

<>
<div className ="relative">
  <form onSubmit = {handleLogin} >

    <div className ="bg-gray-100 border-2 relative pt-5 
                      2xl:w-120 2xl:h-130 2xl:ml-190
                      
                      w-100 h-120 
                      xl:ml-140 
                      lg:ml-53 
                      md:ml-45 md:mt-10 
                      ml-45 mt-10">

      <h2 className ="text-2xl text-center font-bold"> 
        Logga in 
      </h2>
    
    <div className ="grid mt-20">

      <input 
      className ="border-2 rounded-2xl pl-2 mb-3 ml-1 w-98"
      type ="text"
      value= {username}
      onChange = {(e) => setUsername(e.target.value)}
      placeholder="Användarnamn">
      </input>

      <input 
      className ="border-2 rounded-2xl pl-2 ml-1 w-98"
      type ="password"
      value= {password}
      onChange = {(e) => setPassword(e.target.value)}
      placeholder="Lösenord">
      </input>

      <button 
       className ="border-2 rounded-2xl mt-10 ml-1 w-98 hover:cursor-pointer hover:bg-gray-200" 
       type ="submit"> 
        Logga in
       </button>

     </div>
    </div>
  </form>
</div>
</>
)}

export default Login