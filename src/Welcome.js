import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function Welcome () {
const navigate = useNavigate()

const [isLoggedIn, setIsLoggedIn] = useState(true)

const handleLogout = () => {

setIsLoggedIn(false)
navigate("/")

}

  return (
    <>
     <div className ="relative">

      <h1 className ="text-2xl text-center mb-5">Välkommen</h1>
      <img className ="w-250 ml-65" src="hello.jpg" alt="hello bild" />
      <button onClick = {handleLogout} className ="border-2 w-20 font-bold absolute top-5 hover:cursor-pointer">Logga ut</button>

    </div>
    </>
  )
}

export default Welcome