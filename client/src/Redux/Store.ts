import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Reducers';
type SensorEventType = {
    sensorid: String,
    createat: Date,
    value: number
}

type SensorType = {
    id: string
    name: string,
    location: number[],
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