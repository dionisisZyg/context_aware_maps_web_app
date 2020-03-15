import {FETCH_UPLOADED_ROUTES, FETCH_UPLOADED_ROUTES_FAILED, FETCH_UPLOADED_ROUTES_SUCCESS} from "../actions/index";

const defaultState = {
    fetchingRoutes: false,
    uploadedRoutes: []
};

export default (state = defaultState, action) => {
    switch (action.type){
        case FETCH_UPLOADED_ROUTES:
            return {
                ...state,
                fetchingRoutes: true
            };
        case FETCH_UPLOADED_ROUTES_SUCCESS:
            return {
                ...state,
                fetchingRoutes: false,
                uploadedRoutes: action.payload.body
            };
        case FETCH_UPLOADED_ROUTES_FAILED:
            return {
                ...state,
                fetchingRoutes: false
            };
        default:
            return state;
    }
}