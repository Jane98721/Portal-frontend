import { useState} from "react"
import Login from "./Login"
import SignUp from "./Signup"

function Home () {

  const [showLogin, setShowLogin] = useState(true)

  return (
  <>

  <div className ="bg-linear-to-r/increasing from-indigo-500 to-teal-400 2xl:w-478 2xl:h-265 xl:h-184 xl:w-378 lg:w-205 lg:h-170 md:w-189 md:h-170 sm:w-188 sm:h-160 w-188 h-140 ">
  <h1 className ="2xl:text-5xl xl:text-4xl text-3xl text-center pt-5">Välkommen till min hemsida</h1>

  {showLogin ? <Login/> : <SignUp/>}

  <p className ="absolute 2xl:top-120 2xl:left-205 xl:top-120 xl:left-155 lg:top-120 lg:left-68 md:top-120 md:left-54 sm:top-120 sm:left-60 top-120 left-70" >{showLogin ? (
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