import { Router } from "express"
import { UserModel } from "../db.mjs";
import bcrypt from 'bcrypt';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
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

        const newUser = await UserModel.create({
            firstName: validateUser.firstName,
            lastName: validateUser.lastName,
            email: validateUser.email,
            password: hashedPassword
        })

        response.json({
            message: 'User signup successful.',
            user: newUser.firstName
        })
    } catch (error) {
        console.log(error);
        return response.status(400).json({
            message: 'Error signing up.',
            error: error.errors || error.message

        })
    }
})

userRouter.post('/signin', async (request, response) => {
    const { email, password } = request.body;
    if (!email && !password) {
        return response.status(400).json({
            message: 'email and password are required.'
        })
    }
    try {
        const user = await UserModel.findOne({
            email
        })
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                id: user._id.toString()
            }, process.env.JWT_USER_SECRET);
            //cookie based or session based auth comes here
            //
            response.json({
                token: token,
                message: 'Signed in successfully.'
            })
        } else {
            response.status(403).json({
                message: 'Incorrect credentials.'
            })
        }
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'Internal server error'
        })
    }
})

userRouter.get('/purchases', (request, response) => {
    response.json({
        message: 'user purchases endpoint.'
    })
})

export { userRouter };