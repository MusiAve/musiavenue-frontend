import { apiBaseUrl, webUrl } from '../../env';

const Config = {
    APP_NAME: 'Musician Avenue',
    API_URL: `${apiBaseUrl}/api`,
    APP_URL: `${apiBaseUrl}`,
    APP_TYPE: process.env.APP_TYPE,
    FRONT_URL: webUrl,
};

export default Config;