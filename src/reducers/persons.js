import * as actionTypes from "../actions";

const defaultState = {
    persons: [],
    fetchingLeaderboard: false
};

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.FETCH_LEADERBOARD:
            return {
                ...state,
                fetchingLeaderboard: true
            };
        case actionTypes.FETCH_LEADERBOARD_SUCCESS:
            return {
                ...state,
                fetchingLeaderboard: false,
                persons: action.payload.body
            };
        case actionTypes.FETCH_LEADERBOARD_FAILED:
            return {
                ...state,
                fetchingLeaderboard: false
            };
        case actionTypes.LOGOUT:
            return {
                ...defaultState,

            };
        default:
            return state;
    }
}