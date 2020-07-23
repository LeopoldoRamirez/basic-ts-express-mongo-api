import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/ts-api-db',{

})
    .then( ()=> console.log(`Im connected to DB  🚀`) )
    .catch( error => console.error( error ) );
