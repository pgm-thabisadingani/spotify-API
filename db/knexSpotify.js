/** 
 * Create a connection with knex 
*/

import knex from "knex";
// database configuration
const knexSpotify = knex({
    client: 'sqlite3',
    connection: {
      filename: './db/spotify.db3',
    },
    useNullAsDefault: true,
    pool: {
      min: 0,
      max: 1,
  },
});

export default knexSpotify;