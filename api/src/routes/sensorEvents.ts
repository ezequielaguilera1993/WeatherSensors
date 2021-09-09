import { NextFunction, Request, Response, Router } from "express";

const socketioPlayground = Router();
socketioPlayground.get("/socketioPlayground", async (req: Request, res: Response) => {

    res.send("Oks.io")

})

export default socketioPlayground;