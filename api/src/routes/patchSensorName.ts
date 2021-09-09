import { NextFunction, Request, Response, Router } from "express";
import { SensorEventModel } from "../db/models/sensorEventsModel";
import { SensorModel } from "../db/models/sensorModel";


export const patchSensorName = Router();

patchSensorName.patch("/patchSensorName", async (req: Request, res: Response, next: NextFunction) => {
    const { id, name } = req.body.data
    console.log(id, name);

    SensorModel.findByIdAndUpdate(id, { $set: { name: name } })
        .catch(err => res.sendStatus(500).end)

    res.sendStatus(200)
})