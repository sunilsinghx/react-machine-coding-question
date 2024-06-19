import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react"

function useDetectScroll() {

    const prevScrollY = useRef("")
    const [direction, setDirection] = useState("")


    useEffect(()=>
    {
        window.addEventListener("scroll",handleScroll);


        //cleanup
        ()=>
        {
            window.removeEventListener("scroll",handleScroll);
        }
    },[])

    function handleScroll()
    {
        prevScrollY.current > window.scrollY ? setDirection("UP"): setDirection("DOWN")

        prevScrollY.current = window.scrollY
    }



  return direction
}

export default useDetectScroll