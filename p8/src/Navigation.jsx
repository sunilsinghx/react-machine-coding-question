/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function Navigation({ data }) {

    const [location,setLocation] = useState(data)
    const moveUp = (index)=>
    {

        const temp = [...location];
        //swap index,index-1
        const curr = temp[index];
        temp[index] = temp[index-1];
        temp[index-1] = curr;

        setLocation(temp);
    }
    const moveDown = (index)=>
    {
        const temp = [...location];
        const curr = temp[index];
        //swap (index, index+1)   
        temp[index] = temp[index+1];

        temp[index+1] = curr;

        setLocation(temp)


    }



  return (
    <div style={{margin:"200px",backgroundColor:"#f9f9f9f9",width:"300px", padding:"20px",  }}>
      {
        location.map((curr,index) => (
        <div
          key={curr}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding:"10px",
            border:"1px solid black"
          }}
        >
          {curr}
          <div>
            {index !=0 && <FaArrowUp onClick={()=>moveUp(index)} />}
            {index != (location.length-1) && <FaArrowDown onClick={()=>moveDown(index)} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Navigation;
