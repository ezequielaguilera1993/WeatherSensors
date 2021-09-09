import { model, Mongoose, Schema } from 'mongoose'
//sensor
export interface ISensor {
    name: string,
    location: { type: "Point", coordinates: number[] }
    active: boolean,
    minval: number,
    maxval: number,
}
const sensorScheema = new Schema<ISensor>({
    name: { type: String, required: true },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    active: { type: Boolean, required: true },
    minval: { type: Number, required: true },
    maxval: { type: Number, required: true },
})


export const SensorModel = model<ISensor>('sensor', sensorScheema) //Creo la clase para manejar una coleccion de este nombre. Mantiene  el esquema en el ALTO NIVEL, en el bajo nivel es NO RELACIONAL!
// Sensor.find({}).then(result => {
//     console.log(result);
//     mongoose.connection.close()
// })
export const createSensorDocument = (params: ISensor) => {
    return new SensorModel(params)
}


