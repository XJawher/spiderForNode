import { combineReducers } from 'redux';
import State from '../state';
import languageReducer from './languageReducer';
import warningReducer from './warningReducer';

export default combineReducers({
    language: (language = State.language, action) => {
        return languageReducer(language, action);
    },
    unRead: (unRead = State.unRead, action) => {
        return warningReducer(unRead, action);
    }
});