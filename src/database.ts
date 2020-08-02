import mongoose from "mongoose";

import { mongoDefault, mongoHost } from "./config";

const connectionParameters =[
    'mongodb://', mongoHost, '/' ,mongoDefault
];

//'mongodb://localhost/ts-api-db'
const strConnection = connectionParameters.join('');

mongoose.connect( strConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then( ()=> console.log(`Im connected to DB  🚀`) )
    .catch( error => console.error( error ) );
