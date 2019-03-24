import React, { Component } from 'react';
import { Affix } from 'antd';
export default class TopBar extends Component {

    render() {
        return (
            <Affix /*style={{minWidth: 1168}}*/>
                <header className={`fs-top-bar-wrapper`}>
                    <section className="fs-copy-right-wrapper">
                        © 2019
                    </section>
                    <section className="fs-top-info-wrapper">

                        <span className="fs-login-user-wrapper">
                            hello
                            <span
                                className="fs-login-user"
                            >
                                {` lipc`}
                            </span>
                        </span>
                    </section>
                </header>
            </Affix>
        );
    }
}