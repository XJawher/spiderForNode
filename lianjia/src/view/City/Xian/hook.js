import React, { useEffect } from 'react';
import { useMappedState } from "redux-react-hook";
import http from '../../../http/http';
const mapState = (state) => {
    return ({
        xian: state.main.xian,
    });
};


export default function Number(props) {
    const { xian } = useMappedState(mapState);
    if (xian.length === 0) {
        http.getCityByCondition();
    }
    useEffect(() => {
        console.log(xian);
    }, [xian]);

    console.log(`Number components has run  times`);

    return (
        <div>
            Number components has run times
        </div>
    );
}
