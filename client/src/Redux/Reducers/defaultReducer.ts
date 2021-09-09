import {
    GET_ALL_SENSORS,
    PUT_SENSOR,
    PATCH_SENSOR_NAME,
    DELETE_SENSOR,
    PUT_SENSOR_EVENT,
    DELETE_SENSOR_EVENT,
} from '../Actions/ActionsNames'

import { actionType } from '../Actions/Actions'
import { StoreType } from '../Store';


const initialState: StoreType = {
    sensors: []
};
export const defaultReducer = (state: StoreType = initialState, action: actionType) => {

    return state
};