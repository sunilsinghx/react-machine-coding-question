import { useRef, useState } from "react"

function Timer() {
    const [count,setCount] = useState(0);
    const refInterval = useRef()
    
    function  startCount()
    {
        refInterval.current = setInterval(()=>
        {
            setCount(prev=> prev+1)         
        },500)
    }
    function  pauseCount()
    {
        clearInterval(refInterval.current)
    }
    function  resetCount()
    {
        clearInterval(refInterval.current)
        setCount(0);
    }



  return (
    <div>

        <p> Count is : {count}</p>
        <button onClick={startCount}>Start</button>
        <button onClick={pauseCount}>Pause</button>
        <button onClick={resetCount}>Reset</button>

    </div>
  )
}

export default Timer