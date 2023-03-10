const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // validates for standard email formats
        validate: {
            validator: function (v) {
                return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            },
            message: 'Email validation failed'
          }
    },
    // holds thoughts for user
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      }
    ],
    // holds friends for user
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ]
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendcount` that gets number of friends
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  })
;

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
