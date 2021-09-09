import './db/conection'
import dotenv from "dotenv";
import server from './server';
// import a, { Socket } from 'socket.io';

// const io = require("socket.io")(server, {
//     cors: { origin: "*" },
// });



dotenv.config()

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log("Corriendo en puerto " + PORT);
})


