const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: Boolean,
});
userSchema.methods.getToken = function () {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdminm, name: this.name },
    config.get("jwtPrivateKey")
  );
};
const User = mongoose.model("Users", userSchema);
module.exports = User;
