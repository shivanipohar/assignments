const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("otps", otpSchema);
