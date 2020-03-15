import {actionCreator} from "../utils/functions";
import * as ActionTypes from "./index";

export const fetchUploadedRoutes = actionCreator(ActionTypes.FETCH_UPLOADED_ROUTES);

export const fetchUploadedRoutesSuccess = actionCreator(ActionTypes.FETCH_UPLOADED_ROUTES_SUCCESS);

export const fetchUploadedRoutesFailed = actionCreator(ActionTypes.FETCH_UPLOADED_ROUTES_FAILED);