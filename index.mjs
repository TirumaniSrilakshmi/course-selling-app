import express from 'express'
import {userRouter} from './routes/userRouter.mjs';
import {courseRouter} from './routes/courseRouter.mjs';

const app = express()
app.use(express.json())

app.use('user', userRouter)
app.use('course', courseRouter)

createUserRoutes(app);
createCourseRoutes(app);

app.listen(3000, () => {
    console.log('Running in 3000 port...')
})
