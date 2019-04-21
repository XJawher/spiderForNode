// routerPath

const index = {
    Root: '/',

    Main: '/main',

    Dashboard: '/dashboard',

    DailyGrowth: '/dailygrowth',

    Xian: '/xian',
};

export default index;

export const pathToMenu = {
    Dashboard: [index.Dashboard],
    DailyGrowth: [index.DailyGrowth],
    Xian: [index.Xian],
};