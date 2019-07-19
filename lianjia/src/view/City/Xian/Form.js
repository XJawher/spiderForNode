// Form.js
import React from 'react';
import {useMappedState} from "redux-react-hook";
import http from '../../../http/http';

const mapState = (state) => {
    return ({
        xian: state.main.xian,
        community: state.main.community,
    });
};

export default function FormComponent(props) {

    const {xian} = useMappedState(mapState);
    if (xian.length === 1110) {
        /**
         *
            "2019-4-21":
            "2019-4-28":
            "2019-5-5":
            "2019-5-13":
            "2019-5-19":
            "2019-5-26":
            "2019-5-30":[]
            const date = ["2019-4-21","2019-4-28","2019-5-5",
            "2019-5-13","2019-5-26","2019-5-30","2019-6-6",
            "2019-6-14","2019-6-20","2019-6-30","2019-7-4",
            "2019-7-7","2019-7-13","2019-7-18",
        ]
         */
        const date = ["2019-7-18"];
        date.forEach(item => http.getCityByCondition('', item));
    }

    return (
        <div>
            this is form page
        </div>

    );
}
