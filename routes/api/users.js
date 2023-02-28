const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// TODOS:
// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.



module.exports = router;