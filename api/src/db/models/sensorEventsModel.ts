import { model, Mongoose, ObjectId, Schema } from 'mongoose'
//sensorEvent

interface ISensorEvent {
    sensorid: ObjectId,
    createat: Date,
    value: number
}
const sensorEventScheema = new Schema<ISensorEvent>({
    sensorid: { type: Schema.Types.ObjectId, required: true },
    createat: { type: Date, required: true },
    value: { type: Number, required: true }
})

export const SensorEventModel = model<ISensorEvent>('sensorEvent', sensorEventScheema)

export const createSensorEventDocument = (params: ISensorEvent) => {
    return new SensorEventModel(params)
}