import express from 'express'
import  rutas  from './routes/routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';

import imageRoutes from './routes/imageRoutes.js';
import { connect,  set} from 'mongoose'
//import con from './database/database.js'

let port = process.env.PORT || 3000;

const app = express();

//Big size requests
app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

//middlewares
app.use(express.json());
app.use(cors());


//cors
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

//Database
set('strictQuery', true);
connect("mongodb+srv://felixyahveh:yahveh21072003@cluster0.1mez5.mongodb.net/photos?retryWrites=true&w=majority").then( res => {
    console.log('Connected succesfully to the database');
}).catch( res => {
    console.log("Failed to connect to the database");
});
//Importing routes
app.use(rutas);
app.use('/imageApi',imageRoutes);

app.listen(port, () => {
	console.log('Server working on port '+port);
})