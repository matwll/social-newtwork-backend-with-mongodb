const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/').get(getThoughts)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// api/thoughts
router.route("/").post(addThought)

// api/thoughts/:thoughtId
router.route("/:thoughtId").put(updateThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// Add reaction
router.route("/:thoughtId/reactions").post(addReaction)

//Delete Reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction)

module.exports = router;