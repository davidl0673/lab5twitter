const mongoose = require("mongoose");

const { Schema } = mongoose;


const postSchema = Schema({
    user: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  }, 
  );

  const Post = mongoose.model("Post", postSchema);

module.exports = Post;