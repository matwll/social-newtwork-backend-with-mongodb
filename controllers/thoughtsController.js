const { ObjectId } = require("mongoose").Types;
const { Thought } = require('../models');

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
    _id: req.params.thoughtId,
  })
    .then((thoughtrecords) => {
      console.log(thoughtrecords);
      res.status(200).json(thoughtrecords);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
},
addThought(req, res){
  Thought.create(req.body)
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
updateThought(req, res){
  Thought.findOneAndUpdate(
    {
      _id: req.params.thoughtId,
    },
    {
      $set: req.body,
    },
    {
       new: true ,
    })
    .then((thoughtrecords) => {
      console.log(thoughtrecords);
      res.status(200).json(thoughtrecords);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
},
addReaction(req, res){
  Thought.findOneAndUpdate(
    {
      _id: req.params.thoughtId,
    },
    { $addToSet: { reactions: req.body }},
    { new: true },
  )
    .then((thoughtrecords) => {
      console.log(thoughtrecords);
      res.status(200).json(thoughtrecords);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  },

deleteReaction(req, res){
  Thought.findOneAndUpdate(
    {
      _id: req.params.reactionId,
    },
    { $pull: { reactions: req.params.reactionId } },
  )
    .then((thoughtrecords) => {
      if(!thoughtrecords){
        //add message about no thought record found
        res.status(404).json()
      }
      console.log(thoughtrecords);
      res.status(200).json(thoughtrecords);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  }
};
