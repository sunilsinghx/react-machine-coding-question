import { useEffect } from 'react'
import '../App.css'
import { useState } from 'react'


const LIGHTS = 
{
    red : "red",
    green :"green",
    yellow: "yellow"
}


function TrafficLight() {
    const [active, setActive] = useState(LIGHTS.green)
    
    useEffect(()=>
    {
        switch(active)
        {
            case LIGHTS.green:
                setTimeout(()=>
                {
                    setActive(LIGHTS.yellow)
                }, 2000)
                break
            case LIGHTS.yellow:
                setTimeout(()=>
                {
                    setActive(LIGHTS.red)
                }, 500)
                break
            case LIGHTS.red:
                setTimeout(()=>
                {
                    setActive(LIGHTS.green)
                }, 1000)
                break
            
        }

    }, [active])

 
    return (

    <div className="wrapper">
        
        <div className="light green"
            style={active != LIGHTS.green? {opacity: .5}: null}
         >A</div>
        <div className="light yellow"
        style={active != LIGHTS.yellow? {opacity: .5}: null}
        >B</div>
        <div className="light red"
        style={active != LIGHTS.red? {opacity: .5}: null}
        >C</div>
    </div>
  )
}

export default TrafficLight