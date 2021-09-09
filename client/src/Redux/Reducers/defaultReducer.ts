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

    const type = action.type
    const payload = action.payload
    const sensors = state.sensors
    ////////SENSOR//////////////////

    if (type === GET_ALL_SENSORS) {

        return payload as StoreType
    }

    if (type === DELETE_SENSOR) {

        return { sensors: sensors.filter(e => e.id !== payload) } as StoreType
    }

    if (type === PATCH_SENSOR_NAME) {
        const { id, name } = payload
        return {
            sensors: sensors.map(e => {

                if (e.id !== id) return e
                else if (e.id === id) {
                    e.name = name
                    return e
                }

            })
        } as StoreType
    }

    if (type === PUT_SENSOR) {

        return { sensors: [] } as StoreType
    }




    ////////SENSOR EVENT//////////////////
    if (type === PUT_SENSOR_EVENT) {

        return { sensors: [] } as StoreType
    }

    if (type === DELETE_SENSOR_EVENT) {

        return { sensors: [] } as StoreType
    }


    return state
};