import { NextFunction, Request, Response, Router } from "express";
import { SensorEventModel } from "../db/models/sensorEventsModel";
import { SensorModel } from "../db/models/sensorModel";


export const deleteSensor = Router();

deleteSensor.delete("/deleteSensor", async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const id = req.body.id

    SensorModel.findByIdAndDelete(id).catch(err => res.sendStatus(500).end)
    SensorEventModel.deleteMany({ sensorid: id }).catch(e => res.sendStatus(500).end)

    res.sendStatus(200)

})