  
/**
 * All the CreatReadUpdateDelete endpoint actions together
 */

 import parseSong from './parseSong.js';
 import parsePlaylist from './parsePlaylist.js';
 import { v4 as uuidv4 } from 'uuid';

/**
 * Getting the Spotify songs, playlists and users
 *
 * @param {*} songs
 * @param {*} request
 * @param {*} response
 */


 //get

  export const getSongs = async (song, request, response) => {
    try {
      response.status(200).json({ songs: await song.get() });
    } catch({ message }) {
      response.status(500);
      response.json({ error: message });
    }
  }

  /**
 * Creates a new song item
 *
 * @param {*} song
 * @param {*} request
 * @param {*} response
 */

  // Add Song
export const createSong = async (song, request, response) => {
  try {
    const { title, artist, uri }  = parseSong(request, response);
    
   let id =  uuidv4();
   let date_created = Date.now();
   
    const newSong = await song.add(id ,title, artist, uri, date_created);
    response.status(201).json({ song: newSong });
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};

//Put Song

export const updateSong = async (song, request, response) => {

  try {
    const { title, artist, uri }  = parseSong(request, response);
    const id = request.params.id;
  
    const updatedSong = await song.update(id, title, artist, uri , date_created);
    response.status(200).json({ song: updatedSong });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }

}
let date_created = Date.now();

//Delete Song

export const deleteSong = async (song, request, response) => {
  try {
    const id = request.params.id;
    await song.delete(id);
    response.status(204).end();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }

}

/**
 * 
 * @param {} playlist 
 * @param {*} request 
 * @param {*} response 
 */

 //get playlist

 export const getPlaylists = async (playlist, request, response) => {
  try {
    response.status(200).json({ playlists: await playlist.get() });
  } catch({ message }) {
    response.status(500);
    response.json({ error: message });
  }
}


// Add Playlist

export const createPlaylist = async (playlist, request, response) => {
  
 
  try {
    const { title, owner_id, songs_list }  = parsePlaylist(request, response);

    let id =  uuidv4();
    let date_created = Date.now();
    let date_modified = Date.now();
  
    const newPlaylist = await playlist.add(id, title, owner_id, date_created, date_modified, songs_list);
  
    response.status(201).json({ playlist: newPlaylist });
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};

//Put Playlist

export const updatePlaylist = async (playlist, request, response) => {

  try {
    const { title, owner_id, songs_list }  = parsePlaylist(request, response);
    const id = request.params.id;
    let date_created = Date.now();
    let date_modified = Date.now();
    const updatedPlaylist = await playlist.update(id, title, owner_id, date_created, date_modified, songs_list);
    response.status(200).json({ playlist: updatedPlaylist}).save();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }

}

//delete Playlist

export const deletePlaylist = async (playlist, request, response) => {
  try {
    const id = request.params.id;
    await playlist.delete(id);
    response.status(204).end();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }

}

/**
 * 
 * Our Users
 * @param {*} request 
 * @param {*} response 
 * 
 */


 //get

 export const  getUsers = async (user, request, response) => {
  try {
    response.status(200).json({ users: await user.get() });
  } catch({ message }) {
    response.status(500);
    response.json({ error: message });
  }
}

//UpdatedUser

export const updateUsers = async (user, request, response) => {

  try {
    const { username, password, is_admin , email } = request.body;
    const id = request.params.id;
    console.log(request.params.id)
    const updatedUser = await user.update(id, username, password, is_admin , email);
    response.status(200).json({ user: updatedUser}).save();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
}


//delete
export const deleteUser = async (user, request, response) => {
  try {
    const id = request.params.id;
    await user.delete(id);
    response.status(204).end();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }

}