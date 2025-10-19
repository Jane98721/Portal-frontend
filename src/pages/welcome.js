import HandleLogoutButton from "../components/logoutButton"
import NavbarLoginPage from "../components/navbarLoginPage"
import WelcomeText from "../components/welcomeText"

function Welcome () {
  
  return (
  <>

  <div className ="relative ">
    <NavbarLoginPage/>
    <WelcomeText text ="Welcome"/>
    <HandleLogoutButton/>
    </div>
    
    </>
  )
}

export default Welcome