import { useRef, useState } from "react";
import "../index.css";

function Moveable() {


    const blockRef = useRef();

    const [moving, notMoving] = useState({x:0, y:0})


    const moveBlock = (dir)=>
    {

        const checkBoundry=
        {
            up: moving.y <= 0,
            left: moving.x <= 0,
            right : moving.x >= blockRef?.current.offsetWidth - blockRef?.current.clientHeight,
            down : moving.y >= blockRef?.current.clientHeight - 114,
        }

        console.table(dir,blockRef?.current.offsetWidth , blockRef?.current.clientHeight );

        if(checkBoundry[dir])return


        const update= 
        {
            up: { y: moving.y - 50},
            down: {y: moving.y+ 50},
            left:{x : moving.x -50},
            right:{x : moving.x +50},
        }

        

       notMoving(prev=>{
            return {...prev, ...update[dir]}
       })
    }



  return (
    <div ref={blockRef}>
      <div>
        <div>
          <button className="horizontal"
          onClick={()=>moveBlock("up")}
          >UP</button>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <button 
            className="vertical"
            onClick={()=>moveBlock("left")}    >LEFT</button>
          <div className="wrapper" >
            <div className="box" style={{position:"absolute",left: moving.x , top: moving.y}}></div>
          </div>
          <button className="vertical"
            onClick={()=>moveBlock("right")}
          >RIGHT</button>
        </div>
        <div>
          <button className="horizontal"
          onClick={()=>moveBlock("down")}
          >DOWN</button>
        </div>
      </div>
    </div>
  );
}

export default Moveable;
