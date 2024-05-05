// implementation first 
//non si usa import express from 'espress'; perche siamo nel server side
//nella front end react side verrà utilizzato import
const express = require('express');


//dentro un progetto posso avere diverse app express()
//ma nella stragrande maggioranza viene usato un singola app
// tutti i route che registreremo saranno associati a questa app
const app = express();


const PORT = process.env.PORT || 4433;
//ecco un route handler 
app.get('/', (req,res) => {
    res.send({hi: 'there'});
})

app.listen(PORT);
