import { createStore, action } from 'easy-peasy';

const model = {
    userSession: {
        isLoggedIn: false,
        user: null,
        token: null,
        login: action((state,payload) => {
            state.isLoggedIn = true;
            state.user = payload.user;
            state.token = payload.token;
        }),

        logout: action((state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
        })
    },
}

const store = createStore(model);
export default store;