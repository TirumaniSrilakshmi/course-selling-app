    // admin signup, login, add course, delete course, course content

    import { response, Router } from "express";
    import { AdminModel } from "../db.mjs";
    import {z} from 'zod';
    const adminRouter = Router();

    adminRouter.post('/signup', (request, response) => {
        
        z.object({
            
        })
        const firstName = request.body.username;
        const lastName = request.body.lastName;
        const email = request.body.email;
        const password = request.body.password
        
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
    adminRouter.post('/course', (request, response) => {
        response.json({
            message: 'admin add courses endpoint.'
        })
    })

    adminRouter.put('/course', (request, response) => {
        response.json({
            message: 'admin delete courses endpoint.'
        })
    })

    adminRouter.get('/course/bulk', (request, response) => {
        response.json({
            message: 'admin all courses endpoint.'
        })
    })

    export {adminRouter}