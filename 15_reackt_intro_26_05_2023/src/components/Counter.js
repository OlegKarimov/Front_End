import React, { useState } from "react";

const Counter = () => {
    // let count = 0;
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    };

    const increment10 = () => {
        setCount(count + 10);
    };


    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <br></br>
            <button onClick={() => setCount(count - 10)}>Decrement -10</button>
            <button onClick={increment10}>Increment +10</button>
        </>
    );
};

export default Counter;