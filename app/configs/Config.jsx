import { apiBaseUrl, webUrl } from '../../env';

const Config = {
    APP_NAME: 'Project Man',
    API_URL: `${apiBaseUrl}/api`,
    APP_URL: `${apiBaseUrl}`,
    APP_TYPE: process.env.APP_TYPE,
    ADMIN_URL: webUrl[0],
    COMPANY_URL: webUrl[1]
};

export default Config;