import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
// import routes from './routes';
import bodyParser from 'body-parser';
import {Port} from "./config/environment";
import mongoConnection from "./config/mongoConnection";


dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
// app.use('/api', routes);
app.get('/',(req:Request,res:Response)=>{

    res.status(200).json({m:"working here"})
})

// Start server
app.listen(Port, async () => {
    await mongoConnection()
    console.log(`Server running on http://localhost:${Port}`);
});
