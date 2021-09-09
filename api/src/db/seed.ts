import { createSensorEventDocument, SensorEventModel } from "./models/sensorEventsModel"
import { createSensorDocument, ISensor, SensorModel } from "./models/sensorModel"
import mongoose, { model, Schema } from 'mongoose'
import { randomCoordinates, randomMinMaxValue } from "./utils"




//El seed borra todo y planta de cero lo básico
const seed = async () => {


    const conectionString = "mongodb+srv://Ezequiel:saynomore1993@weathersensorsdb.bwh7q.mongodb.net/weatherdb?retryWrites=true&w=majority"
    await mongoose.connect(conectionString)
        .then(() => {
            console.log("Database conected, esperar a que cargue los documentos a la DB")
        })
        .catch((e) => console.log(e))


    await SensorModel.deleteMany().catch(err => console.log(err))
    await SensorEventModel.deleteMany().catch(err => console.log(err))

    let points = ["Paris", "Chascomus", "El Riachuelo", "Coghlan", "Manhattan", "El Valle", "Yaren", "Tokelau", "San Eustaquio", "San Marino", "Palau", "Funafuti", "Gustavia", "Marigot", "Lima", "Chascomús", "Rawson", "El Bolsón"]
    let sensorPromisesArray = [];
    let pointsLength = points.length - 1

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
    await Promise.all(sensorPromisesArrayResolved.map(async (e, index) => {

        let nested = []

        for (let i = 1; i <= 4; i++) {
            nested.push(createSensorEventDocument({
                createat: new Date(),
                sensorid: e._id,
                value: Math.round(Math.random() * 24)
            }).save())
        }

        Promise.all(nested).then(l => {

            let percentage = Math.round(100 - ((100 / points.length - 1) * pointsLength))

            console.log("Cargando eventos relacionados: " + percentage + "%")
            if (percentage === 100) console.log("Listo! queda hacer el npm start acá en api y en client")
            pointsLength--
        })

    }))

}

seed()