import React, { Component } from 'react';
import { Menu, Popover, Icon } from 'antd';
import routerPath from '../routerPath';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: false,
            selectedMenu: [],
        };
        this.changeActivePageAndMenu = this.changeActivePageAndMenu.bind(this);
    }
    forwardPage({ key }) {
        let { pathname: currentPath } = this.props.history.location;
        let selectedMenu = [];
        let targetPath = routerPath.Main + key;
        if (currentPath !== targetPath) {
            selectedMenu.push(key);
            this.setState({ selectedMenu });
            // this.props.changeActivePage(this.menuKeyCorrect(key));
            this.props.history.push(targetPath);
        }
    }

    changeActivePageAndMenu() {
        let { Main } = routerPath;
        let { pathname } = this.props.history.location;
        let key = pathname.replace(Main, '');
        this.props.changeActivePage(this.menuKeyCorrect(key));
        this.getSubMenuByPath(key);
    }

    openMenu(openKeys) {
        this.props.changeActiveMenu(openKeys);
    }


    menuIconPopoverVisibleChange(type) {
        return value => {
            this.setState({ [type]: value });
        };
    }

    getPopoverIcon(icon, type, content) {
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
                    <Icon type={icon} />
                </Popover>
                {content}
            </React.Fragment>
        );
    }

    render() {
        return (
            <aside className={`fs-sidebar-wrapper expand  `}>
                <div className="fs-sidebar-logo-wrapper">
                    logo
                </div>
                <Menu
                    className="fs-sidebar-menu-list"
                    inlineIndent={16}
                    mode="inline"
                    defaultSelectedKeys={[`${routerPath.Dashboard}`]}
                    theme="dark"
                    selectedKeys={this.state.selectedMenu}
                    onClick={this.forwardPage.bind(this)}
                    onOpenChange={this.openMenu.bind(this)}
                >
                    <Menu.Item key={routerPath.Dashboard}>
                        {this.getPopoverIcon('dashboard', 'dashboard', '仪表盘')}
                    </Menu.Item>
                    <Menu.Item key={routerPath.DailyGrowth}>
                        {this.getPopoverIcon('dashboard', 'dashboard', '日增长率')}
                    </Menu.Item>
                </Menu>
            </aside>
        );
    }
}