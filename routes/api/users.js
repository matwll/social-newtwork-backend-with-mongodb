const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thought
router.route('/:userId/friend').post(addFriend);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/friend/:friendId').delete(deleteFriend);

module.exports = router;