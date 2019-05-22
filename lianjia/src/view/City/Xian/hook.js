import React, { useState, useEffect } from 'react';


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

export { Number };