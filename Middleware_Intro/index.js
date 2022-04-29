const express = require('express');
const res = require('express/lib/response');
const morgan = require('morgan')
const app = express();

const AppError = require('./AppError');


app.use(morgan('tiny'))
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})


// app.use((req, res, next) => {
//     console.log('this is my first middleware')
//     next();
// })


// app.use((req, res, next) => {
//     console.log('this is my second middleware')
//     next();
// })

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('Password required', 401);
}


app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF')
})


app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: BIMBO')
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})



// app.use((err, req, res, next) => {
//     console.log("*********ERROR*******");
//     res.status(500).send("WE GOT AN ERROR");
//     console.log(err)
//     next(err);
// })

app.use((req, res) => {
    throw new AppError('NOT FOUND', 404);
})

// custom error handler 
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})