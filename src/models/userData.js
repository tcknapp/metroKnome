const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  today: { type: Date, default: Date.now },
  week: { type: Date },
  date: { type: Date, default: Date.now }
  /*
  Set 'Goals' to Schema
  */
});

const User = mongoose.model("UserData", userDataSchema);

module.exports = User;
