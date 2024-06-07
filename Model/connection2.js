const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/gomycodeBackend")
  .then((data) => {
    console.log("Satatu : connection Successfully");
  })
  .catch((err) => {
    console.log("Satatu : connection Unsuccessfully");
  });

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  age: Number,
  is_connected: {
    type: Boolean,
    require: true,
    default: true,
  },
  city: {
    type: String,
    default: "Marrakech",
  },
});

const userM = mongoose.model("User", UserSchema);

module.exports = userM;
