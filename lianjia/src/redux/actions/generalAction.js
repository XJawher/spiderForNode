export let generalActionTypes = {
    SET_XIAN_DATA: 'SET_XIAN_DATA',
};

export default {

    setXianData: xian => ({
        type: generalActionTypes.SET_XIAN_DATA,
        xian
    }),

};