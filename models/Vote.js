const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  pollId: mongoose.Schema.Types.ObjectId,
  voterHash: String,
  optionIndex: Number
},{ timestamps:true });

module.exports = mongoose.model("Vote", voteSchema);
