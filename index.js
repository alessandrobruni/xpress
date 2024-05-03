const express = require('express');
//non si usa import express from 'espress'; perche siamo nel server side
//nella front end react side verrà utilizzato import

const app = express();
//dentro un progetto posso avere diverse app express()
//ma nella stragrande maggioranza viene usato un singola app
// tutti i route che regitreremo saranno associati a questa app

//ecco un route handler 
app.get('/', (req,res) => {
    res.send({hi: 'there'});
})

app.listen(4433);