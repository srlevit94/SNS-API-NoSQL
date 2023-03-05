const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, usernames} = require('./data');

connection.on('error', (err) => err);

// deletes seeds if exists and reseed usernames and thoughts
connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(5)


  for (let i = 0; i < usernames.length-1; i++) {
    const username = usernames[i];
    const email = `${username}@email.com`

    users.push({
      username,
      email,
    })
  }

  // inserts random users and thoughts to database
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // logs to console seeded users and thoughts
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
