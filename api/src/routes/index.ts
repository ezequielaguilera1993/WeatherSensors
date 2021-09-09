import { Router } from 'express';
import { deleteSensor } from './deleteSensor';
import { getAllSensors } from './getAllSensors';
import { listOfSensors } from "./sensor";
import socketioPlayground from './sensorEvents';
const router = Router();
const sensorPath = "/sensor/"

router.use(sensorPath, listOfSensors)
router.use(sensorPath, socketioPlayground)
router.use(sensorPath, getAllSensors)
router.use(sensorPath, deleteSensor)


export default router;






