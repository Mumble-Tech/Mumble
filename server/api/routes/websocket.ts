import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res:Response): void => {
    res.json({
        message: 'websocket-route', 
    });
});

export {router};