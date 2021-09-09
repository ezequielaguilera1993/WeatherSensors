import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers/index';
import thunk from 'redux-thunk';

type SensorEventType = {
    sensorid: String,
    createat: Date,
    value: number
}

type SensorType = {
    name: string,
    location: string,
    active: boolean,
    minval: number,
    maxval: number,
    sensorEvents: SensorEventType[]
}

export type StoreType = {
    sensors: SensorType[]
}


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;