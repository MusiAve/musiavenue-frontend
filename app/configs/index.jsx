import Config from './Config';

const { ADMIN_URL, API_URL, APP_NAME, APP_TYPE, APP_URL, COMPANY_URL } = Config;

const APP_DESCRIPTION = (pageName) => `${APP_NAME} - Project Management Tool - ${pageName} `;

export { ADMIN_URL, API_URL, APP_DESCRIPTION, APP_NAME, APP_TYPE, APP_URL, COMPANY_URL };
