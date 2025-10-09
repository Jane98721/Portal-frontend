import { useState } from "react"

function SignUp () {

  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [username, setUsername] = useState ("")

   const handleSignup = async (e) => {
    e.preventDefault()

  const body = {name, username, email, password}

  try {
  const response = await fetch ("http://localhost:3001/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)

  })
    
    if(!response.ok) {
      throw new Error ("Server error")
    }

    const data = await response.json()

    alert ("Användare skapad")

    setName("")
    setEmail("")
    setUsername("")
    setPassword("")
    console.log("Användare skapad")

  } catch (error) {
    console.error("Fel vid skapande av användare", error)
  }
  }

  return (

    <>
    <div className ="h-140">

    <form onSubmit = {handleSignup}>  
    <div className ="bg-gray-100 w-120 h-100 ml-125 mt-25 relative">
   
    <h2 className="text-2xl font-bold text-center mb-4">Skapa konto</h2>
    <div className ="grid">
    <input className ="border-2 rounded-2xl pl-2 mb-2"
    type ="text"
    value= {name}
    onChange = {(e) => setName(e.target.value)}
    placeholder="Namn">
    </input>

    <input className ="border-2 rounded-2xl pl-2 mb-2"
    type ="text"
    value= {email}
    onChange = {(e) => setEmail(e.target.value)}
    placeholder="E-mail">
    </input>
      
      
    <input className ="border-2 rounded-2xl pl-2 mb-2"
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
    <button className ="border-2 rounded-2xl mt-10"
     type ="submit"> Skapa konto</button>
    </div>

    </div> 
    </form>   
    </div>
    </>
  )
}

export default SignUp