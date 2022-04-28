const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
  },
  completed: {
    type: Boolean,
    defalut: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
