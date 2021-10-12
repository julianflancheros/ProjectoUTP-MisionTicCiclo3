import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
// import mongoose from "mongoose"; 

const app = express();

// Conexión con la base de datos
const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/myapp';

// Conexion en la nube
const uri = 'mongodb+srv://usu-master_00:L1VuvXTGXnNHueSc@projectoutp-misionticci.siojg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
);

// middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))
app.use("/nota", require("./routes/nota"));
// Para acceder al directorio actual
// app.use(express.static(path.join(__dirname, 'public')));


// Rutas
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Rutas
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/user'));
app.use('/api/login', require('./routes/login'));

// Usamos las rutas
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/login', require('./routes/login'));


// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Puerto
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port' + app.get('puerto'));
});