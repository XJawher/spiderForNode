export let generalActionTypes = {
    SET_XIAN_DATA: 'SET_XIAN_DATA',
    SET_SHANGHAI_DATA: 'SET_SHANGHAI_DATA',
    SET_SHENZHEN_DATA: 'SET_SHENZHEN_DATA',
    SET_COMMUNITY: 'SET_COMMUNITY',
    WEEK_INCREASE: 'WEEK_INCREASE',
};

export default {

    xian: xian => ({
        type: generalActionTypes.SET_XIAN_DATA,
        xian
    }),
    shanghai: shanghai => ({
        type: generalActionTypes.SET_SHANGHAI_DATA,
        shanghai
    }),
    shenzhen: shenzhen => ({
        type: generalActionTypes.SET_SHENZHEN_DATA,
        shenzhen
    }),
    setCommunity: community => ({
        type: generalActionTypes.SET_COMMUNITY,
        community
    }),
    setWeekIncrease: weekIncrease => ({
        type: generalActionTypes.WEEK_INCREASE,
        weekIncrease
    }),

};