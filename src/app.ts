import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import ErrorHandler from "./models/ErrorHandler";

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

// Express server application class.
class Server {
  public app = express();
}

// initialize server app
const server = new Server();

// make server app handle any route starting with '/api'
server.app.get('/', (req: Request, res: Response, next: NextFunction) => {res.status(200).json("Welcome to the CarPar API.");});

// make server app handle any error
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
});

// make server listen on some port
((port = process.env.PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();

