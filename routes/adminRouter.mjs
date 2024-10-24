// admin signup, login, add course, delete course, course content

import { response, Router } from "express";
import { AdminModel } from "../db.mjs";
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

// /api/v1/course/course shouldn't be there, it's /api/v1/course
adminRouter.post('/', (request, response) => {
    response.json({
        message: 'admin add courses endpoint.'
    })
})

adminRouter.put('/', (request, response) => {
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