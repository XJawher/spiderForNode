import React, {Component} from 'react';
import {Menu, Popover, Icon} from 'antd';
import routerPath from '../routerPath';

export default class SideBar extends Component {
    constructor (props){
        super(props);
        this.state = {
            dashboard: false,
            selectedMenu: [],
        };
        this.changeActivePageAndMenu = this.changeActivePageAndMenu.bind(this);
    }
    forwardPage ({key}){
        let {pathname: currentPath} = this.props.history.location;
        let selectedMenu = [];
        let targetPath = routerPath.Main + key;
        if (currentPath !== targetPath) {
            selectedMenu.push(key);
            this.setState({selectedMenu});
            // this.props.changeActivePage(this.menuKeyCorrect(key));
            this.props.history.push(targetPath);
        }
    }

    componentWillMount (){
        this.changeActivePageAndMenu();
    }

    changeActivePageAndMenu (){
        let {Main} = routerPath;
        let selectedMenu = [];
        let {pathname} = this.props.history.location;
        let key = pathname.replace(Main, '');
        selectedMenu.push(key);
        this.setState({selectedMenu});
    }

    menuIconPopoverVisibleChange (type){
        return value => {
            this.setState({[type]: value});
        };
    }

    getPopoverIcon (icon, type, content){
        let popoverConf = {
            trigger: 'hover',
            placement: 'right',
            content,
            visible: this.state[type],
            onVisibleChange: this.menuIconPopoverVisibleChange(type)
        };
        return (
            <React.Fragment>
                <Popover {...popoverConf}>
                    <Icon type={icon} theme="filled" />
                </Popover>
                {content}
            </React.Fragment>
        );
    }

    render (){
        return (
            <aside className={`xc-sidebar-wrapper un-expand  `}>
                <div className="xc-sidebar-logo-wrapper un-expand ">
                    xc
                </div>
                <Menu
                    className="xc-sidebar-menu-list"
                    inlineIndent={16}
                    mode="inline"
                    defaultSelectedKeys={[`${routerPath.Dashboard}`]}
                    theme="dark"
                    selectedKeys={this.state.selectedMenu}
                    onClick={this.forwardPage.bind(this)}
                >
                    <Menu.Item key={routerPath.Dashboard}>
                        {this.getPopoverIcon('dashboard', 'dashboard', '仪表盘')}
                    </Menu.Item>
                    <Menu.Item key={routerPath.DailyGrowth}>
                        {this.getPopoverIcon('bank', 'rase', '日增长率')}
                    </Menu.Item>
                    <Menu.Item key={routerPath.Xian}>
                        {this.getPopoverIcon('bulb', 'xian', '西安')}
                    </Menu.Item>
                    <Menu.Item key={routerPath.Shanghai}>
                        {this.getPopoverIcon('api', 'shanghai', '上海')}
                    </Menu.Item>
                    <Menu.Item key={routerPath.Echart}>
                        {this.getPopoverIcon('alert', 'Echart', 'Echart')}
                    </Menu.Item>
                </Menu>
            </aside>
        );
    }
}