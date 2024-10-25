import { Router } from "express"
import { UserModel } from "../db.mjs";
import bcrypt from 'bcrypt';
import {z} from 'zod';
const userRouter = Router();

userRouter.post('/signup', async (request, response) => {
    const user = z.object({
        firstName: z.string().min(5).max(50),
        lastName: z.string().min(5).max(50),
        email: z.string().min(5).max(50).email(),
        password: z.string().min(5).max(50)
    })
    try {
        //validate the user and parse
        const validateUser = user.parse(request.body);
        //hash the password
        const hashedPassword = await bcrypt.hash(validateUser.password, 10)

        await UserModel.create({
            firstName: validateUser.firstName,
            lastName: validateUser.lastName,
            email: validateUser.email,
            password: hashedPassword
        })

        response.json({
            message: 'user signup successful.',
            user: validateUser
        })
    } catch (error) {
        return response.status(400).json({
            message: 'error signing up.',
            error: error.errors

        })
    }
})

userRouter.post('/signin', (request, response) => {
    response.json({
        message: 'user signin endpoint.'
    })
})

userRouter.get('/purchases', (request, response) => {
    response.json({
        message: 'user purchases endpoint.'
    })
})

export { userRouter };