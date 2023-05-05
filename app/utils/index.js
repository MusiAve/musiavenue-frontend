import { APP_URL } from "configs";
import { Toast } from "helpers";
import { LocalStroage } from "redux/storage";

export default class Response {
    constructor(params = {}) {
        Object.assign(this, params);
    }

    getStatus() {
        return this.status;
    }

    isSuccess() {
        return this.success;
    }

    getData() {
        return this.data;
    }
}

export const compareDates = (dateOne, dateTwo = Date.now()) => {
    const date1 = new Date(dateTwo).getTime();
    const date2 = new Date(dateOne).getTime();
    if (date1 < date2) {
        return "LESSER";
    } else if (date1 > date2) {
        return 'GREATER';
    } else if (date1 === date2) {
        return 'EQUAL';
    }
};

export const checkIsAuth = () => {
    const localState = LocalStroage.getItem('state') || {};
    const parsedData = JSON.parse(localState);
    const { login: { lastLoggedIn, isAuthenticated } } = parsedData;
    const lastLogin = new Date(lastLoggedIn).getTime();
    if (compareDates(lastLogin, Date.now()) === 'GREATER') {
        if (!isAuthenticated) {
            return false;
        } else if (isAuthenticated) {
            return true;
        }
    }
};

export const isSessionExpired = () => {
    const localState = LocalStroage.getItem('state') || {};
    const parsedData = JSON.parse(localState);
    const { login: { lastLoggedIn, user } } = parsedData;
    const lastLogin = new Date(lastLoggedIn).getTime();
    const timeNow = Date.now();
    if (compareDates(lastLogin, Date.now()) === 'GREATER') {
        if (user && ((new Date(timeNow) - lastLogin) > 1000 * 60 * 60 * 168)) {
            return true;
        } else {
            return false;
        }
    }
};

export const ThrowErrorMessage = (error = {}, type = '') => {
    const data = [];
    let err;
    if (!error.message) {
        for (const key in error) {
            if (Object.hasOwnProperty.call(error, key)) {
                err = { [key]: error[key][0] };
                data.push(err);
            }
        }
        if (type === 'show' && data.length) {
            Toast.error(Object.values(data[0])[0]);
        } else {
            return data;
        }
    }
};

export function getData(response) {
    if (!response) {
        return;
    }
    return response.data;
}

export function isSuccess(response) {
    if (!response) {
        return;
    }
    return response.success;
}

export function GetObjectValue(targetObj, sourceObj) {
    const target = targetObj;
    const source = sourceObj;
    if (Object.keys(target).length > 1 && Object.keys(source).length > 1) {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}

export const GetImage = (path) => {
    if (!path) {
        return '';
    }
    return `${APP_URL}/storage/${path}`;
}

export function stringAvatar(name) {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}