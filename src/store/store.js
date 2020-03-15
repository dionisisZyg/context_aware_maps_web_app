import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from '../reducers'
import {createLogger} from "redux-logger";
import {createCycleMiddleware} from "redux-cycles";
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import main from '../cycles/cycles';
import {migrations} from "./migrations";

export const history = createHistory();
const middleware = routerMiddleware(history);
let allMiddlewares;

const cycleMiddleware = createCycleMiddleware();

const { makeActionDriver, makeStateDriver } = cycleMiddleware;

const logger = createLogger({});

if(process.env.NODE_ENV !== 'production') {

    allMiddlewares = applyMiddleware(logger, middleware, cycleMiddleware);

}else{
    allMiddlewares = applyMiddleware(middleware, cycleMiddleware);
}

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    allMiddlewares
);

run(main, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    HTTP: makeHTTPDriver()
});

export default store;