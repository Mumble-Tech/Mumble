import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Route imports
import { router as WebSocketRouter } from './routes/websocket';
import { router as AuthRouter } from './routes/authentication';

const app = express(); 

app.use(express.json());

// Route usage
app.use('/ws', WebSocketRouter);
app.use('/auth', AuthRouter);

app.get('/', (req: Request, res: Response): void => {
    res.json({
        message: 'message',
    });
});

app.listen(process.env.PORT || 1337, (): void => {  
    console.log(`App listening at http://localhost:1337`);
});