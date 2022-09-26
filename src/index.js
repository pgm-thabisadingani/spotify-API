import Express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Logger from './lib/Logger.js';
import middleware from './middleware/index.js';
import api from './action/spotify/registerSpotifyEndpoints.js';
import authenticationEndPoint from './action/auth/index.js';


// create a new express application 
const app = Express();
 
//init dotenv
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || "development";

//add json body parser
app.use(bodyParser.json());

//add a middleware
app.use('/api', ...middleware, api);

app.use('/auth', authenticationEndPoint);

// callback function

if (NODE_ENV !== "test") {
  /**
   * Start listening on a port
   */

  app.listen(process.env.PORT, () => {
    Logger.warning(`Server started on port ${process.env.PORT}`);
  });
}

 export { app }; 

console.log("start the server");
