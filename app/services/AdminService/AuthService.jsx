import Response from 'utils';
import BaseService from '../Base.Service';
import { Http } from 'Http';

export default class AuthService extends BaseService {
    static login(params = {}) {
        return new Promise((resolve, reject) => {
            Http.post('/login', params)
                .then((res) => {
                    if (res.data.status === 200) {
                        const data = new Response(res.data);
                        return resolve(data);
                    }
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }
}
