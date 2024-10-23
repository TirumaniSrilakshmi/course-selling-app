import { Router } from "express"
const userRouter = Router();

userRouter.post('/signup', (request, response) => {
    response.json({
        message: 'user signup endpoint.'
    })
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

export {userRouter};