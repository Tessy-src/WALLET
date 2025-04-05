import { useState } from "react";


export default function Counter () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>current count:{count}</p>
      <button onClick={() => setCount(count + 1)}>increament</button>
      <button onClick={() => setCount(count - 1)}>decreament</button>
    </div>
);
}
    