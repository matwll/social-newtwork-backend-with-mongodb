const { Schema, Model, Types } = require('mongoose');
const timeStamp = require("../utils/timestamp")

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default:  Date.now,
      get: date => timeStamp(date)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id:false
  }
);

// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;