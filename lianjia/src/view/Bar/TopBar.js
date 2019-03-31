import React, { Component } from 'react';
import { Affix } from 'antd';
export default class TopBar extends Component {

    render() {
        return (
            <Affix /*style={{minWidth: 1168}}*/>
                <header className={`xc-top-bar-wrapper`}>
                    <section className="xc-copy-right-wrapper">
                        © 2019
                    </section>
                    <section className="xc-top-info-wrapper">

                        <span className="xc-login-user-wrapper">
                            hello
                            <span
                                className="xc-login-user"
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