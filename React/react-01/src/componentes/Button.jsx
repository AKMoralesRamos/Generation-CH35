import "../App.css";
import { useState } from "react";
const [count, setCount] = useState(0)

const Button = () => {
return {
    
  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
}
}

export default Button;