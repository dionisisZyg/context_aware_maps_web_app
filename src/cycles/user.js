import * as ActionTypes from '../actions';
import xs from 'xstream';
import {BASE_URL} from "../utils/constants";
import * as actions from "../actions/user";
import sampleCombine from 'xstream/extra/sampleCombine';
import { push } from 'react-router-redux'

export function redirectAfterLogout(sources) {
    const action$ = sources.ACTION
        .filter(action => action.type === ActionTypes.LOGOUT)
        .map(action => push('/'));

    return {
        ACTION: action$,
    }
}

export function requestLogout(sources) {

    const state$ = sources.STATE;
    const token$ = state$.map(state => state.user.loggedInUser.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.LOGOUT)
        .compose(sampleCombine(token$))
        .map( ([action, token]) => ({
            url: BASE_URL + 'api/people/logout',
            category: 'requestLogout',
            method: 'POST',
            headers: {Authorization: token},
        }));

    let httpResponse$ = sources.HTTP
        .select('requestLogout')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 204)
        .map(response => actions.logoutSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestLogoutFail(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestLogout')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 204)
        .map(response => actions.logoutFailed(response));

    return {
        ACTION: httpResponse$
    }
}

export function requestLogin(sources) {
    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.LOGIN)
        .map(action => ({
            url: BASE_URL + 'api/people/login?include=loggedInPerson',
            category: 'requestLogin',
            method: 'POST',
            send: action.payload.sendBody
        }));

    let httpResponse$ = sources.HTTP
        .select('requestLogin')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.loginSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestLoginFail(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestLogin')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.loginFailure(response));

    return {
        ACTION: httpResponse$
    }
}