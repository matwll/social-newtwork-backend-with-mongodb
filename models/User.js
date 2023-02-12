const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,

        },
        thoughts: [{
            ref:'Thought',
            type:Schema.Types.ObjectId
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
);


userSchema.virtual('FriendCount').get(function(){
    return this.friends.length;
  })

const User = model('User', userSchema);

module.exports = User;