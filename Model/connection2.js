const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/gomycodeBackend")
  .then((data) => {
    console.log("satatu Ok");
  })
  .catch((err) => {
    console.log("satatu not Ok");
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
  },
  city: {
    type: String,
    default: "Marrakech",
  },
});



const user = mongoose.model("User", UserSchema);



















module.exports = user;
