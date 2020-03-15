import {
    CHANGE_USER_STORE_SETTINGS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILED,
    LOGOUT_SUCCESS
} from "../actions/index";

const defaultState = {
    isLoggedIn: false,
    loggingIn: false,
    loggedInUser: {},
    logInResponse: null
};

export default (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_USER_STORE_SETTINGS:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };
        case LOGOUT:
            return {
                ...state,

            };
        case LOGOUT_SUCCESS:
            return {
                ...defaultState,
            };
        case LOGOUT_FAILED:
            return {
                ...state
            };
        case LOGIN:
            return {
                ...state,
                loggingIn: true,
                logInResponse: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedInUser: action.payload.body
            };
        case LOGIN_FAILURE:
            let logInResponse = "";
            try{
                logInResponse = action.payload.response.body.error.message;
            } catch (e){
                logInResponse = "Failed"
            }
            return {
                ...state,
                loggingIn: false,
                logInResponse: logInResponse
            };
        default:
            return state;
    }
}