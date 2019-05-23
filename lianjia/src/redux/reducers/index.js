import { combineReducers } from 'redux';
import State from '../state';
import languageReducer from './languageReducer';
import warningReducer from './warningReducer';
import generalReduce from './generalReduce';

export default combineReducers({
    language: (language = State.language, action) => {
        return languageReducer(language, action);
    },

    main: (xian = State.main, action) => {
        return generalReduce(xian, action);
    },

    unRead: (unRead = State.unRead, action) => {
        return warningReducer(unRead, action);
    }
});