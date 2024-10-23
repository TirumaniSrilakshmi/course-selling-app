import express from 'express'

const app = express()

app.use(express.json())

app.post('./user/signup', (request, response) => {

})

app.post('./user/login', (request, response) => {

})

app.get('./user/purchases', (request, response) => {

})

app.get('./courses', (request, response) => {

})

app.post('./user/purchase-courses', (request, response) => {

})

app.listen(3000, () => {
    console.log('Running in 3000 port...')
})
