import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Route imports
import { router as WebSocketRouter } from './routes/websocket';

const app = express(); 


app.use('/ws', WebSocketRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'message',
    });
});

app.listen(process.env.PORT || 1337, () => { 
    console.log(`App listening at http://localhost:1337`);
});