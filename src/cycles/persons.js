import * as ActionTypes from '../actions';
import xs from 'xstream';
import {BASE_URL} from "../utils/constants";
import * as actions from "../actions/persons";
import sampleCombine from 'xstream/extra/sampleCombine';

export function requestLeaderboard(sources) {
    const request$ = sources.ACTION
        .filter(action => action.type === ActionTypes.FETCH_LEADERBOARD)
        .map(action => ({
            url: BASE_URL + 'api/people/leaderboard',
            category: 'requestLeaderboard',
            method: 'GET'
        }));

    let httpResponse$ = sources.HTTP
        .select('requestLeaderboard')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status === 200)
        .map(response => actions.fetchLeaderBoardSuccess(response));

    return {
        ACTION: httpResponse$,
        HTTP: request$
    }
}

export function requestLeaderboardFailed(sources) {
    let httpResponse$ = sources.HTTP
        .select('requestLeaderboard')
        .map((response) =>
            response.replaceError((err) => xs.of(err))
        )
        .flatten()
        .filter(response => response.status !== 200)
        .map(response => actions.fetchLeaderBoardFailed(response));

    return {
        ACTION: httpResponse$
    }
}