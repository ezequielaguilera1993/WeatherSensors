import { createSensorEventDocument, SensorEventModel } from "./models/sensorEventsModel"
import { createSensorDocument, ISensor, SensorModel } from "./models/sensorModel"

export const randomMinMaxValue = () => {
    const randomMin = Math.round(Math.random() * 50 - 10)
    const randomMax = Math.round(randomMin + Math.random() * 24)
    return { randomMin, randomMax }
}

export const randomCoordinates = () => {
    const randomSign = Math.random() < 0.5 ? -1 : 1
    const lat = Math.round(Math.random() * 180 * randomSign)
    const long = Math.round(Math.random() * 90 * randomSign)
    return { lat, long }
}


//El seed borra todo y planta de cero lo básico
export const seed = async () => {

    await SensorModel.deleteMany().catch(err => console.log(err))
    await SensorEventModel.deleteMany().catch(err => console.log(err))

    let points = ["Paris", "Chascomus", "El Riachuelo", "Coghlan", "Manhattan", "El Valle", "Yaren", "Tokelau", "San Eustaquio", "San Marino", "Palau", "Funafuti", "Gustavia", "Marigot", "Lima", "Chascomús", "Rawson", "El Bolsón"]
    let sensorPromisesArray = [];

    for (let i = 1; i <= points.length; i++) {

        const { randomMin, randomMax } = randomMinMaxValue()
        sensorPromisesArray.push(createSensorDocument({//Creo un nuevo documento
            name: points[i - 1],
            location: {
                type: "Point",
                coordinates: [
                    randomCoordinates().lat,
                    randomCoordinates().long,
                ]
            },
            active: true,
            minval: randomMin,
            maxval: randomMax,
        }).save()
        )
    }
    //Cuando se resolvieron creo la variable que las contiene
    const sensorPromisesArrayResolved = await Promise.all(sensorPromisesArray)
    //Saco el id de la variable, y con el y un mapeo contruyo un array de promesas que crean eventos asociados
    await Promise.all(sensorPromisesArrayResolved.map(async e => {

        let nested = []

        for (let i = 1; i <= 10; i++) {
            nested.push(createSensorEventDocument({
                createat: new Date(),
                sensorid: e._id,
                value: Math.round(Math.random() * 24)
            }).save())
        }

        Promise.all(nested).then(l => console.log("Ok!"))

    }))



}