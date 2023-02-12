const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/userController');

// /api/thoughts
router.route('/').get(getThoughts)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// Add reaction
router.route("/:thoughtId/reactions").post(addReaction)

//Delete Reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction)



// // /api/users/:userId/thought
// router.route('/:userId/thought').post(addThought);

// // /api/users/:userId/assignments/:assignmentId
// router.route('/:userId/thought/:thoughtId').delete(deleteUserThought);

module.exports = router;