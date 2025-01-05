// const express = require('express');
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURI;

// connection
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("connected to mongodb");
    
} catch (error) {
    console.log("Erro: ", error);
    
}

app.use('/book',bookRoute)

app.listen(PORT,()=>{
    console.log("server running on", PORT);
    
})