import { useState} from "react"
import Login from "./Login"
import SignUp from "./Signup"

function Home () {

  const [showLogin, setShowLogin] = useState(true)

  return (
  <>

  <div className ="bg-linear-to-r/increasing from-indigo-500 to-teal-400 h-183">
  <h1 className ="text-3xl text-center pt-5">Välkommen till min hemsida</h1>

  {showLogin ? <Login/> : <SignUp/>}

  <p className ="absolute top-120 left-150">{showLogin ? (
    <>
    Har du inget konto ?
    <button className ="border-3 rounded-2xl ml-2 w-40 font-bold" onClick = {() => setShowLogin(false)}>
      Registrera dig här
    </button>
    </>
  ) : (
    <>
    Har du redan ett konto?
    <button className ="border-3 rounded-2xl ml-2 w-30 font-bold"onClick = {() => setShowLogin(true)}>
    Logga in här
    </button>
    </>
  )}
     </p>
  </div>
  
  </>
  )
}

export default Home