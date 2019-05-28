export let generalActionTypes = {
    SET_XIAN_DATA: 'SET_XIAN_DATA',
    SET_COMMUNITY: 'SET_COMMUNITY',
    WEEK_INCREASE: 'WEEK_INCREASE',
};

export default {

    setXianData: xian => ({
        type: generalActionTypes.SET_XIAN_DATA,
        xian
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