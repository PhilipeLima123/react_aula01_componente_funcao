
import React, { useState } from "react";

export default function Contador(){
    const [num, setNum] = useState(0);
    
    return(
        <div>
             <p> Contador {num}</p>
      <button onClick={() => setNum(num + 5)}>Mais 5</button>
      <br /> <br />
      <button onClick={() => setNum(num - 3)}>Menos 3</button>
        </div>
    );
}