// import React from 'react'
import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={{
                padding:'12px',
                backgroundColor: 'green',
                color:'white',
                border:'none',
                borderRadius:'5px',
                marginRight:'10px',
                cursor:'pointer'}}>Increment</button>

            <button onClick={() => setCount(count - 1)} style={{
                padding:'12px',
                backgroundColor: 'red',
                color:'white',
                border:'none',
                borderRadius:'5px',
                marginRight:'10px',
                cursor:'pointer'}}>Decrement</button>
                
            <button onClick={() => setCount(0)} style={{
                padding:'12px',
                backgroundColor:'grey',
                color:'white',
                border:'none',
                borderRadius:'5px',
                cursor:'pointer'}}>Reset</button>
        </>
    );
}

export default Counter