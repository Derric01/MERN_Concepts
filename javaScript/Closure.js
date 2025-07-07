/*⚛️ 1. React Hooks & useState() — Powered by Closures
   🧠 What is useState()?
In React, useState() is a Hook that lets you add state to a functional component — and it works using closures under the hood.
*/


import {useState} from 'react';

function Counter(){
    const [count,setCount] = useState(0);//closure
    return(
        <button onClick={()=>setCount(count+1)}>
            count is {count}
        </button>
    );
}
/*
🧠 What is useState()?
In React, useState() is a Hook that lets you add state to a functional component — and it works using closures under the hood. 
| Hook         | What it does                            |
| ------------ | --------------------------------------- |
| `useState`   | Add state to function components        |
| `useEffect`  | Run code after render (side effects)    |
| `useRef`     | Create persistent values across renders |
| `useMemo`    | Cache expensive calculations            |
| `useContext` | Access global context                   |
| `useReducer` | Complex state management (like Redux)   |
*/



