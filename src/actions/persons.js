import {actionCreator} from "../utils/functions";
import * as actionTypes from "../actions";

export const fetchLeaderBoard = actionCreator(actionTypes.FETCH_LEADERBOARD);
export const fetchLeaderBoardSuccess = actionCreator(actionTypes.FETCH_LEADERBOARD_SUCCESS);
export const fetchLeaderBoardFailed = actionCreator(actionTypes.FETCH_LEADERBOARD_FAILED);
