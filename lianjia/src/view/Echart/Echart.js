import React, { useState } from 'react';

export default function Echart() {
    const [count] = useState(0);
    return (
        <div className="xc-body-main-wrapper">
            this is Echart components {count}
        </div>
    );
}
