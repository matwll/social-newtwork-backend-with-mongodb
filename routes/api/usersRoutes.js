const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
  updateUser,
} = require('../../controllers/usersController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId
router.route("/:userId").put(updateUser);

// /api/users/:userId/friend
router.route('/:userId/friend/:friendId').post(addFriend);

// /api/users/:userId/friend/:friendId
router.route('/:userId/friend/:friendId').delete(deleteFriend);

module.exports = router;