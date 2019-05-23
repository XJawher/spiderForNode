import State from '../state';
import { generalActionTypes } from '../actions/generalAction';

let generalAction = (state = State.main, action) => {
    let { xian } = action;
    switch (action.type) {

        case generalActionTypes.SET_XIAN_DATA:
            return Object.assign({}, state, { xian });

        default:
            return state;
    }
};
export default generalAction;