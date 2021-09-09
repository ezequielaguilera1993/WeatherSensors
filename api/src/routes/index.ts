import { Router } from 'express';
import { deleteSensor } from './deleteSensor';
import { getAllSensors } from './getAllSensors';
import { patchSensorName } from './patchSensorName';
import { putSensor } from './putSensor';
import { putSensorEvent } from './putSensorEvent';
import { listOfSensors } from "./sensor";
const router = Router();
const sensorPath = "/sensor/"

router.use(sensorPath, listOfSensors)
router.use(sensorPath, getAllSensors)
router.use(sensorPath, deleteSensor)
router.use(sensorPath, patchSensorName)
router.use(sensorPath, putSensor)

router.use(sensorPath, putSensorEvent)


export default router;






