import knexSpotify from '../../db/knexSpotify.js';
import Logger from './Logger.js';
// import { v4 as uuidv4 } from 'uuid';


export default class Songs{

  constructor() {
    this.table = "songs";
    
  }
  
  async get(id = null) {
    try {
      if (!id) {
        return await knexSpotify.select("*").from(this.table).timeout(1000); //databse has 1 mili second to return something 
      }
      const [song] = await knexSpotify(this.table).where("id", parseInt(id));
      return song;

    } catch (message) {
        Logger.error(message);
    }
  }
  
  //async add(id = uuidv4(), title, artist, uri, date_created = Date.now()) {
    async add(id, title, artist, uri, date_created) {
   
    try {
      return await knexSpotify.insert({ 
        id : id,
        title : title,
        artist : artist,
        uri : uri,
        date_created : date_created}).from(this.table);
    } catch(e) {
      Logger.error(e.message);
    }
  }

   async update (id, title, artist, uri, date_created) {
    try {
      return await knexSpotify.where("id", id).update({ 
        id : id,
        title : title,
        artist : artist,
        uri : uri,
        date_created }).from(this.table);
    } catch(e) {
      Logger.error(e.message);
    }
  }
    /**
   * Deletes a specific User
   *
   * @param {string} ids
   */
  async delete(id) {
    try {
      return await knexSpotify(this.table).where("id", id).del();
    } catch(e) {
      Logger.error(e.message);
    }
  }

}