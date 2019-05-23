import React, { useState } from 'react';
import Xian from './Xian';
import Number from './hook';
import Blank from '../../../components/Blank';
function XianDash() {
    const [count] = useState(0);
    return (
        <div className="xc-body-main-wrapper">
            <Number count={count} />
            <Blank />
            <Xian />
        </div>
    );
}

export default XianDash;