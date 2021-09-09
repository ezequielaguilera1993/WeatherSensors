import { Router } from 'express';
import { listOfSensors } from "./sensor";
import socketioPlayground from './sensorEvents';
const router = Router();

router.use("/sensor/", listOfSensors)//autenticacion de usuarios
router.use("/sensor/", socketioPlayground)//autenticacion de usuarios

export default router;