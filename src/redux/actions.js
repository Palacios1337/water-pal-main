export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const GET_USER_PASSWORD = 'GET_USER_PASSWORD';

export const setEmail = Email => ({

        type: SET_USER_EMAIL,
        payload: {Email}

});

export const setPassword = Password => ({

        type: SET_USER_PASSWORD,
        payload: {Password}

});

export const getEmail = Email => ({
        type: GET_USER_EMAIL,
        payload: {Email}
});

export const getPassword = Password => ({

        type: GET_USER_PASSWORD,
        payload: {Password},

});