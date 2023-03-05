const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, usernames} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(5)


  for (let i = 0; i < usernames.length-1; i++) {
    const username = usernames[i];
    const email = `${username}@gmail.com`

   
    users.push({
      username,
      email,
    })
  }

  

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved thought, for each thought we need to generate a thought reaction and insert the thought reaction



  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
