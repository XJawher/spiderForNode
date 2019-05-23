import React, { useState, useEffect } from 'react';
import { useMappedState } from "redux-react-hook";
import warningAction from "../../../redux/actions/warningAction";
import store from '../../../redux/index';

const mapState = (state) => {
    console.log(state);
    return ({
        language: state.language,
        unRead: state.unRead,
    });
};



export default function Number(props) {
    const { language, unRead } = useMappedState(mapState);
    console.log(props);
    const [count, setCount] = useState(1);
    if (unRead.unRead === 0) {
        setUnRead();
        setCount(count + 1);
    }
    function setUnRead() {
        store.dispatch(warningAction.setUnRead(30));
    }
    useEffect(() => {
        // setCount(count + 1);
        setTimeout(() => {
            console.log(language, unRead);
        }, 3000);

    }, [count, language, unRead]);

    console.log(`Number components has run ${count} times`);

    return (
        <div>
            Number components has run {count} times
        </div>
    );
}
