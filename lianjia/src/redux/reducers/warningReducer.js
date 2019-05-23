import State from '../state';
import { warningActionTypes } from '../actions/warningAction';

let warningAction = (state = State.unRead, action) => {
    let { unRead } = action;
    switch (action.type) {

        case warningActionTypes.UN_READ:
            return Object.assign({}, state, { unRead });

        default:
            return state;
    }
};
export default warningAction;