export type actionType = {
    type: string,
    payload: any
}

import {
    GET_ALL_SENSORS,
    PUT_SENSOR,
    PATCH_SENSOR_NAME,
    DELETE_SENSOR,
    PUT_SENSOR_EVENT,
    DELETE_SENSOR_EVENT,
} from './ActionsNames'

export function GetAllSensors(payload: any): actionType {
    return {
        type: "GET_ALL_SENSORS",
        payload
    }
}
export function PutSensor(payload: any): actionType {
    return {
        type: "PUT_SENSOR",
        payload
    }
}
export function PatchSensorName(payload: any): actionType {
    return {
        type: "PATCH_SENSOR_NAME",
        payload
    }
}
export function DeleteSensor(payload: any): actionType {
    return {
        type: "DELETE_SENSOR",
        payload
    }
}
export function PutSensorEvent(payload: any): actionType {
    return {
        type: "PUT_SENSOR_EVENT",
        payload
    }
}
export function DeleteSensorEvent(payload: any): actionType {
    return {
        type: "DELETE_SENSOR_EVENT",
        payload
    }
}








