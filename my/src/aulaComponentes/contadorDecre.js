import React, { useState } from "react";

export default function Incre(){
    const [num, setNum] = useState(0);
    
    return(
        <div>
            <p>Contador</p>
             <p> Você clicou {num} vezes</p>
      <button onClick={() => setNum(num - 1)}>Decremento</button>
      <br /> <br />
      <button onClick={() => setNum(num + 1)}>Incremento</button>
        </div>
    );
}