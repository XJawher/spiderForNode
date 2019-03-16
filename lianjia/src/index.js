import React from 'react';
import ReactDOM from 'react-dom';
import './view/style/index.css';
import App from './view/App/App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
(async () => {
    // create app
    /**
     * @param {*} Component
     */
    const render = Component => {
        ReactDOM.render(
            <Component />,
            document.getElementById('root')
        );
    };

    render(App);
})();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
