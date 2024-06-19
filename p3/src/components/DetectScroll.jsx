import useDetectScroll from "../hooks/useDetectScroll"


export default function DetectScroll() {
  
    const scrollDirection = useDetectScroll()
  
    return (
        <>        
            <h3>Scroll Direction: {scrollDirection}</h3>
            <h1> Hello World !!!!!!!!!!</h1>
        </>
  )
}
