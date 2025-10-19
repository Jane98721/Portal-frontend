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
      if(data.success){
        alert ("Användare skapad")
        setName("")
        setEmail("")
        setUsername("")
        setPassword("")
      }
    } catch (error) {
      console.error("Fel vid skapande av användare", error)
    }
  }
  
  return (
  <>
  <div className ="">
    <form onSubmit = {handleSignup}>  
      <div 
      className ="bg-gray-100 border-2 relative pt-10 
      2xl:ml-150 2xl:mt-20 2xl:w-150 2xl:h-140
      xl:w-120 xl:h-130 xl:ml-125
      lg:w-120 lg:h-120 lg:ml-65 lg:mt-10
      md:w-120 md:h-120 md:ml-40 md:mt-5
      sm:w-120 sm-h-120 sm:ml-30 
      w-100 h-120 mt-10 ml-5">
        <h2 
        className="text-2xl font-bold text-center mb-4
        2xl:text-4xl">
          Skapa konto
          </h2>
          
          <div className ="grid">
            <input 
            className ="border-2 rounded-2xl pl-3 mb-2 ml-3 w-90
            2xl:w-147 2xl:ml-1
            xl:w-114
            lg:w-114
            md:w-114"
            type ="text"
            value= {name}
            onChange = {(e) => setName(e.target.value)}
            placeholder="Namn">

            </input>
            
            <input 
            className ="border-2 rounded-2xl pl-2 mb-2 ml-3 w-90
            2xl:w-147 2xl:ml-1
            xl:w-114
            lg:w-114
            md:w-114"
            type ="text"
            value= {email}
            onChange = {(e) => setEmail(e.target.value)}
            placeholder="E-mail">

            </input>
            
            <input 
            className ="border-2 rounded-2xl pl-2 mb-2 ml-3 w-90
            2xl:w-147 2xl:ml-1
            xl:w-114
            lg:w-114
            md:w-114"
            type ="text"
            value= {username}
            onChange = {(e) => setUsername(e.target.value)}
            placeholder="Användarnamn">

            </input>
            
            <input
            className ="border-2 rounded-2xl pl-2 ml-3 w-90
            2xl:w-147 2xl:ml-1
            xl:w-114
            lg:w-114
            md:w-114"
            type ="password"
            pattern = "(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}"
            title ="Lösenordet måste innehålla minst 8 tecken, minst 1 siffra och 1 specialtecken" required
            value= {password}
            onChange = {(e) => setPassword(e.target.value)}
            placeholder="Lösenord">

            </input>
            
            <button 
            className ="border-2 rounded-2xl mt-10 hover:cursor-pointer hover:bg-gray-200 ml-3 w-90
            2xl:w-147 2xl:ml-1
            xl:w-114
            lg:w-114
            md:w-114"
            type ="submit">
              Skapa konto
              </button>
              </div>
            </div> 
        </form>   
    </div>
  </>
)}

export default SignUp