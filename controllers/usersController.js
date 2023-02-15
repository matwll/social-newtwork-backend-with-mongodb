const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  //get all users
  getUsers(req, res) {
    User.find()
      .then((userrecords) => {
        console.log(userrecords);
        res.status(200).json(userrecords);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  //get 1 user by id + populate thought & friend info
  getSingleUser(req, res) {
    User.findOne({
      _id: req.params.userId,
    })
      .then((userrecords) => {
        console.log(userrecords);
        res.status(200).json(userrecords);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  //post new user
  createUser(req, res) {
    User.create(req.body)
      .then((userrecords) => {
        console.log(userrecords);
        res.status(200).json(userrecords);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  //update user
  updateUser(req, res){
    User.findOneAndUpdate(
      {
        _id: req.params.userId,
      },
      {
        $set: req.body,
      },
      {
         new: true ,
      })
      .then((userrecords) => {
        console.log(userrecords);
        res.status(200).json(userrecords);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      })
  },
  //delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((userrecords) => {
        console.log(userrecords);
        res.status(200).json(userrecords);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  //add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.params.userId,
      },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((userrecords) => {
        console.log(userrecords);
        res.status(200).json(userrecords);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  //delete a friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.params.userId,
      },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((userrecords) => {
        console.log(userrecords);
        res.status(200).json(userrecords);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
