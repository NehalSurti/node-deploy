const mongoose = require("mongoose");
const { Schema } = mongoose;

addressSchema = new Schema({
  pincode: { type: Number, required: true },
  street: { type: String, required: true },
  phone: {
    type: String,
    validate: {
      validator: function (value) {
        // Custom validation logic here
        return value.length === 10;
      },
      message: "phone no must be exactly 10 characters long",
    }
  }
});

userSchema = new Schema({
  firstName: { type: String, max: 16, required: true, unique: true },
  lastName: { type: String, max: 16 },
  age: { type: Number, min: 12, max: 100 },
  email: {
    type: String,
    match: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
  },
  address: addressSchema,
});

exports.User = mongoose.models.User
  ? mongoose.model("User")
  : mongoose.model("User", userSchema);
console.log(mongoose.models.User);
