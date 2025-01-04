import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/master.route';
import bodyParser from 'body-parser';
import {Port} from "./config/environment";
import mongoConnection from "./config/mongoConnection";


dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/v1', routes);

// Start server
app.listen(Port, async () => {
    await mongoConnection()
    console.log(`Server running on http://localhost:${Port}`);
});
