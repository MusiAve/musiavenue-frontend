export const LocalStroage = process.env.NODE_ENV === 'development' ? sessionStorage : localStorage;

export default class StateStroage {
    static LoadState = () => {
        try {
            const localState = LocalStroage.getItem('state') || {};

            if (localState === null) {
                return this.initializeState();
            }

            return JSON.parse(localState);

        } catch (err) {
            return this.initializeState();
        }
    };

    static SaveState = (state) => {
        try {
            LocalStroage.clear();
            const localState = JSON.stringify(state);
            LocalStroage.setItem('state', localState);
        } catch (err) {
            return err;
        }
    };

    static initializeState = () => {
        return {};
    }

    static resetState = () => {
        LocalStroage.clear();
    }
}
