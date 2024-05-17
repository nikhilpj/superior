const mongoose = require("mongoose");
const schema = mongoose.Schema;

const todoSchema = new schema({
  post: {
    type: String,
    required: true,
  }
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
