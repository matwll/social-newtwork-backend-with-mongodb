const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const timeStamp = require('../utils/timestamp');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default:  Date.now,
      get: date => timeStamp(date)
    },
    username: [
      {
        type: String,
        required: true,
      },
    ],
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true
    
    },
  }
);


thoughtSchema.virtual('ReactionCount').get(function(){
  return this.reactions.length;
})
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;