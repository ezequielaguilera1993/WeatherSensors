import { NextFunction, Request, Response, Router } from "express";
import { SensorEventModel } from "../db/models/sensorEventsModel";
import { createSensorDocument, SensorModel } from "../db/models/sensorModel";
import { randomCoordinates, randomMinMaxValue } from "../db/seed";
import { SensorType, StoreType } from "./getAllSensors";


export const putSensor = Router();

putSensor.put("/putSensor", async (req: Request, res: Response, next: NextFunction) => {
    let { name, lat, long } = req.body.data
    const { randomMin, randomMax } = randomMinMaxValue()

    lat = parseInt(lat)
    long = parseInt(long)
    console.log(name, lat, long);

    await createSensorDocument({//Creo un nuevo documento
        name,
        location: {
            type: "Point",
            coordinates: [lat, long]
        },
        active: true,
        minval: randomMin,
        maxval: randomMax,

    }).save().then(r => {
        const sensorStoreWay: SensorType = {
            id: r._id,
            name: r.name,
            location: r.location.coordinates,
            active: r.active,
            minval: r.minval,
            maxval: r.maxval,
            sensorEvents: []
        }

        res.json(sensorStoreWay)
    })
        .catch(err => res.sendStatus(500).json({ err }))


})