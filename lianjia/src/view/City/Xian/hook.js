import React, { useState, useEffect } from 'react';
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
        </div>
    );
}

function Number() {
    const [count,] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    });

    console.log(`this is  from Number components`);

    return (
        <div>
            <p>You clicked {count} times</p>
            this is  from Number components
        </div>
    );
}

export { Counter, Number };