export let generalActionTypes = {
    SET_VERSION: 'SET_VERSION',
    SET_USER: 'SET_USER',
    INIT_DATA_LI: 'INIT_DATA_LI',
    CHANGE_ACTIVE_MENU: 'CHANGE_ACTIVE_MENU',
    CHANGE_ACTIVE_PAGE: 'CHANGE_ACTIVE_PAGE',
    CHANGE_MENU_EXPAND: 'CHANGE_MENU_EXPAND',
    SET_KNOWN_PROBLEMS: 'SET_KNOWN_PROBLEMS',
    FSID_STATUS: 'FSID_STATUS',
};

export default {
    setVersion: version => ({
        type: generalActionTypes.SET_VERSION,
        version
    }),

    setUser: user => ({
        type: generalActionTypes.SET_USER,
        user
    }),

    initDataLicense: initDataLicense => ({
        type: generalActionTypes.INIT_DATA_LI,
        initDataLicense
    }),

    fsIDStatus: fsIDStatus => ({
        type: generalActionTypes.FSID_STATUS,
        fsIDStatus
    }),

    changeActiveMenu: key => ({
        type: generalActionTypes.CHANGE_ACTIVE_MENU,
        key
    }),

    changeActivePage: key => ({
        type: generalActionTypes.CHANGE_ACTIVE_PAGE,
        key
    }),

    changeMenuExpand: menuExpand => ({
        type: generalActionTypes.CHANGE_MENU_EXPAND,
        menuExpand
    }),

    setKnownProblems: knownProblems => ({
        type: generalActionTypes.SET_KNOWN_PROBLEMS,
        knownProblems
    }),
};