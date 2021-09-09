import { NextFunction, Request, Response, Router } from "express";
import { SensorEventModel } from "../db/models/sensorEventsModel";
import { SensorModel } from "../db/models/sensorModel";
type SensorEventType = {
    sensorid: String,
    createat: Date,
    value: number
}

type SensorType = {
    id: string,
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

export const getAllSensors = Router();

getAllSensors.get("/getAllSensors", async (req: Request, res: Response, next: NextFunction) => {

    const sensorsBrut = await SensorModel.find()
    const sensorEventBrut = await SensorEventModel.find()

    const sensorEvents: SensorEventType[] = sensorEventBrut.map(e => ({
        createat: e.createat,
        value: e.value,
        sensorid: e.sensorid.toString(),
    }))
    // console.log("sensorEvents", sensorEvents);
    // console.log("sensorsBrut", sensorsBrut[0]._id.toString());

    const populateSensors: SensorType[] = sensorsBrut.map(eSensor => ({
        id: eSensor._id,
        name: eSensor.name,
        location: eSensor.location.coordinates,
        active: eSensor.active,
        minval: eSensor.minval,
        maxval: eSensor.maxval,
        sensorEvents: sensorEvents.filter(eEvent => eEvent.sensorid === eSensor._id.toString()),
    }))

    const storeWay: StoreType = {
        sensors: populateSensors
    }

    res.json(storeWay)

})