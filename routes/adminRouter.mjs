// admin signup, login, add course, delete course, course content

import { response, Router } from "express";

const adminRouter = Router();

adminRouter.post('/signup', (request, response) => {
    response.json({
        message: 'You have signed up.'
    })
})

adminRouter.post('/signin', (request, response) => {
    response.json({
        message: 'admin signin endpoint.'
    })
})

adminRouter.post('/add', (request, response) => {
    response.json({
        message: 'admin add courses endpoint.'
    })
})

adminRouter.post('/delete', (request, response) => {
    response.json({
        message: 'admin delete courses endpoint.'
    })
})

adminRouter.get('/courses', (request, response) => {
    response.json({
        message: 'admin all courses endpoint.'
    })
})

export {adminRouter}