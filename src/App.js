import Home from './home'
import SignUp from './Signup';
import Login from './Login'
import Welcome from './Welcome';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';


function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>

        <Routes>
          <Route path = "/" element ={<Home/>} />

          <Route path = "/Login" element ={<Login setIsLoggedIn={setIsLoggedIn}/>} />

          <Route path = "/Signup" element ={<SignUp/>} />

          <Route path = "/Welcome" element ={isLoggedIn ? (<Welcome setIsLoggedIn={setIsLoggedIn}/>) : (<Welcome/>)}
          />
        </Routes>
    </Router>
  );
}

export default App;
