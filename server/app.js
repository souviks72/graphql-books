const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/books',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
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