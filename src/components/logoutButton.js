import { useNavigate } from "react-router-dom"
import { useState } from "react"

const HandleLogoutButton = () => {
  const navigate = useNavigate()

const handleLogout = () => {
  navigate("/")
}

  return ( 
      <button 
      onClick = {handleLogout} 
      className ="border-2 w-25 font-bold absolute top-10 hover:cursor-pointer hover:bg-gray-200">
        Logga ut
      </button>
   );
}
 
export default HandleLogoutButton;