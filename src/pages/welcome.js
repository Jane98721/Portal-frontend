import HandleLogoutButton from "../components/logoutButton"
import NavbarLoginPage from "../components/navbarLoginPage"

function Welcome () {
  
  return (
  <>

  <div className ="relative ">
    <NavbarLoginPage/>
    
    <HandleLogoutButton/>

    <div className ="flex justify-center items-center mt-10">
      <p className ="overflow-hidden whitespace-nowrap border-r-4 border-black
      text-9xl m-0 tracking-wider text-center
      animate-typing animate-blink-caret">Välkommen!</p>
    </div>

    </div>
    
    </>
  )
}

export default Welcome