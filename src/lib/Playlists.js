import knexSpotify from '../../db/knexSpotify.js';
import Logger from './Logger.js';
import { v4 as uuidv4 } from 'uuid';



export default class Playlists{

  constructor() {
    this.table = "playlists";
    this.tableSongs = "songs";
  }
  

  async get(id = null) {
    
    try {
      if (!id) {
        return await knexSpotify.select("*").from(this.table).timeout(1000);//databse has 1 mili second to return something 
      }
      const [playlist] = await knexSpotify(this.table).where("id", parseInt(id));
      
      return playlist;
      
    } catch (message) {
        Logger.error(message);
    }

  }
  
  /**
   * insert a new field to categories
   *  @param {object} field
   * 
  */
   async add(id, title, owner_id, date_created, date_modified, songs_list) {
    // the ID should be from the users tableSongs
    //the list of song [] from the songs table
  
    try {
      return await knexSpotify.insert({ 
        id : id,
        title : title,
        owner_id : owner_id,
        date_created : date_created,
        date_modified : date_modified,
        songs_list: songs_list
       }).from(this.table);
    } catch(e) {
      Logger.error(e.message);
    }
  }
  
  /**
   * Deletes a specific playlist
   *
   * @param {string} id
   */

  async update (id, title, owner_id, date_created, date_modified, songs_list) {
    // the ID should be from the users tableSongs
    //the list of song [] from the songs table
  
    try {
      return await knexSpotify.where("id", id).update({ 
        id : id,
        title : title,
        owner_id : owner_id,
        date_created : date_created,
        date_modified : date_modified,
        songs_list: songs_list
       }).from(this.table);
    } catch(e) {
      Logger.error(e.message);
    }
  }
  

  /**
   * Deletes a specific playlist
   *
   * @param {string} id
   */
  
   async delete(id) {
    try {
      return await knexSpotify(this.table).where("id", id).del();
    } catch(e) {
      Logger.error(e.message);
    }
  }

}