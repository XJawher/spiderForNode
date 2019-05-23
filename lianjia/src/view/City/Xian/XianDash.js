import React, { useState } from 'react';
import Xian from './Xian';
import Number from './hook';
function XianDash() {
    const [count] = useState(0);
    return (
        <div className="xc-body-main-wrapper">
            <Xian />
            <Number count={count} />
        </div>
    );
}

export default XianDash;