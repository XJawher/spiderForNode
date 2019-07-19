import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import routerPath from '../routerPath';

// bar
import TopBar from '../Bar/TopBar';
import SideBar from '../Bar/SideBar';

// dashboard
import Dashboard from '../Dashboard/Dashboard';

// Daily growth
import DailyGrowth from '../DailyGrowth/DailyGrowth';

// Daily growth
import Xian from '../City/Xian/XianDash';

import Shanghai from '../City/Shanghai/Shanghai';

import CommonCities from '../CommonCities/CommonCities';



export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {Main} = routerPath;
        return (
            <div className="xc-body-wrapper">
                <SideBar history={this.props.history} />
                <div className="xc-main-wrapper">
                    <TopBar />
                    <main className='xc-content-wrapper'>
                        <Switch>
                            <Route path={`${Main}${routerPath.Dashboard}`} component={Dashboard} />

                            <Route path={`${Main}${routerPath.DailyGrowth}`} component={DailyGrowth} />

                            <Route path={`${Main}${routerPath.Xian}`} component={Xian} />

                            <Route path={`${Main}${routerPath.Shanghai}`} component={Shanghai} />

                            <Route path={`${Main}${routerPath.CommonCities}`} component={CommonCities} />

                            <Redirect from={routerPath.Root} to={`${Main}${routerPath.Dashboard}`} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}