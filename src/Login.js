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
    console.log('Loggat in')
    navigate('/Welcome')
    } else {
      alert("Fel användarnamn eller lösenord")
    }
  } catch (error) {
    console.error("error", error)
    alert ("Kunde inte logga in, kontrollera server")
  }
}

  return (

    <>
    <div className ="relative bg-linear-to-r/increasing from-indigo-500 to-teal-400 h-183">
    <form className ="pt-25" onSubmit = {handleLogin}>
        
    <div className ="bg-gray-100 w-100 h-130 ml-135 relative pt-10">
    <h2 className ="text-2xl text-center font-bold">Logga in</h2>
    <div className ="grid mt-20">
    <input className ="border-2 rounded-2xl pl-2 mb-3"
    type ="text"
    value= {username}
    onChange = {(e) => setUsername(e.target.value)}
    placeholder="Användarnamn">
    </input>

    <input className ="border-2 rounded-2xl pl-2"
    type ="password"
    value= {password}
    onChange = {(e) => setPassword(e.target.value)}
    placeholder="Lösenord">
    </input>
    <button className ="border-2 rounded-2xl mt-10 hover:cursor-pointer" type ="submit"> Logga in</button>
    </div>
  
    </div>
    </form>
    </div>
    </>
  )



}

export default Login