export const loadState = () => {
    try {
        let state = localStorage.getItem('state');
        if (state == null) {
            return {};
        }

        return JSON.parse(state)
    } catch (err) {
        return {}
    }
}

export const saveState = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch (err) {
        //
    }
}