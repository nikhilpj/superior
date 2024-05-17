const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require('./connect')
const userRouter = require('./routes/user')

const corsOptions = {
    origin:'http://localhost:3000'
}

connectDb
app.use(cors(corsOptions))

app.use(express.json({limit:'10mb'}))

app.use('/',userRouter)



app.listen(5000,()=>{
    console.log('server running on port 5000')
})