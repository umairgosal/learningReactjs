import { DataInteractive } from "@headlessui/react";
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    // setCount((e)=> {handleClick(e)})
    const handleClick = () => {
        setCount(count+1);
    }

    return(
        <div className="text-center rounded-md border-2 block ml-60 mr-60 shadow-xl">
            <p>Count: {count}</p>
            <button onClick={handleClick}>increment Count</button>
        </div>
    );

}

export default Counter

