import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import MasterRouter from './routers/MasterRouter';
import ErrorHandler from "./models/ErrorHandler";
import connectDB from "./config/database";
import {loadLiveDataForLuzern} from "./dataLoader/LuzernDataLoader";

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

let cors = require('cors');
const cron = require('node-cron');

let app = express();
app.use(cors());
let router = MasterRouter;

// Connect to MongoDB
connectDB();

// Schedule tasks to be run every 5 minutes
cron.schedule('*/1 * * * *', function() {
  loadLiveDataForLuzern();
});

// make server app handle any route starting with '/api'
app.get('/', (req: Request, res: Response, next: NextFunction) => {res.status(200).json("Welcome to the CarPar API.");});
app.use('/api', router);

// make server app handle any error
app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
});

// make server listen on some port
((port = process.env.PORT || 5000) => {
  app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
