const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const postSchema = Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  message: {
    type: String
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
