const usernames = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel'
];

// array of possible Thoughts
const descriptionsBodies = [
  'Having a great day',
  'something interesting happened',
  'you wouldnt believe it',
  'this new game is fun',
  'want to expand my network',
  '#sheeeeeesh',
  'going to watch a new movie!',
  'Bali Vibes',
  'hmu if you want to go to dtla tonight!',
  'i like this more than FB!',
  'come to my upcoming event!',
];

const possibleReactions = [
  'I disagree!',
  'long time no see, hope you are well!',
  'This was awesome',
  'Thank you for the great content',
  'Please check out my response',
  'Like and subscribe to my channel please',
  'TFTI',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () => 
  `${getRandomArrItem(usernames)}`;

// Function to generate random thoughts that we can add to the database. Does not associate by user ID
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(descriptionsBodies),
      username: getRandomName()
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};


// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomThoughts, getThoughtReactions, usernames};
