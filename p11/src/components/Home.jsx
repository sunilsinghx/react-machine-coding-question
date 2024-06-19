import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // eslint-disable-next-line no-unused-vars
  const [size, setSize] = useState(3);
  const [ curr, setCurr] = useState(0);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await (await fetch(API_URL)).json();

        setUser(res);
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, []);

  function changePrev(){

    if(curr > 0)
    {
        setCurr(prev=> prev-1)
    }
  }

  function changeNext() {

    if(curr  < Math.ceil(user.length/size)-1)
    {
        setCurr(prev => prev+1);
    }
  }

  let startIndex = curr*size;
  let endIndex = size + startIndex


  return (
    <div>
      <div>
       {
            user.slice(startIndex,endIndex).map(user => <div key={user.name}> {user.name} </div>)
       }
      </div>

      <div>
        <button onClick={changePrev}>prev</button>
        <button onClick={changeNext}>next</button>
      </div>
    </div>
  );
}

export default Home;
