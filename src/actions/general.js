import * as ActionTypes from './index';

export function openDrawer(payload) {
    return {
        type: ActionTypes.OPEN_DRAWER,
        payload
    }
}

export function closeDrawer(payload) {
    return {
        type: ActionTypes.CLOSE_DRAWER,
        payload
    }
}