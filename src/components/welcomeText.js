import { useState, useEffect } from "react";

const WelcomeText = ({text = "Welcome", speed = 300}) => {
  
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    
    if(!text) return;
    
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text [index]) 
      index++
      
      if(index >= 6) {
        clearInterval(interval);
      }
    }, speed)
    
    return () => clearInterval(interval);
  }, [text, speed]);
  
  return (
  
  <h1 className ="text-7xl text-center">
    {displayedText}
    </h1>
  )
}

export default WelcomeText;