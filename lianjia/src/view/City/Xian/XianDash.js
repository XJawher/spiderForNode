import React, {useState} from 'react';
import Xian from './Xian';
import FormComponent from './Form';
import Histogram from './Histogram';
import Blank from '../../../components/Blank';
function XianDash (){
    const [count] = useState(0);
    return (
        <div className="xc-body-main-wrapper">
            <FormComponent />
            <Histogram count={count} />
            <Blank />
            <Xian />
        </div>
    );
}

export default XianDash;