import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js'
import userRoute from './routes/userRoute.js'

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
app.use(cors());
app.use(express.json());
app.use('/book',bookRoute);
app.use('/user', userRoute);
app.listen(PORT,()=>{
    console.log("server running on", PORT);
    
})