// routerPath

const index = {
    Root: '/',

    Main: '/main',

    Dashboard: '/dashboard',

    DailyGrowth: '/dailygrowth',

    Xian: '/xian',

    Shanghai: '/Shanghai',

    Echart: '/Echart',
};

export default index;

export const pathToMenu = {
    Dashboard: [index.Dashboard],
    DailyGrowth: [index.DailyGrowth],
    Xian: [index.Xian],
    Shanghai: [index.Shanghai],
    Echart: [index.Echart],
};