const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  userId: { type: String, require: true },
  userName: { type: String, require: true },
  title: { type: String, require: true },
  author: { type: String, require: true },
  lang: { type: String, require: true },
  description: { type: String, require: true },
  option: { type: String, require: true },
});

module.exports = mongoose.model("Book", bookSchema);
