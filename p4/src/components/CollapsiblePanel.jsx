/* eslint-disable react/prop-types */
import { useState } from "react";
import "../index.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CollapsiblePanel = ({title, children, initialCollapse =  true}) => {

    console.log(children,initialCollapse);
    const [collapse,setCollapse] = useState(initialCollapse)

  return (
<div className="collapse-panel">

        <div className="panel-heading" onClick={()=>setCollapse(prev => !prev)}>
            <span>{title}</span>
            {collapse ? <IoIosArrowDown/> : <IoIosArrowForward/>} 
        </div>
        <div className={`panel-content ${collapse ? "collapse": ""} ` }>
            {children}
        </div>
    </div>
  )
}

export default CollapsiblePanel