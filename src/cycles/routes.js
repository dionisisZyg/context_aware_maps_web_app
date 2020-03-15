import * as ActionTypes from '../actions';
import xs from 'xstream';
import {BASE_URL} from "../utils/constants";
import * as actions from "../actions/routes";
import sampleCombine from 'xstream/extra/sampleCombine';
import delay from "xstream/extra/delay";

export function requestUploadedRoutes(sources) {

    const state$ = sources.STATE;
    const token$ = state$.map(state => state.user.loggedInUser.id);

    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.FETCH_UPLOADED_ROUTES)
        .compose(delay())
        .compose(sampleCombine(token$))
        .map( ([action, token]) => ({
            url: BASE_URL + 'api/routes' + (action.payload.filter ?
                `?filter=${JSON.stringify(action.payload.filter)}` : "" ),
            category: 'requestUploadedRoutes',
            method: 'GET',
            headers: {Authorization: token},
        }));

    let httpResponse$ = sources.HTTP
        .select('requestUploadedRoutes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.fetchUploadedRoutesSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestUploadedRoutesFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestUploadedRoutes')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.fetchUploadedRoutesFailed(response));

    return {
        ACTION: httpResponse$
    }
}