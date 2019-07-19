// routerPath

const index = {
    Root: '/',

    Main: '/main',

    Dashboard: '/dashboard',

    DailyGrowth: '/daily-growth',

    Xian: '/xian',

    Shanghai: '/shang-hai',

    Echart: '/echart',

    CommonCities: '/common-cities', // this page is for diffrent city data,you can input diff city,and get the city's data
};

export default index;

export const pathToMenu = {
    Dashboard: [index.Dashboard],
    DailyGrowth: [index.DailyGrowth],
    Xian: [index.Xian],
    Shanghai: [index.Shanghai],
    Echart: [index.Echart],
    CommonCities: [index.CommonCities],
};