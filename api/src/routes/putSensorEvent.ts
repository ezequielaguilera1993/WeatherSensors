import { NextFunction, Request, Response, Router } from "express";
import { createSensorEventDocument, SensorEventModel } from "../db/models/sensorEventsModel";
import { createSensorDocument, SensorModel } from "../db/models/sensorModel";
import { SensorType, StoreType } from "./getAllSensors";


export const putSensorEvent = Router();

putSensorEvent.put("/putSensorEvent", async (req: Request, res: Response, next: NextFunction) => {
    let { id, value } = req.body.data



    createSensorEventDocument({
        createat: new Date(),
        sensorid: id,
        value,
    }).save().then(rs => res.json({ createat: rs.createat, sensorid: rs.sensorid, value: rs.value })).catch(err => res.sendStatus(500).json({ err }))

})