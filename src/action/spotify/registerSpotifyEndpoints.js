/**
 * Registering the All API endpoints
 */
 import SongDb from '../../lib/Songs.js';
 import Express from 'express';
 import PlaylistDb from '../../lib/Playlists.js';
 import UserDb from '../../lib/Users.js';
 import { getSongs, createSong, updateSong, deleteSong, 
          getPlaylists, createPlaylist, updatePlaylist, deletePlaylist,
          getUsers,
          updateUsers,
          deleteUser
          } from './crudSpotify.js';

 const app = Express.Router()
  // create a Song file to work withF

  const songData = new SongDb();
  const playlistData = new PlaylistDb();
  const userData = new UserDb();

  // get the songs
  app.get('/songs', async (req, res) => await getSongs(songData, req, res));

  // add a song
  app.post('/song', async (req, res) => await createSong(songData, req, res));

  // update a song
  app.put('/song/:id', async (req, res) => await updateSong(songData, req, res));

  // delete a song
  app.delete('/song/:id', async (req, res) => await deleteSong(songData, req, res));


/**
 * EndPoint for Playlists 
 */

   // get the playlists
   app.get('/playlists', async (req, res) => await getPlaylists(playlistData, req, res));

   // add a playlist
   app.post('/playlist', async (req, res) => await createPlaylist(playlistData, req, res));
 
   // update a playlist
   app.put('/playlist/:id', async (req, res) => await updatePlaylist(playlistData, req, res));
 
   // delete a playlist
   app.delete('/playlist/:id', async (req, res) => await deletePlaylist(playlistData, req, res));


   /**
 * EndPoint for Login 
 */

 // get the playlists
    app.get('/users', async (req, res) => await getUsers(userData, req, res));
    
    // update a playlist
    app.put('/user/:id', async (req, res) => await updateUsers(userData, req, res));
    
    // delete a playlist
    app.delete('/user/:id', async (req, res) => await deleteUser(userData, req, res));


export default app;