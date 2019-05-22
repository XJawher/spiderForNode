import React, { useState, useEffect } from 'react';
import Xian from './Xian';

function XianDash() {
    const [count,] = useState(0);

    useEffect(() => {
        console.log(`You clicked ${count} times`);
    });

    return (
        <div className="xc-body-main-wrapper">
            <Xian />
        </div>
    );
}

export default XianDash;