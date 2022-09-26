
The End Points 
----------------------------------------------------------------
/**
 * EndPoint for  
 */

  // get the songs in the database songs
  http://localhost:3001/api/songs

  // add a song
  http://localhost:3001/api/song

  // update a song using id
  http://localhost:3001/api/song/:id

  // delete a song using id 
  http://localhost:3001/api/song/:id


/**
 * EndPoint for Playlists 
 */

   // get the All the in tha database playlists
   http://localhost:3001/api/playlists

   // add a playlist
   http://localhost:3001/api/playlist
 
   // update a playlist
   http://localhost:3001/api/playlist/:id
 
   // delete a playlist
   http://localhost:3001/api/playlist/:id'

   
/**
 * EndPoint for Users 
 */

   // get the All the in the database Users
   http://localhost:3001/api/users

/**
 * EndPoint for User Login
 */

   // Users log-in in plain text (username and password)
   http://localhost:3001/auth/login 

/**
* EndPoint hashing user password
*/

 
Resources
----------------------------------------------------------------
ExpressJS (NodeJS Framework)
Node.JS sqlite3 Module Documentation
VSCode (Code Editor)
Nodemon - to watch for changes, so we dont have to start the server with every change
Postman - to perfom request
Bcrypt - for encrypting the user password (library)
Body-parser -
Chalk - console with colour logging
Dotenv - store the in we dont want the client to see e.g. file path, jsonwebtoken info.
Faker - faker users for seeding the user database
Jsonwebtoken - for web tokens
Knex - connect to the database
Passport and passport-local
Uuid - to generate date 
Jest - for unit tests 
Supertest - for
Babel-jest - 
Eslint - for a cade up to airbnb standards
Cross-environment - to have control over the environment we are working on (node, test or seed)



Middleware (filter that tells if you are a user or admin (I Thabisa will be the only one admin, my app my rules), if is_admin you have all the previlages addding a song and editing a song.)


Functinality
----------------------------------------------------------------

