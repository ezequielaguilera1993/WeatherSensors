import { NextFunction, Request, Response, Router } from "express";
import { createSensorEventDocument, SensorEventModel } from "../db/models/sensorEventsModel";
import { createSensorDocument, SensorModel } from "../db/models/sensorModel";

export const listOfSensors = Router();

listOfSensors.get("/listOfSensors", async (req: Request, res: Response) => {

    // await SensorModel.deleteMany().catch(err => console.log(err))
    // await SensorEventModel.deleteMany().catch(err => console.log(err))

    // await createSensorDocument({//Creo un nuevo documento
    //     name: "Londres",
    //     location: "123123123/123123321",
    //     active: true,
    //     minval: 10,
    //     maxval: 60,
    // }).save()

    const user = await SensorModel.findById("6138eafb7b8a2f776b96dad7").catch((err) => console.log(err))

    if (user) {
        // await createSensorEventDocument({
        //     sensorid: user._id,
        //     createat: new Date(),
        //     value: 100
        // }).save()

        // await createSensorEventDocument({
        //     sensorid: user._id,
        //     createat: new Date(),
        //     value: 100
        // }).save()

        // await createSensorEventDocument({
        //     sensorid: user._id,
        //     createat: new Date(),
        //     value: 100
        // }).save()

        res.send(await SensorEventModel.find({ sensorid: user._id }))
    }
    else res.sendStatus(500)

})

//https://www.youtube.com/watch?v=vhUw7GkRHdk&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=9 28:00 un poco antes, para editar lo que te devuelte y scarle el _v y transforar el _id

