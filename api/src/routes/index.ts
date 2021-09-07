import { Router } from 'express';
import sensor from "./sensor";

const router = Router();

router.use("/sensor/", sensor)//autenticacion de usuarios
export default router;