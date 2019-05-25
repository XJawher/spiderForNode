import React, { useState } from 'react';
import Xian from './Xian';
import FormComponent from './Form';
import Blank from '../../../components/Blank';
function XianDash() {
    const [count] = useState(0);
    return (
        <div className="xc-body-main-wrapper">
            <FormComponent count={count} />
            <Blank />
            <Xian />
        </div>
    );
}

export default XianDash;