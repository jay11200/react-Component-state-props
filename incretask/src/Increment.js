import { useState } from "react"

function Increment(){
    var [count,setCount] = useState(0)
    return(
        <div className="main">
            <div className="left">
                <h2>{count}</h2>
            </div>
            <div className="right">
                <button onClick={()=> setCount(count+1)}>increment</button>
                <button onClick={()=> setCount(count-1)}>decrement</button>
                <button onClick={()=> setCount(count = 0)}>reset</button>
            </div>
        </div>
    )
}

export default Increment