import { Http } from 'Http';

export default class BaseService {
    Http = Http;

    static cancelToken;

    static source;

    static initCancelToken() {
        this.cancelToken = Http.CancelToken;
        this.source = this.cancelToken.source();
    }

    static cancelRequestIfPending() {
        this.source.cancel();
    }
}
