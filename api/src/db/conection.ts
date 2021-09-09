import mongoose, { model, Schema } from 'mongoose'

const conectionString = "mongodb+srv://Ezequiel:saynomore1993@weathersensorsdb.bwh7q.mongodb.net/weatherdb?retryWrites=true&w=majority"
mongoose.connect(conectionString)
    .then(() => {
        console.log("Database conected")
    })
    .catch((e) => console.log(e))

