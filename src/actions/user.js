import {actionCreator} from "../utils/functions";
import {
    CHANGE_USER_STORE_SETTINGS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILED,
    LOGOUT_SUCCESS
} from "./index";

export const login = actionCreator(LOGIN);

export const loginSuccess = actionCreator(LOGIN_SUCCESS);

export const loginFailure = actionCreator(LOGIN_FAILURE);

export const logout = actionCreator(LOGOUT);

export const logoutSuccess = actionCreator(LOGOUT_SUCCESS);

export const logoutFailed = actionCreator(LOGOUT_FAILED);

export const changeUserStoreSettings = actionCreator(CHANGE_USER_STORE_SETTINGS);