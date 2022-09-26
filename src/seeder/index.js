
import faker from 'faker';
import Users from "../lib/Users.js";
import { v4 as uuidv4 } from 'uuid';

//variables

const usersDB = new Users();


//creating users

const createUsers = (amount) => {

  const users = [];

  for (let i = 0; i < amount; i++) {
    const user = {
      id: uuidv4(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      is_admin: false,
      email: faker.internet.email()
    };

    console.log(`Created a new fake user: ${user.username}`);
    users.push(user);
  }

  return users;
};


/**
 * Seed the users table in bulk
 *
 * @param { Array } users
 */

 const seedUsers = async (users) => {
  try {
    const ids = users.map(async (user) => {
      return await usersDB.add(user);
    });

    return Promise.all(ids); // if all insert promises are resolved, return the ids's.
  } catch (message) {
    return console.error(message);
  }
};



const seed = async () => {

  const users = createUsers(50);
  const userIDs = await seedUsers(users);
  console.log(`Added ${userIDs.length} users to database`);

  console.log(`Closing the seeder!`);
  process.exit();
};

// initialize the seeder when the app loads
seed();