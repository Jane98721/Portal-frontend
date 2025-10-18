import Home from './pages/home';
import SignUp from './pages/signupPage';
import Login from './pages/loginPage';
import Welcome from './pages/welcome';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';


function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
        <Routes>
          <Route path = "/" element ={<Home/>} />

          <Route path = "/login" element ={<Login setIsLoggedIn={setIsLoggedIn}/>} />

          <Route path = "/signup" element ={<SignUp/>} />

          <Route path = "/welcome" element ={isLoggedIn ? (<Welcome/>) : (<Welcome/>)} />
        
        </Routes>
    </Router>
  );
}

export default App;
