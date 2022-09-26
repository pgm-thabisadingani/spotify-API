import knexSpotify from '../../db/knexSpotify.js';
import Logger from './Logger.js';

export default class Users {

  constructor() {
    this.table = "users";
  }


  async findUser(username) {
    try {
      return await knexSpotify(this.table)
        .where({ username: username })
        .select('*')
        .first();
    } catch (e) {
      return Logger.error(e.message);
    }
  }
  /**
   * Get users
   *
   * @param {null|string} id
   */
  async get(id = null) {
    try {
      if (!id) {
        return await knexSpotify(this.table).select("*");
      }
      const [user] = await knexSpotify(this.table).where("id", parseInt(id));
      return user;
    } catch (message) {
      console.error(message);
    }
  }

  async add(field) {
    try {
      return await knexSpotify(this.table).insert(field);
    } catch (message) {
      console.error(message);
    }
  }

  
 async update(id, username, password, is_admin, email) {

    try {
      console.log(id);
      return await knexSpotify.where("id", id).update({ 
        id : id,
        username : username,
        password : password,
        is_admin : is_admin,
        email : email}).from(this.table);
    } catch(e) {
      console.error(e.message);
    }
  }

      /**
   * Deletes a specific Song
   *
   * @param {string} ids
   */
       async delete(id) {
        try {
          return await knexSpotify(this.table).where("id", id).del();
        } catch(e) {
          console.error(e.message);
        }
      }
 
}

