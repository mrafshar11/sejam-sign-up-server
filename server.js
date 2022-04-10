const path = require('path');

const express = require('express');
const dotEnv = require('dotenv');
const captchaRouter = require('./routes/captchapng');
const registerRouter = require('./routes/registerUser');
const mainRegister = require('./routes/mainRegister');
const { connectToDB } = require('./utils/database');
const { setHeaders } = require('./middleWares/headers');
const { errorHandler } = require('./middleWares/erroHandler');


const app = express();


//load config
dotEnv.config({ path: "./config/config.env" });

//server port
const port = process.env.PORT || 4000;


//middleWares
app.use(express.json());
app.use(setHeaders);


app.use("/session", captchaRouter);
app.use("/register", registerRouter)
app.use("/mainregister", mainRegister)

//errorHandler
app.use(errorHandler)


connectToDB().then(result => {
    console.log('connected to DB')
    app.listen(port, () => {
        console.log(`server runing on port ${port}`)
    })
}).catch(err => {
    console.log(err)
})