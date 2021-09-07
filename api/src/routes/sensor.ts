import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get("/listOfSensors", async (req: Request, res: Response) => {

    res.send("Ok!")
})

export default router;