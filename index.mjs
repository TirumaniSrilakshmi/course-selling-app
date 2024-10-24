import express from 'express';
import {userRouter} from './routes/userRouter.mjs';
import {courseRouter} from './routes/courseRouter.mjs';
import { adminRouter } from './routes/adminRouter.mjs'; 

const app = express()
app.use(express.json())

app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)


app.listen(3000, () => {
    console.log('Running in 3000 port...')
})
