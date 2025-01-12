const express = require('express')
const mainRouter = require('./routers/mainRouter')
const mongoose = require('mongoose')
const port = 3001
const app = express()
const cors = require('cors')
mongoose.connect("mongodb://127.0.0.1:27017/PakistanLawLibraryDB")
    .then(() => {
        console.log('DB Connected successfully.')
    })
    .catch((err) => {
        console.log('Error in DB Connection', err)
    })


app.use((req, res, next) => {
    const now = new Date();

  // Format the date and time (example: YYYY-MM-DD HH:MM:SS)
    const formattedDate = now.toISOString().replace('T', ' ').replace(/\..+/, '');

    console.log('HTTP Method: ', req.method, " URL: ", req.url,"Time: ",formattedDate)
    next()
})
app.use(express.json())
app.use(cors())

app.use('/', mainRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})