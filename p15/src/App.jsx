import { useEffect, useRef, useState } from "react"

function App() {


    const [count ,setCount] = useState(0);
    const ref = useRef(false);
  
    //run useEffer only once 
      useEffect(()=>
      { 

        console.log("inside");
          if(!ref.current)
          {
            ref.current = true;

            setCount(prev=>prev+1);
          }
      })

  return (
   <>
      
      {count}

   </>
  )
}

export default App
