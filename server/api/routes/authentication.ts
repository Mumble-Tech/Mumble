import Router, { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { USER } from './types/user.types';
import { PrismaClient } from '@prisma/client';
const router = Router();

const prisma = new PrismaClient();

// ! ERROR: Primsa is not connection properly

router.get('/', (req: Request, res: Response): void => {  
    const users = prisma.user.findMany({
        where: {
            username: 'Deondre',
        },
    });

    res.json({
        users
    });
});

router.post('/login', async (req: Request, res: Response): Promise<void> => {
    // get the username, email, and password from the request body
    const tempUser: USER = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hash(req.body.password, 10)
    };

    // if the user does not exist, then create a new user
    if (tempUser.password) {
        await prisma.user.create({
            data: {
                username: tempUser.username,
                email: (await tempUser.email).toString(),
                password: (await tempUser.password).toString(),
            },
        }).then((user) => {
            res.json({
                user,
            });
        });
    }

    res.json({message: `User ${tempUser.username} failed`});
});


export { router };