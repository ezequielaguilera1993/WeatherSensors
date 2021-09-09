import { Router } from 'express';
import { getAllSensors } from './getAllSensors';
import { listOfSensors } from "./sensor";
import socketioPlayground from './sensorEvents';
const router = Router();
const sensorPath = "/sensor/"

router.use("/sensor/", listOfSensors)
router.use("/sensor/", socketioPlayground)
router.use("/sensor/", getAllSensors)


export default router;






