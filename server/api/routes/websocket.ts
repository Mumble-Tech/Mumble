import express from 'express';
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        message: 'websocket-route', 
    });
});

export {router};