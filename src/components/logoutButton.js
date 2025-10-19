import { useNavigate } from "react-router-dom"

const HandleLogoutButton = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    navigate("/")
  }
  
  return ( 
  <button 
  onClick = {handleLogout} 
  className ="border-2 w-30 h-10 font-bold absolute top-8 left-3
   hover:cursor-pointer hover:bg-gray-200">
    Logga ut
    </button>
    );
  };
 
export default HandleLogoutButton;