import {Router, Request, Response} from "express"

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
    res.status(200).json({ola: "Api Working!"}); 
})

export default router;