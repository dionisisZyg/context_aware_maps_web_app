export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const TABLE_VIEW_AMOUNTS = [10, 20, 50, 100];

export const MOBILE_TABLE_VIEW_AMOUNT = 20;

export const routeWeatherTypeEnum = {
    RAINY: {
        id: 1,
        code: 'RAINY',
        name: 'Rainy',
    },
    STORMY: {
        id: 2,
        code: 'STORMY',
        name: 'Stormy',
    },
    SUNNY: {
        id: 3,
        code: 'SUNNY',
        name: 'Sunny',
    },
    CLOUDY: {
        id: 4,
        code: 'CLOUDY',
        name: 'Cloudy',
    },
    HOT: {
        id: 5,
        code: 'HOT',
        name: 'Hot',
    },
    COLD: {
        id: 6,
        code: 'COLD',
        name: 'Cold',
    },
    DRY: {
        id: 7,
        code: 'DRY',
        name: 'Dry',
    },
    WET: {
        id: 8,
        code: 'WET',
        name: 'Wet',
    },
    WINDY: {
        id: 9,
        code: 'WINDY',
        name: 'Windy',
    },
    SNOW: {
        id: 10,
        code: 'SNOW',
        name: 'Snow',
    },
};

export const routePurpose = {
    LEISURE: {
        id: 1,
        code: 'LEISURE',
        name: 'Leisure'
    },
    WORK: {
        id: 2,
        code: 'WORK',
        name: 'Work'
    }
};

export const routeTypes = {
    CYCLIST: {
        id: 1,
        code: 'CYCLIST',
        name: 'Cyclist'
    },
    PEDESTRIAN: {
        id: 2,
        code: 'PEDESTRIAN',
        name: 'Pedestrian'
    }
};
