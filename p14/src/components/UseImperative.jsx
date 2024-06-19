/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react"

const UseImperative = forwardRef((props,ref)=>
{
    const inputRef= useRef()

    useImperativeHandle(ref,()=>
    ({
        // eslint-disable-next-line no-unused-labels
        focus: ()=>{inputRef.current.focus()},
        // eslint-disable-next-line no-unused-labels
        clear: ()=>{inputRef.current.value = ""}
    }))


    return (
        <div>
            <input type="text"  ref={inputRef}/>
        </div>
    )
    
})


export default UseImperative