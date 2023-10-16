import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const plusHandler = () => {
        setCount(prev => prev + 1);
    };
    const minusHandler = () => {
        setCount(prev => prev - 1);
    };
    return ( 
        <div className="border w-fit p-8 flex gap-4 items-center rounded-xl mx-auto my-8">
            <button className="bg-red-500 text-white p-2 rounded-lg" onClick={minusHandler}>-</button>
            <p>{ count }</p>
            <button className="bg-green-500 text-white p-2 rounded-lg" onClick={plusHandler}>+</button>
        </div>
     );
}
 
export default Counter;