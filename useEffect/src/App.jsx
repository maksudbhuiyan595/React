import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const countHandle = () => {
    setCount(count + 1);
  };
  useEffect(()=>{
    alert('Count Changed: ')
  },[count])

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={countHandle}>Click Me</button>
    </>
  );
}
export default App;

