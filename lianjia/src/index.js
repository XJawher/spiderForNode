import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';
import App from './view/App/App';
import * as serviceWorker from './serviceWorker';
import {StoreContext} from 'redux-react-hook';
import store from './redux/index';
// ReactDOM.render(<App />, document.getElementById('root'));
(async () => {
    /**
     * @param {*} Component
     */
    const render = Component => {
        ReactDOM.render(
            <StoreContext.Provider value={store}>
                <Component />
            </StoreContext.Provider>,
            document.getElementById('root')
        );
    };

    render(App);
})();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
