import { model, Schema } from 'mongoose'
//sensor

interface ISensor {
    name: string,
    location: string,
    active: boolean,
    minval: number,
    maxval: number,
}
const sensorScheema = new Schema<ISensor>({
    name: { type: String, required: true },
    location: { type: String, required: true },
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


