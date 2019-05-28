import State from '../state';
import { generalActionTypes } from '../actions/generalAction';

let generalAction = (state = State.main, action) => {
    let { xian, community, weekIncrease } = action;
    switch (action.type) {

        case generalActionTypes.SET_XIAN_DATA:
            return Object.assign({}, state, { xian });

        case generalActionTypes.SET_COMMUNITY:
            return Object.assign({}, state, { community });

        case generalActionTypes.WEEK_INCREASE:
            return Object.assign({}, state, { weekIncrease });

        default:
            return state;
    }
};
export default generalAction;