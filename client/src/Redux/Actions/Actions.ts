import { Dispatch } from 'redux';
import axios from 'axios';
import {
    GET_ALL_SENSORS,
    PUT_SENSOR,
    PATCH_SENSOR_NAME,
    DELETE_SENSOR,
    PUT_SENSOR_EVENT,
    DELETE_SENSOR_EVENT,
} from './ActionsNames'

export type actionType = {
    type: typeof GET_ALL_SENSORS | typeof PUT_SENSOR | typeof PATCH_SENSOR_NAME | typeof DELETE_SENSOR | typeof PUT_SENSOR_EVENT | typeof DELETE_SENSOR_EVENT
    ,
    payload: any
}




export function getAllSensors() {
    return async function (dispatch: Dispatch) {
        const response = await axios.get("http://localhost:3001/sensor/getAllSensors");
        dispatch({
            type: GET_ALL_SENSORS,
            payload: response.data
        })
    }
}

export function putSensor(payload: any): actionType {

    return {
        type: "PUT_SENSOR",
        payload
    }
}
export function patchSensorName(payload: any): actionType {
    return {
        type: "PATCH_SENSOR_NAME",
        payload
    }
}
export function deleteSensor(payload: any): actionType {
    return {
        type: "DELETE_SENSOR",
        payload
    }
}
export function putSensorEvent(payload: any): actionType {
    return {
        type: "PUT_SENSOR_EVENT",
        payload
    }
}
export function deleteSensorEvent(payload: any): actionType {
    return {
        type: "DELETE_SENSOR_EVENT",
        payload
    }
}








