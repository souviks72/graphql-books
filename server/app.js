const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://souvik:<12#12#abcD>@souviksmlab.37epg.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser:true})
mongoose.connection.once('open',()=>{
    console.log('connected to databse');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(3000,()=>{
    console.log('server is up on port 4000');
})