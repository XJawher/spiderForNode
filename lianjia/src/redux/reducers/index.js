import {combineReducers} from 'redux';
import State from '../state';
import languageReducer from './languageReducer';
import generalReduce from './generalReduce';

export default combineReducers({
    language: (language = State.language, action) => {
        return languageReducer(language, action);
    },

    community: (community = State.main.community, action) => {
        return generalReduce(community, action);
    },

    weekIncrease: (weekIncrease = State.main.weekIncrease, action) => {
        return generalReduce(weekIncrease, action);
    },

    main: (xian = State.main, action) => {
        return generalReduce(xian, action);
    },
});