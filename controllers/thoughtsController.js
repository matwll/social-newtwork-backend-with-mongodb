const { Thought, User } = require('../models');
const { deleteThought } = require('./usersController');

module.exports = {

getThoughts(req, res){
  Thought.find()
  .then((thoughtrecords) => {
    console.log(thoughtrecords);
    res.status(200).json(thoughtrecords);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
},

getSingleThought(req, res){
  Thought.findOne({
    _id: req.params.userId,
  })
    .then((thoughtrecords) => {
      console.log(thoughtrecords);
      res.status(200).json(thoughtrecords);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
},
deleteThought(req, res){
  Thought.findOneAndDelete({ _id: req.params.thoughtId })
  .then((thoughtrecords) => {
    console.log(thoughtrecords);
    res.status(200).json(thoughtrecords);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
},
updateThought(req, res){},
addReaction(req, res){},
deleteReaction(req, res){
},
};
