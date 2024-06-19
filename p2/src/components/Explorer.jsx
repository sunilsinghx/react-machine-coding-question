/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";


function Explorer({data}) {

    const [expand,setExpand] = useState(false)

  return (

    <div>

        <div
            style={{display:"flex", alignItems:"center", gap:"2px"}}
            onClick={()=>setExpand(prev=> !prev)}
        >
            {data.isFolder? expand? <FaCaretDown/>: <FaCaretRight/>: null}
            {data.name}
        </div>
        
        <div style={{marginLeft:"15px"}}> 
            {
                data.isFolder && data.items.map((item)=>
                {
                    return (
                        <div key={item.name} style={expand ? {display:"block"}: {display:"none"}}>

                          <Explorer  data={item}/>

                        </div>
                    )
                })
            }       
        </div>
    </div>
    
  )
}

export default Explorer