export let warningActionTypes = {
    UN_READ: 'UN_READ',
};

export default {
    setUnRead: unRead => ({
        type: warningActionTypes.UN_READ,
        unRead
    })
};