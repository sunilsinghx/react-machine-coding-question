import { useRef } from "react";
import UseImperative from "./components/UseImperative";

function App() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleClear = () => {
    inputRef.current.clear();
  };
  return (
    <>
      <UseImperative ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleClear}>clear</button>
    </>
  );
}

export default App;
