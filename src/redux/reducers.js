import { SET_USER_EMAIL,SET_USER_PASSWORD,GET_USER_EMAIL,GET_USER_PASSWORD } from "./actions";

const initialState = {
    Email: '',
    Password: '',
}

const userReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_EMAIL:
            return{...state, Email: action.payload};
        case SET_USER_PASSWORD:
            return{...state, Password: action.payload};
        case GET_USER_EMAIL:
            return{...state, Email: state.Email};
        case GET_USER_PASSWORD:
            return{...state, Password: state.Password};
        default:{
            return state;
        };
    }
}

export default userReducer;