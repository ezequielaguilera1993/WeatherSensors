import { Router } from 'express';
import { deleteSensor } from './deleteSensor';
import { getAllSensors } from './getAllSensors';
import { patchSensorName } from './patchSensorName';
import { listOfSensors } from "./sensor";
const router = Router();
const sensorPath = "/sensor/"

router.use(sensorPath, listOfSensors)
router.use(sensorPath, getAllSensors)
router.use(sensorPath, deleteSensor)
router.use(sensorPath, patchSensorName)


export default router;






