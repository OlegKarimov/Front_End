import React, { useState } from "react";




const Counter = () => {
    // let count = 0;
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);
    const [title, setTitle] = useState('Counter App');


    const increment = () => {
        setCount(count + 1);
    };

    const increment10 = () => {
        setCount(count + 10);
    };

    const handleChange = (event) => {
        setNewCount(parseInt(event.target.value));
    }

    const handleClick = () => {
        setCount(newCount);
    }



    return (
        <>
        <h1>{title}</h1>
            <p> Count: {count}</p>
            <input type="number" value={newCount} onChange={handleChange}></input>
            <button onClick={handleClick}>Change count</button>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br></br>
            <button onClick={() => setCount(count - 10)}>Decrement -10</button>
            <button onClick={increment10}>Increment +10</button>
        </>
    );
};

export default Counter;