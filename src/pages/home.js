import { useState } from "react"
import Login from "./loginPage"
import SignUp from "./signupPage"
import Navbar from "../components/navbar"

function Home () {
  
  const [showLogin, setShowLogin] = useState(true)
  
  return (
  
  <>
  
  <div>

    <Navbar/>
    
    {showLogin ? <Login/> : <SignUp/>}
    
    <p 
    className ="absolute 2xl:top-162 2xl:left-180 
    xl:top-150 xl:left-150 
    lg:top-150 lg:left-90 
    md:top-145 md:left-62 
    sm:top-140 sm:left-20 
    top-150 left-39">
      
      {showLogin ? ( 
        <> 
        Har du inget konto ?
        
        <button 
        className ="border-3 rounded-2xl ml-2 py-1 w-40 hover:bg-white hover:text-indigo-600 
        font-semibold" 
        onClick = {() => setShowLogin(false)}
        >
          Registrera dig här
          </button>

          </>
          ) : (
          
          <> 
          Har du redan ett konto?
          
          <button 
          className ="border-3 rounded-2xl ml-2 py-1 w-30
           hover:bg-white hover:text-indigo-600
           font-semibold"
           onClick = {() => setShowLogin(true)}
           >
            Logga in här
            </button>
            
            </>
          )
        }
      </p>
    </div>
  </>
  )
}

export default Home